import { useState } from "react"
import { Button, Modal, Form } from "antd"
import { EditOutlined } from "@ant-design/icons"
import CustomerForm from "../CustomerForm"
import { useAppDispatch } from "../../store/store"
import { editCustomer } from "../../store/slice"
import { useModal } from "../../hooks/useModal"
import { normalizeProjectsData, checkErrors } from "../../utils"
import { Customer } from "../../types"

interface EditorProps {
  customer: Customer
}

export default function Editor({ customer }: EditorProps) {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState("")
  const [form] = Form.useForm()
  const { isShow, handleClose, handleShow } = useModal()

  const handleEdit = () => {
    const formData = form.getFieldsValue()

    if (checkErrors(formData)) {
      setErrorMessage("Fill in required fields")
    } else {
      dispatch(
        editCustomer({
          ...customer,
          ...formData,
          projects: normalizeProjectsData(formData.projects),
        }),
      )
      handleClose()
      setErrorMessage("")
    }
  }

  return (
    <>
      <Button
        type="default"
        shape="circle"
        onClick={handleShow}
        icon={<EditOutlined />}
        data-testid="edit-icon-button"
      />
      <Modal
        title="Edit a customer"
        open={isShow}
        onOk={handleEdit}
        onCancel={handleClose}
        width="700px"
      >
        <CustomerForm
          customer={customer}
          form={form}
          errorMessage={errorMessage}
        />
      </Modal>
    </>
  )
}
