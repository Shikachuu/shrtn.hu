import { NextResponse, NextRequest } from "next/server"
 
export const runtime = "experimental-edge"

export async function middleware(request: NextRequest) {
  const { shrtn, BASE_URL } = (process.env as unknown as { shrtn: KVNamespace, BASE_URL: string })

  const url = await shrtn.get(request.nextUrl.pathname.substring(1))
  
  if (url === null) {
    return NextResponse.redirect(`${BASE_URL}/not-found`)
  }

  return NextResponse.redirect(url)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/([0-9a-z]+)",
}