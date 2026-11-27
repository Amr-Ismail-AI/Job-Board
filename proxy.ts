import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const hostname = host.split(":")[0];
  const url = request.nextUrl;
  const pathname = url.pathname;

  const isAdminHost = hostname === "admin.localhost";
  const isMainDomain = hostname === "localhost";

  const isDashboardPath =
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/");

  console.log("[PROXY DEBUG]", {
    hostname,
    pathname,
    isAdminHost,
    isMainDomain,
  });

  // Admin Subdomain: redirect only the homepage
  if (isAdminHost && pathname === "/") {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  // Main Domain: prevent dashboard access
  if (isMainDomain && isDashboardPath) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};