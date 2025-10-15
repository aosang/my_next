import { NextResponse } from "next/server"

export const GET = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: {
      revalidate: 5
    }
  })
  const data = await res.json()
  return NextResponse.json(data)
}