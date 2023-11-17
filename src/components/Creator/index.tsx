import { useState } from "react"
import { Button, Modal } from "antd"
import Form from "../CustomerForm"
import { useAppDispatch } from "../../store/store"
import { createCustomer } from "../../store/slice"
import { useModal } from "../../hooks/useModal"
import { Customer } from "../../types"
import { emptyCustomer } from "../../constants"

export default function Creator() {
  const dispatch = useAppDispatch()
  const [customer, setCustomer] = useState(emptyCustomer)
  const { isShow, handleClose, handleShow } = useModal()

  const handleChange = (data: Customer) => {
    setCustomer(data)
  }

  const handleCreate = () => {
    dispatch(createCustomer(customer))
    handleClose()
  }

  return (
    <>
      <Button type="primary" onClick={handleShow}>
        Create a new customer
      </Button>
      <Modal
        title="Create a new customer"
        open={isShow}
        onOk={handleCreate}
        onCancel={handleClose}
      >
        <Form customer={customer} onChangeCustomer={handleChange} />
      </Modal>
    </>
  )
}
