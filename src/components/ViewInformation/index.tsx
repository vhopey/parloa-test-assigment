import { Button, Modal } from "antd"
import { EyeOutlined } from "@ant-design/icons"

export default function ViewInformation() {
  const showInfo = () => {
    Modal.info({
      title: "Information about customer",
      content: (
        <div>
          <p>Information about customer</p>
        </div>
      ),
      onOk() {},
    })
  }

  return (
    <>
      <Button
        type="default"
        shape="circle"
        onClick={showInfo}
        icon={<EyeOutlined />}
      />
    </>
  )
}
