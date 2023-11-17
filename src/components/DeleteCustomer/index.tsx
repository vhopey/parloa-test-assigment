import { Button, Modal } from "antd"
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons"

const { confirm } = Modal

export default function DeleteCustomer() {
  const handleDelete = () => {
    // delete action
  }

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this customer?",
      icon: <ExclamationCircleFilled />,
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: handleDelete,
    })
  }

  return (
    <>
      <Button
        type="default"
        shape="circle"
        onClick={showDeleteConfirm}
        icon={<DeleteOutlined />}
      />
    </>
  )
}
