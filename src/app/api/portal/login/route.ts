import { NextResponse } from "next/server";
import { createPortalToken, portalCookieOptions, PORTAL_COOKIE, portalSecretConfigured } from "@/lib/portal-auth";
import { authenticatePortalUser } from "@/lib/portal-db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!portalSecretConfigured()) {
    return NextResponse.json({ ok: false, message: "Portal is not configured. Set ADMIN_SESSION_SECRET." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { username?: string; password?: string } | null;
  const username = body?.username?.trim() ?? "";
  const password = body?.password ?? "";
  const user = await authenticatePortalUser(username, password);
  if (!user) {
    return NextResponse.json({ ok: false, message: "Invalid username or password." }, { status: 401 });
  }

  const token = await createPortalToken(user);
  const response = NextResponse.json({ ok: true, role: user.role });
  response.cookies.set(PORTAL_COOKIE, token, portalCookieOptions());
  return response;
}
