import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  // Jika belum login dan akses /admin, redirect ke /login
  if (pathname.startsWith("/admin") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika sudah login tapi bukan admin atau editor, redirect ke beranda
  if (pathname.startsWith("/admin") && session?.user?.role !== "admin" && session?.user?.role !== "editor") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Jika sudah login dan akses /login atau /register
  if ((pathname === "/login" || pathname === "/register") && session) {
    // Hanya redirect ke admin jika role-nya valid (admin/editor)
    if (session?.user?.role === "admin" || session?.user?.role === "editor") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    // Jika tidak memiliki role yang valid, biarkan mereka di halaman login untuk bisa login ulang
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};
