import { NextResponse } from "next/server";
import { sanitize, validateContact, type ContactPayload } from "@/lib/contact";

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
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: "Please correct the highlighted fields." }, { status: 422 });
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
          ...payload,
        }),
      });
    } catch {
      return NextResponse.json(
        { ok: false, message: "We could not deliver your request. Please email us directly." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
