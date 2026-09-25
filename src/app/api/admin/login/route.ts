import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  adminCookieOptions,
  adminCredentialsConfigured,
  createAdminToken,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!adminCredentialsConfigured()) {
    return NextResponse.json({ ok: false, message: "Admin login is not configured." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { username?: string; password?: string } | null;
  const username = body?.username?.trim() ?? "";
  const password = body?.password ?? "";

  if (!verifyAdminCredentials(username, password)) {
    return NextResponse.json({ ok: false, message: "Invalid username or password." }, { status: 401 });
  }

  const token = await createAdminToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, adminCookieOptions());
  return response;
}
