'use client'

import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners'

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 当组件挂载后，设置loading为false
    setLoading(false)
  }, [])

  if (!loading) {
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50">
      <BounceLoader color="#36d7b7" size={50} />
    </div>
  )
}

