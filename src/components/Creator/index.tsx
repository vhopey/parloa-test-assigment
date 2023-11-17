import { useState } from "react"
import { Button, Modal } from "antd"
import Form from "../CustomerForm"
import { useModal } from "../../hooks/useModal"
import { Customer } from "../../types"
import { emptyCustomer } from "../../constants"

export default function Creator() {
  const [customer, setCustomer] = useState(emptyCustomer)
  const { isShow, handleClose, handleShow } = useModal()

  const handleChange = (data: Customer) => {
    setCustomer(data)
  }

  const handleCreate = () => {
    // add action
    console.log(customer)
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
