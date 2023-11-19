import { vi } from "vitest"
import { render, screen, renderHook } from "@testing-library/react"
import { Form } from "antd"
import { customer } from "../../mocks/customer"
import CustomerForm from "./index"

const { result } = renderHook(() => Form.useForm())
const formMock = {
  ...result.current[0],
  scrollToField: vi.fn(),
  getFieldInstance: vi.fn(),
}

const getLabel = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

describe("CustomerForm", () => {
  it("Render main fields", () => {
    render(<CustomerForm customer={customer} errorMessage="" form={formMock} />)

    expect(screen.getByTestId("customers-form")).toBeInTheDocument()
    expect(screen.getByTestId("active-field")).toBeChecked()
    expect(screen.getByTestId("company-field")).toHaveValue(customer.company)
    expect(screen.getByTestId("industry-field")).toHaveTextContent(
      getLabel(customer.industry),
    )
    expect(screen.getByTestId("about-field")).toHaveValue(customer.about)
  })

  it("Render projects fields (snaphot with all fields)", () => {
    const { container } = render(
      <CustomerForm customer={customer} errorMessage="" form={formMock} />,
    )
    expect(container).toMatchSnapshot()
  })

  it("Render error message", () => {
    const error = "Fill in required fields"
    render(
      <CustomerForm customer={customer} errorMessage={error} form={formMock} />,
    )

    expect(screen.getByText(error)).toBeInTheDocument()
  })
})
