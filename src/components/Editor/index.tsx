import { useState } from "react"
import { Button, Modal } from "antd"
import { EditOutlined } from "@ant-design/icons"
import Form from "../CustomerForm"
import { useModal } from "../../hooks/useModal"
import { Customer } from "../../types"

interface EditorProps {
  customer: Customer
}

export default function Editor({ customer }: EditorProps) {
  const [customerValue, setCustomerValue] = useState(customer)

  const { isShow, handleClose, handleShow } = useModal()

  const handleChangeCustomer = (data: Customer) => {
    setCustomerValue(data)
  }

  const handleEdit = () => {
    // add action
    console.log(customerValue)
    handleClose()
  }

  return (
    <>
      <Button
        type="default"
        shape="circle"
        onClick={handleShow}
        icon={<EditOutlined />}
      />
      <Modal
        title="Edit a customer"
        open={isShow}
        onOk={handleEdit}
        onCancel={handleClose}
      >
        <Form
          customer={customerValue}
          onChangeCustomer={handleChangeCustomer}
        />
      </Modal>
    </>
  )
}
