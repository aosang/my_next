'use client'
import { useMemo } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'

const AntdRegistry = ({ children }) => {
  const cache = useMemo(() => createCache(), [])
  
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{
        __html: extractStyle(cache, true),
      }}
    />
  ))
  
  return (
    <StyleProvider cache={cache}>
      {children}
    </StyleProvider>
  )
}

export default AntdRegistry
