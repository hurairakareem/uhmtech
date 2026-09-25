import { NextResponse } from "next/server";
import { sanitize, validateContact, type ContactPayload } from "@/lib/contact";
import { parseDataUrl, sendContactEmail } from "@/lib/email";
import { saveInquiry } from "@/lib/inquiries";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: ContactPayload;
  const contentType = request.headers.get("content-type") ?? "";

  try {
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries()) as ContactPayload;
    } else {
      body = (await request.json()) as ContactPayload;
    }
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const payload: ContactPayload = {
    name: sanitize(body.name ?? ""),
    company: sanitize(body.company ?? ""),
    email: sanitize(body.email ?? ""),
    phone: sanitize(body.phone ?? ""),
    service: sanitize(body.service ?? ""),
    budget: sanitize(body.budget ?? ""),
    details: sanitize(body.details ?? ""),
    attachment: body.attachment ? String(body.attachment) : "",
    attachmentName: body.attachmentName ? sanitize(body.attachmentName) : "",
  };

  const errors = validateContact(payload);
  if (payload.attachment) {
    if (!parseDataUrl(payload.attachment) || !payload.attachmentName) {
      errors.attachment = "The attachment could not be read. Please try a smaller file (max 8 MB).";
    }
  }
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: "Please correct the highlighted fields." }, { status: 422 });
  }

  try {
    await saveInquiry(payload);
  } catch (error) {
    console.error("Inquiry store failed", error);
  }

  try {
    await sendContactEmail(payload);
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json(
      { ok: false, message: "We could not send your request. Please email info@uhmtech.com directly." },
      { status: 502 },
    );
  }

  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "uhm-website",
          submittedAt: new Date().toISOString(),
          name: payload.name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          service: payload.service,
          budget: payload.budget,
          details: payload.details,
          attachmentName: payload.attachmentName || undefined,
        }),
      });
    } catch {
      // The inquiry already reached info@uhmtech.com; do not fail the visitor.
    }
  }

  return NextResponse.json({ ok: true });
}
