'use client'
import { Modal, Row, Col, Input, Divider, Button } from "antd"
import { useState } from "react"

const Modals = (props) => {
  // 接收父组件传递的参数
  const { isModalOpen, setIsModalOpen, title, handleOk } = props

  // 接收父组件传递的config
  const config = props.config

  const [isName] = useState(config[0])
  const [isEmail] = useState(config[1])
  const [isPhone] = useState(config[2])
  
  // 向父组件传递一个函数，用于关闭弹窗
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  // 向父组件传递一个函数，用于传递参数
  const PassParams = (params) => {
    props.PassParams(params)
  }

  return (
    <Modal
      width={800}
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Row gutter={16}>
        {isName && (
          <Col span={8}>
            <label>Name</label>
            <Input placeholder="name" />
          </Col>
        )}
        {isEmail && (
          <Col span={8}>
            <label>Email</label>
            <Input placeholder="email" />
          </Col>
        )}
        {isPhone && (
          <Col span={8}>
            <label>Phone</label>
            <Input placeholder="phone" />
          </Col>
        )}
      </Row>
      <Divider />
      <Button type="primary" onClick={() => PassParams(123)}>PassParams</Button>
    </Modal>
  )
}

export default Modals