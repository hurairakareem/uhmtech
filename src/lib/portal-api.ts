import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PORTAL_COOKIE, readPortalToken, type PortalRole } from "@/lib/portal-auth";

export async function requireApiSession(role?: PortalRole) {
  const jar = await cookies();
  const session = await readPortalToken(jar.get(PORTAL_COOKIE)?.value);
  if (!session) {
    return { session: null, error: NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 }) };
  }
  if (role && session.role !== role) {
    return { session: null, error: NextResponse.json({ ok: false, message: "Forbidden." }, { status: 403 }) };
  }
  return { session, error: null };
}
