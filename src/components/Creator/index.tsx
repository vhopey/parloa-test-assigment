import { Button, Modal, Form } from "antd"
import { v4 as uuidv4 } from "uuid"
import CustomerForm from "../CustomerForm"
import { useAppDispatch } from "../../store/store"
import { createCustomer } from "../../store/slice"
import { useModal } from "../../hooks/useModal"
import { emptyCustomer } from "../../constants"
import { normalizeProjectsData, checkErrors } from "../../helpers"
import { useState } from "react"

export default function Creator() {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState("")
  const [form] = Form.useForm()
  const { isShow, handleClose, handleShow } = useModal()

  const handleCreate = () => {
    const formData = form.getFieldsValue()

    if (checkErrors(formData)) {
      setErrorMessage("Fill in required fields")
    } else {
      dispatch(
        createCustomer({
          ...formData,
          projects: normalizeProjectsData(formData.projects),
          id: uuidv4(),
        }),
      )
      handleClose()
      setErrorMessage("")
      form.setFieldsValue(emptyCustomer)
    }
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
        width="700px"
      >
        <CustomerForm
          form={form}
          customer={emptyCustomer}
          errorMessage={errorMessage}
        />
      </Modal>
    </>
  )
}
