import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { ContactPayload } from "@/lib/contact";

export type Inquiry = {
  id: string;
  createdAt: string;
  status: "new" | "read";
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
  attachmentName: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "inquiries.json");

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(items: Inquiry[]) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(items, null, 2), "utf8");
}

export async function saveInquiry(payload: ContactPayload): Promise<Inquiry> {
  const inquiry: Inquiry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    service: payload.service,
    budget: payload.budget,
    details: payload.details,
    attachmentName: payload.attachmentName ?? "",
  };
  const items = await readAll();
  items.unshift(inquiry);
  await writeAll(items);
  return inquiry;
}

export async function listInquiries() {
  return readAll();
}

export async function getInquiry(id: string) {
  const items = await readAll();
  return items.find((item) => item.id === id) ?? null;
}

export async function markInquiryRead(id: string) {
  const items = await readAll();
  const next = items.map((item) => (item.id === id ? { ...item, status: "read" as const } : item));
  await writeAll(next);
  return next.find((item) => item.id === id) ?? null;
}

export function inquiryKpis(items: Inquiry[]) {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const week = items.filter((item) => now - Date.parse(item.createdAt) <= 7 * day).length;
  const month = items.filter((item) => now - Date.parse(item.createdAt) <= 30 * day).length;
  const unread = items.filter((item) => item.status === "new").length;
  const uniqueSenders = new Set(items.map((item) => item.email.toLowerCase())).size;
  const services = items.reduce<Record<string, number>>((acc, item) => {
    const key = item.service || "Unspecified";
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  const topService = Object.entries(services).sort((a, b) => b[1] - a[1])[0];
  return {
    total: items.length,
    week,
    month,
    unread,
    uniqueSenders,
    topService: topService ? { name: topService[0], count: topService[1] } : null,
    services,
  };
}
