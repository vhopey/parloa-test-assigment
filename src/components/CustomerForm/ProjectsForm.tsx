import { Fragment } from "react"
import { Button, Form, Input, DatePicker } from "antd"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { ProjectsWithDayJS } from "../../types"

import styles from "./CustomerForm.module.css"

export default function ProjectsForm({
  projects,
}: {
  projects: ProjectsWithDayJS[]
}) {
  return (
    <Form.List name="projects" initialValue={projects}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Fragment key={key}>
              <Form.Item
                label="Name"
                name={[name, "name"]}
                required={true}
                {...restField}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Contact"
                name={[name, "contact"]}
                required={true}
                {...restField}
              >
                <Input placeholder="qwerty@gmail.com" />
              </Form.Item>
              <div className={styles.dateWrapper}>
                <Form.Item
                  name={[name, "start_date"]}
                  required={true}
                  {...restField}
                >
                  <DatePicker placeholder="Start date (required)" />
                </Form.Item>
                <Form.Item name={[name, "end_date"]} {...restField}>
                  <DatePicker placeholder="End date" />
                </Form.Item>
                <MinusCircleOutlined
                  className={styles.minusIcon}
                  onClick={() => remove(name)}
                />
              </div>
            </Fragment>
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
