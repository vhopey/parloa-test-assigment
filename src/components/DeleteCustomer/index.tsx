import { Button, Modal } from "antd"
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons"
import { useAppDispatch } from "../../store/store"
import { deleteCustomer } from "../../store/slice"

const { confirm } = Modal

export default function DeleteCustomer({ id }: { id: string }) {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch(deleteCustomer(id))
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
