import { NextResponse } from "next/server"

// export const GET = (request, { params }) => {
//   const id = params.id
//   return NextResponse.json({
//     id
//   })
// }

export const GET = async (request, { params }) => {
  const field = request.nextUrl.searchParams.get("dataField")
  const data = await ((await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)).json())
  const result = field? { [field]: data[field] } : data
  return NextResponse.json(result)
}