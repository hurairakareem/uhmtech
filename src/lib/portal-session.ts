import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_PORTAL, EMPLOYEE_PORTAL, PORTAL_COOKIE, readPortalToken, type PortalRole } from "@/lib/portal-auth";

export async function getPortalSession() {
  const jar = await cookies();
  return readPortalToken(jar.get(PORTAL_COOKIE)?.value);
}

export async function requirePortalSession(role?: PortalRole) {
  const session = await getPortalSession();
  if (!session) redirect(`${ADMIN_PORTAL}/login`);
  if (role && session.role !== role) {
    redirect(session.role === "admin" ? ADMIN_PORTAL : EMPLOYEE_PORTAL);
  }
  return session;
}
