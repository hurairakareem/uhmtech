import { NextResponse } from "next/server";
import { PORTAL_COOKIE, portalCookieOptions } from "@/lib/portal-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(PORTAL_COOKIE, "", { ...portalCookieOptions(), maxAge: 0 });
  return response;
}
