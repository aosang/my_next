import { NextResponse } from "next/server"
export const GET = (request) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  return NextResponse.json({
    query
  })
}