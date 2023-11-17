import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space } from "antd"
import { Project } from "../../types"

export default function ProjectsForm({ projects }: { projects: Project[] }) {
  return (
    <Form.List name="projects">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key}>
              <Form.Item name={[name, "name"]} {...restField}>
                <Input placeholder="Name of project" />
              </Form.Item>
              <Form.Item name={[name, "contact"]} {...restField}>
                <Input placeholder="Contact email" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add project
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}
