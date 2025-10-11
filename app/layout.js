import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children, product, cart }) {
  return (
    <html>
      <body className="p-6">
        <div className="p-10 mb-6 bg-sky-600 text-white rounded-xl">
          Layout
        </div>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/">Home</Link>
          <Link href="/my-product">My Product</Link>
          <Link href="/my-item">My Item</Link>
        </nav>
        <div className="flex gap-6">
          {product}
          {cart}
        </div>
        {children}
      </body>
    </html>
  )
}
