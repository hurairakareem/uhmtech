import { ImapFlow, type FetchMessageObject } from "imapflow";
import { simpleParser } from "mailparser";
import type { Inquiry } from "@/lib/inquiries";

const GMAIL_HOST = "imap.gmail.com";
const LIST_LIMIT = 80;

export type GmailInboxResult = {
  items: Inquiry[];
  mailbox: string;
  error: string | null;
};

function imapAttempts() {
  const user = (process.env.GMAIL_IMAP_USER?.trim() || "infouhmtech@gmail.com").toLowerCase();
  const pass = (process.env.GMAIL_IMAP_PASS ?? "").replace(/\s/g, "");
  return user && pass ? [{ user, pass }] : [];
}

export function configuredMailbox() {
  return (process.env.GMAIL_IMAP_USER?.trim() || "infouhmtech@gmail.com").toLowerCase();
}

function addressName(value?: { name?: string; address?: string } | null) {
  const email = value?.address?.trim() || "";
  const name = value?.name?.trim() || "";
  return { email, name: name || email.split("@")[0] || "Unknown sender" };
}

function isSeen(msg: FetchMessageObject) {
  const flags = msg.flags ? [...msg.flags] : [];
  return flags.some((flag) => String(flag).toLowerCase() === "\\seen");
}

function inquiryFromMessage(msg: FetchMessageObject, details = "", attachmentName = ""): Inquiry {
  const from = addressName(msg.envelope?.from?.[0]);
  const subject = msg.envelope?.subject?.trim() || "(no subject)";
  const createdAt = msg.envelope?.date ? new Date(msg.envelope.date).toISOString() : new Date().toISOString();
  return {
    id: `g-${msg.uid}`,
    createdAt,
    status: isSeen(msg) ? "read" : "new",
    name: from.name,
    company: "",
    email: from.email,
    phone: "",
    service: subject,
    budget: "",
    details,
    attachmentName,
    source: "gmail",
    subject,
  };
}

async function withClient<T>(fn: (client: ImapFlow, mailbox: string) => Promise<T>) {
  const attempts = imapAttempts();
  if (!attempts.length) {
    throw new Error(
      "Gmail inbox is not configured. Set GMAIL_IMAP_USER=infouhmtech@gmail.com and GMAIL_IMAP_PASS to a Gmail App Password.",
    );
  }
  let lastError: unknown;
  for (const creds of attempts) {
    const client = new ImapFlow({
      host: GMAIL_HOST,
      port: 993,
      secure: true,
      auth: creds,
      logger: false,
      greetingTimeout: 12_000,
    });
    try {
      await client.connect();
    } catch (error) {
      lastError = error;
      try {
        client.close();
      } catch {
        /* ignore */
      }
      continue;
    }
    try {
      return await fn(client, creds.user);
    } finally {
      try {
        await client.logout();
      } catch {
        client.close();
      }
    }
  }
  throw lastError instanceof Error
    ? lastError
    : new Error("Could not sign in to the Gmail inbox.");
}

function parseUid(id: string) {
  const match = /^g-(\d+)$/.exec(id);
  return match ? Number(match[1]) : null;
}

export function isGmailInquiryId(id: string) {
  return Boolean(parseUid(id));
}

export async function listGmailInbox(): Promise<GmailInboxResult> {
  const mailbox = configuredMailbox();
  try {
    const listed = await withClient(async (client, connectedMailbox) => {
      const lock = await client.getMailboxLock("INBOX");
      try {
        const exists = client.mailbox?.exists ?? 0;
        if (!exists) return { items: [] as Inquiry[], mailbox: connectedMailbox };
        const start = Math.max(1, exists - LIST_LIMIT + 1);
        const collected: Inquiry[] = [];
        for await (const msg of client.fetch(`${start}:*`, { uid: true, envelope: true, flags: true })) {
          collected.push(inquiryFromMessage(msg));
        }
        collected.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
        return { items: collected, mailbox: connectedMailbox };
      } finally {
        lock.release();
      }
    });
    return { items: listed.items, mailbox: listed.mailbox, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not read the Gmail inbox.";
    console.error("Gmail inbox list failed", error);
    return { items: [], mailbox, error: message };
  }
}

export async function getGmailMessage(id: string): Promise<Inquiry | null> {
  const uid = parseUid(id);
  if (!uid) return null;
  try {
    return await withClient(async (client) => {
      const lock = await client.getMailboxLock("INBOX");
      try {
        const msg = await client.fetchOne(String(uid), { uid: true, envelope: true, flags: true, source: true }, { uid: true });
        if (!msg) return null;
        let details = "";
        let attachmentName = "";
        if (msg.source) {
          const parsed = await simpleParser(msg.source);
          details = (parsed.text || "").trim() || String(parsed.html || "")
            .replace(/<style[\s\S]*?<\/style>/gi, " ")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim();
          const file = parsed.attachments.find((item) => item.filename);
          attachmentName = file?.filename ?? "";
        }
        return inquiryFromMessage(msg, details, attachmentName);
      } finally {
        lock.release();
      }
    });
  } catch (error) {
    console.error("Gmail inbox message failed", error);
    return null;
  }
}

export async function markGmailRead(id: string) {
  const uid = parseUid(id);
  if (!uid) return;
  try {
    await withClient(async (client) => {
      const lock = await client.getMailboxLock("INBOX");
      try {
        await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true });
      } finally {
        lock.release();
      }
    });
  } catch (error) {
    console.error("Gmail mark-read failed", error);
  }
}
