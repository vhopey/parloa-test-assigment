import { Button, Modal } from "antd"
import { useModal } from "../../hooks/useModal"

export default function Creator() {
  const { isShow, handleClose, handleShow } = useModal()
  return (
    <>
      <Button type="primary" onClick={handleShow}>
        Create a new customer
      </Button>
      <Modal
        title="Create a new customer"
        open={isShow}
        onOk={() => {}}
        onCancel={handleClose}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
