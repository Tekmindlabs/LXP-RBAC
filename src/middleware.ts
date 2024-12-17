// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { DefaultJWT } from "next-auth/jwt";


interface CustomJWT extends DefaultJWT {
  roles: string[];
  permissions: string[];
}

export default withAuth(
  async function middleware(req) {
    const token = (await getToken({ req })) as CustomJWT | null;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

    if (isAuthPage) {
      if (isAuth && token) { // Add null check for token
        // Redirect to role-specific dashboard
        return NextResponse.redirect(new URL(`/dashboard/${token.roles[0]}`, req.url));
      }
      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/auth/signin?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    // Handle dashboard root redirect
    if (req.nextUrl.pathname === "/dashboard" && token) { // Add null check for token
      return NextResponse.redirect(new URL(`/dashboard/${token.roles[0]}`, req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};