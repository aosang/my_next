import { NextResponse } from "next/server"

export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return NextResponse.json(data)
}

// export async function POST(request) {
//   const myText = await request.json()
  
//   return NextResponse.json({
//     // 生成一个五位整数的随机id
//     id: Math.floor(Math.random() * 90000) + 10000,
//     data: myText
//   }, { status: 200 })
// }

// export const GET = async (request, context) => {
//   // 访问 /api/posts, pathname 的值为 /api/posts
// 	const pathname = request.nextUrl.pathname
// 	// 访问 /api/posts?name=mike, searchParams 的值为 { 'name': 'mike' }
// 	const searchParams = request.nextUrl.searchParams
  
//   // 将 URLSearchParams 转换为普通对象
//   const params = Object.fromEntries(searchParams)
    
//   return NextResponse.json({
//     pathname,
//     params
//   })
// }

