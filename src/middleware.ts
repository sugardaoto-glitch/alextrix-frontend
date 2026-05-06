import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  // Auth state is stored client-side (localStorage via zustand persist),
  // so the actual guard logic runs in <AppGuard /> on app routes.
  // This middleware is reserved for future server-side concerns
  // (e.g., locale detection, redirects) and is intentionally a no-op for now.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
