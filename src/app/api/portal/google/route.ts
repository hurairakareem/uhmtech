import { NextResponse } from "next/server";
import { requireApiSession } from "@/lib/portal-api";
import { checkGoogleMaps } from "@/lib/google";

export const runtime = "nodejs";

export async function GET() {
  const { error } = await requireApiSession("admin");
  if (error) return error;
  const result = await checkGoogleMaps();
  return NextResponse.json({ ok: true, ...result });
}
