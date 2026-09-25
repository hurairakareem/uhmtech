import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ADMIN_PORTAL,
  EMPLOYEE_PORTAL,
  isPortalLoginPath,
  isPortalPath,
  PORTAL_COOKIE,
  readPortalToken,
} from "@/lib/portal-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/uhm-console" || pathname.startsWith("/uhm-console/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace("/uhm-console", ADMIN_PORTAL) || ADMIN_PORTAL;
    return NextResponse.redirect(url);
  }

  if (!isPortalPath(pathname)) {
    return NextResponse.next();
  }

  const session = await readPortalToken(request.cookies.get(PORTAL_COOKIE)?.value);
  const login = isPortalLoginPath(pathname);

  if (!session && !login) {
    const url = request.nextUrl.clone();
    url.pathname = `${ADMIN_PORTAL}/login`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (session && login) {
    const url = request.nextUrl.clone();
    url.pathname = session.role === "admin" ? ADMIN_PORTAL : EMPLOYEE_PORTAL;
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (session?.role === "employee" && pathname.startsWith(ADMIN_PORTAL) && !login) {
    const url = request.nextUrl.clone();
    url.pathname = EMPLOYEE_PORTAL;
    url.search = "";
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: [
    "/admin-portal",
    "/admin-portal/:path*",
    "/employee-portal",
    "/employee-portal/:path*",
    "/uhm-console",
    "/uhm-console/:path*",
  ],
};
