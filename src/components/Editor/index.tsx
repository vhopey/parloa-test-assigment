import { Button, Modal } from "antd"
import { EditOutlined } from "@ant-design/icons"
import { useModal } from "../../hooks/useModal"

export default function Editor() {
  const { isShow, handleClose, handleShow } = useModal()
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
        onOk={() => {}}
        onCancel={handleClose}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
