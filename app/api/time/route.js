import { NextResponse } from "next/server"

export const GET = (request) => {
  const searchParams = request.nextUrl.searchParams
  return NextResponse.json({ 
    data: new Date().toLocaleTimeString(), 
    params: searchParams.toString() 
  })
}
