'use client'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
import Link from 'next/link'

// app/dashboard/page.js
// async function getData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000))
//   return {
//     message: 'Hello, Dashboard!',
//   }
// }
// export default async function DashboardPage(props) {
//   const { message } = await getData()
//   return <h1>{message}</h1>
// }

// export default function Page() {
//   const [showError, setShowError] = useState(false);

//   const handleGetError = () => {
//     setShowError(true);
//   };

//   const handleReset = () => {
//     setShowError(false);
//   };

//   if (showError) {
//     return (
//       <div style={{padding: '20px'}}>
//         <h2>Something went wrong!</h2>
//         <p>测试错误</p>
//         <button onClick={handleReset}>Try again</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Dashboard 页面</h1>
//       <p>点击下面的按钮来测试错误处理：</p>
//       <button onClick={handleGetError}>触发错误</button>
//     </div>
//   )
// }


// export default function DashboardPage() {
//   const pathname = usePathname()
//   const [navLinks, setNavLinks] = useState([
//     { name: 'Dashboard', href: '/dashboard' },
//     { name: 'Settings', href: '/dashboard/settings' },
//     { name: 'About', href: '/dashboard/about' }
//   ])
//   return (
//     <>
//       {navLinks.map((link) => {
//         const isActive = pathname === link.href
 
//         return (
//           <Link
//             style={{display: 'block'}}
//             className={isActive ? 'text-blue' : 'text-black'} 
//             href={link.href}
//             key={link.name}
//           >
//             {link.name}
//           </Link>
//         )
//       })}
//     </>
//   )
// }

// const DashboardPage = () => {
//   const pathname = usePathname()
 
//   function switchLocale(locale) {
//     let newPath = ''
//     // 移除现有的语言前缀（如果有的话）
//     let cleanPath = pathname
//     // 检查路径是否以语言代码开头（/en 或 /fr）
//     if (cleanPath.match(/^\/(en|fr)\//)) {
//       // 移除语言前缀，保留后面的路径
//       cleanPath = cleanPath.replace(/^\/(en|fr)/, '')
//     }
//     newPath = `/${locale}${cleanPath}`
//     console.log(newPath)
//     window.history.replaceState(null, '', newPath)
//   }
 
//   return (
//     <>
//       <button onClick={() => switchLocale('en')}>English</button>
//       <button onClick={() => switchLocale('fr')}>French</button>
//     </>
//   )
// }

// export default DashboardPage

const DashboardPage = () => {
  return (
    <>
      <Link className='block' href="/blog/123">Normal Blog</Link>
      <Link className='block' href="/blog/aosang">Aosang Blog</Link>
    </>
  )
}

export default DashboardPage