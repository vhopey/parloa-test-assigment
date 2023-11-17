import { useState } from "react"
import { Button, Modal } from "antd"
import { EditOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../store/store"
import { editCustomer } from "../../store/slice"
import Form from "../CustomerForm"
import { useModal } from "../../hooks/useModal"
import { Customer } from "../../types"

interface EditorProps {
  customer: Customer
}

export default function Editor({ customer }: EditorProps) {
  const dispatch = useAppDispatch()
  const [customerValue, setCustomerValue] = useState(customer)
  const { isShow, handleClose, handleShow } = useModal()

  const handleChangeCustomer = (data: Customer) => {
    setCustomerValue(data)
  }

  const handleEdit = () => {
    dispatch(editCustomer(customerValue))
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
