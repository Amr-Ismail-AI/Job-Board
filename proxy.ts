import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const host = ( request.headers.get("host") ?? "" ).toLowerCase()
    const url = request.nextUrl
    const pathname = url.pathname

    const isAdmeinHost = host === "admin.localhost:3000"
    if (isAdmeinHost && pathname.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    const isMailDomain = host === "localhost:3000"
    if (isMailDomain && pathname.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ['/dashboard/:path*'],
}