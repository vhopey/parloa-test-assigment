import { Checkbox, Form, Input, Select, FormInstance } from "antd"
import ProjectsForm from "./ProjectsForm"
import { selectIndustries } from "../../constants"
import { formatDateInProjectsToDatePicker } from "../../helpers"
import { Customer } from "../../types"

import styles from "./CustomerForm.module.css"

interface CustomerFormProps {
  customer: Customer
  form: FormInstance<any>
  errorMessage: string
}

export default function CustomerForm({
  customer,
  form,
  errorMessage,
}: CustomerFormProps) {
  const formattedProjects = formatDateInProjectsToDatePicker(customer.projects)

  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        valuePropName="checked"
        initialValue={customer.isActive ? true : false}
        name="isActive"
      >
        <Checkbox>Active customer</Checkbox>
      </Form.Item>
      <Form.Item
        initialValue={customer.company}
        label="Company"
        name="company"
        rules={[{ required: true, message: "Missing company" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={customer.industry}
        name="industry"
        label="Industry"
        rules={[{ required: true, message: "Missing industry" }]}
      >
        <Select>
          {selectIndustries.map(({ label, key }) => (
            <Select.Option key={key} value={key}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item initialValue={customer.about} label="About" name="about">
        <Input.TextArea />
      </Form.Item>
      <ProjectsForm projects={formattedProjects} />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </Form>
  )
}
