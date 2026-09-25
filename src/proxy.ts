import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, ADMIN_PATH, readAdminToken } from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith(ADMIN_PATH)) {
    return NextResponse.next();
  }

  const session = await readAdminToken(request.cookies.get(ADMIN_COOKIE)?.value);
  const isLogin = pathname === `${ADMIN_PATH}/login`;

  if (!session && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = `${ADMIN_PATH}/login`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (session && isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_PATH;
    url.search = "";
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: ["/uhm-console/:path*"],
};
