import { NextResponse, NextRequest } from "next/server"
 
export const runtime = "experimental-edge"

export async function middleware(request: NextRequest) {
  const { shrtn } = (process.env as unknown as { shrtn: KVNamespace })

  let url = await shrtn.get(request.nextUrl.pathname)

  url ??= process.env.URL || "https://localhost:3000" + "/not-found"

  return NextResponse.redirect(url)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/([0-9a-z]+)",
}