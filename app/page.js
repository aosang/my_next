
// import { redirect } from 'next/navigation'

// export default function RootPage() {
//   redirect('/dashboard')
// }
'use client'
import { Button } from "antd"
import Modal from "./components/Modal"
import { useState } from "react"
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showTheModalEvent = () => {
    setIsModalOpen(true)
  }

  // 接收子组件传递的函数
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const PassParams = (params) => {
    console.log('PassParams', params)
  }

  return (
    <>
      <Button type="primary" onClick={showTheModalEvent}>Button</Button>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Basic Modal"
        handleOk={handleOk}
        config={['isName']}
        PassParams={PassParams}
      /> 
    </>
  )
}

export default Home