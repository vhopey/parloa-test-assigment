import { FormEvent } from "react"
import { Button, Checkbox, Form, Input, Select } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import { Customer } from "../../types"
import { selectIndustries } from "../../constants"

interface CustomerFormProps {
  customer: Customer
  onChangeCustomer: (data: Customer) => void
}

export default function CustomerForm({
  customer,
  onChangeCustomer,
}: CustomerFormProps) {
  const handleChange = (data: FormEvent) => {
    onChangeCustomer({
      ...customer,
      ...data,
    })
  }

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 25 }}
      layout="vertical"
      onValuesChange={handleChange}
    >
      <Form.Item
        valuePropName="checked"
        initialValue={customer.isActive ? "checked" : undefined}
        name="isActive"
      >
        <Checkbox>Active customer</Checkbox>
      </Form.Item>
      <Form.Item initialValue={customer.company} label="Company" name="company">
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={customer.industry}
        name="industry"
        label="Industry"
      >
        <Select>
          {selectIndustries.map(({ label, value }) => (
            <Select.Option value={value}>{label}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item initialValue={customer.about} label="About" name="about">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Projects">
        <Button type="default">
          <PlusCircleOutlined />
        </Button>
      </Form.Item>
    </Form>
  )
}
