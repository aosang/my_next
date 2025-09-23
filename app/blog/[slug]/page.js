'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const BlogPage = () => {
  const { slug } = useParams()
  useEffect(() => {
    console.log(slug)
  }, [slug])
  return <div>Blog Page: {slug}</div>
}

export default BlogPage