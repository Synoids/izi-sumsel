import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  // Jika belum login dan akses /admin, redirect ke /login
  if (pathname.startsWith("/admin") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika sudah login tapi bukan admin, redirect ke beranda agar tidak terjadi infinite loop
  if (pathname.startsWith("/admin") && session?.user?.role !== "admin" && session?.user?.role !== "editor") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Jika sudah login dan akses /login atau /register, redirect ke /admin
  if ((pathname === "/login" || pathname === "/register") && session) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};
