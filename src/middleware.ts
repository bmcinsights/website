import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const userStatus = request.cookies.get("UserStatus")?.value;

  // Define public paths
  const isPublicPath =
    path === "/" ||
    path === "/webLogin" ||
    path === "/signup" ||
    path === "/blog" ||
    path === "/verifyemail";

  // Allow root path ("/") without clearing cookies
  if (path === "/") {
    return NextResponse.next();
  }
  
    // Redirect to profile if the user is already logged in and accessing a public path
    if (isPublicPath && token && path !== "/blog") {
      return NextResponse.redirect(new URL("/profile", request.nextUrl));
    }

  // Redirect to login if accessing protected paths without a token
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/webLogin", request.nextUrl));
  }

  // Handle restricted paths
  if (
    path === "/profile" ||
    path === "/threads" ||
    path === "/calender" ||
    path === "/userprofile"
  ) {
    if (userStatus !== "true") {
      const response = NextResponse.redirect(new URL("/errorpage", request.nextUrl));

      // Clear invalid cookies
      response.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date(0),
      });
      response.cookies.set("UserStatus", "", {
        httpOnly: true,
        expires: new Date(0),
      });

      return response;
    }
  }

  // Default behavior: Proceed to the next middleware or page
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/signup",
    "/webLogin",
    "/verifyemail",
    "/threads",
    "/blog",
    "/events",
    "/calender",
    "/userprofile",
  ],
};