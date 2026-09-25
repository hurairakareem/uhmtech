import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/contact";

const PUBLIC_SITE_URL = "https://uhmtech.com";
const LOGO_URL = `${PUBLIC_SITE_URL}/brand/New_logo.png`;

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  const safe = escapeHtml(value || "—");
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #d5e3f2;width:160px;vertical-align:top;color:#60758c;font-size:13px;font-weight:700;letter-spacing:0.02em;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;border-bottom:1px solid #d5e3f2;color:#102a4a;font-size:14px;line-height:1.5;">${safe}</td>
    </tr>
  `;
}

export function parseDataUrl(dataUrl: string) {
  const match = /^data:([^;]+);base64,(.+)$/.exec(dataUrl.trim());
  if (!match) return null;
  const contentType = match[1];
  const content = Buffer.from(match[2], "base64");
  if (!content.length || content.length > MAX_ATTACHMENT_BYTES) return null;
  return { contentType, content };
}

export function buildContactEmail(payload: ContactPayload, siteUrl: string) {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });
  const detailsHtml = escapeHtml(payload.details || "—").replace(/\n/g, "<br />");
  const year = new Date().getFullYear();

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New inquiry from ${escapeHtml(payload.name)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f8fc;font-family:'Plus Jakarta Sans',Segoe UI,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f8fc;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #d5e3f2;">
            <tr>
              <td style="background:linear-gradient(135deg,#082f6b 0%,#0d4f9e 55%,#0b63ce 100%);padding:28px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:14px;">
                      <img src="${LOGO_URL}" alt="UHM Tech" width="48" height="57" style="display:block;border:0;border-radius:8px;background:#ffffff;padding:4px;height:57px;width:auto;" />
                    </td>
                    <td style="vertical-align:middle;">
                      <div style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.02em;">UHM Tech</div>
                      <div style="color:#70c7ff;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;padding-top:2px;">Website inquiry</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0;color:#0b63ce;font-size:12px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;">New contact request</p>
                <h1 style="margin:8px 0 0;color:#082f6b;font-size:22px;line-height:1.3;">${escapeHtml(payload.name)} wants to talk</h1>
                <p style="margin:10px 0 0;color:#60758c;font-size:14px;">Submitted ${escapeHtml(submittedAt)} via ${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", payload.name)}
                  ${row("Company", payload.company)}
                  ${row("Email", payload.email)}
                  ${row("Phone", payload.phone)}
                  ${row("Service", payload.service)}
                  ${row("Budget", payload.budget)}
                  ${payload.attachmentName ? row("Attachment", payload.attachmentName) : ""}
                </table>
                <div style="margin-top:20px;padding:16px 18px;background:#f4f8fc;border-radius:12px;border:1px solid #d5e3f2;">
                  <p style="margin:0 0 8px;color:#60758c;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;">Project details</p>
                  <p style="margin:0;color:#102a4a;font-size:14px;line-height:1.65;">${detailsHtml}</p>
                </div>
                <p style="margin:22px 0 0;">
                  <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;background:#0b63ce;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 18px;border-radius:999px;">Reply to ${escapeHtml(payload.name)}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background:#082f6b;color:#70c7ff;font-size:12px;">
                © ${year} UHM Tech · This message was sent from the website contact form. Do not share it outside your team.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `New UHM Tech website inquiry`,
    ``,
    `Name: ${payload.name}`,
    `Company: ${payload.company || "—"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget || "—"}`,
    payload.attachmentName ? `Attachment: ${payload.attachmentName}` : "",
    ``,
    `Project details:`,
    payload.details,
    ``,
    `Submitted: ${submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { html, text };
}

function mailEnv() {
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@uhmtech.com";
  const user = process.env.SMTP_USER ?? "usamarayan80@gmail.com";
  const configuredFrom = process.env.SMTP_FROM ?? "";
  const from =
    configuredFrom && !configuredFrom.toLowerCase().includes("gmail.com")
      ? configuredFrom.includes("<")
        ? configuredFrom
        : `"UHM Tech" <${configuredFrom}>`
      : `"UHM Tech" <${to}>`;
  return { to, from, user, siteUrl: PUBLIC_SITE_URL };
}

export async function sendContactEmail(payload: ContactPayload) {
  const { to, from, user, siteUrl } = mailEnv();
  const { html, text } = buildContactEmail(payload, siteUrl);
  const subject = `New inquiry: ${payload.name}${payload.service ? ` · ${payload.service}` : ""}`;
  const userFile = payload.attachment ? parseDataUrl(payload.attachment) : null;
  const attachments =
    userFile && payload.attachmentName
      ? [
          {
            filename: payload.attachmentName,
            content: userFile.content,
            contentType: userFile.contentType,
          },
        ]
      : [];

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject,
        html,
        text,
        ...(attachments.length
          ? {
              attachments: attachments.map((file) => ({
                filename: file.filename,
                content: file.content.toString("base64"),
                content_type: file.contentType,
              })),
            }
          : {}),
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      throw new Error(detail || "Resend rejected the message.");
    }
    return;
  }

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const pass = (process.env.SMTP_PASS ?? "").replace(/\s/g, "");
  if (!user || !pass) {
    throw new Error("Email is not configured. Set SMTP_USER and SMTP_PASS (Gmail App Password).");
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const isGmail = host === "smtp.gmail.com" || user.endsWith("@gmail.com");
  const transporter = nodemailer.createTransport(
    isGmail
      ? { service: "gmail", auth: { user, pass } }
      : { host, port, secure, auth: { user, pass } },
  );

  await transporter.sendMail({
    from,
    to,
    replyTo: {
      name: payload.name,
      address: payload.email,
    },
    envelope: {
      from: user,
      to,
    },
    subject,
    html,
    text,
    ...(attachments.length ? { attachments } : {}),
  });
}
