import { render, screen } from "@testing-library/react"
import ProjectInformation from "./index"
import { customer } from "../../mocks/customer"

describe("Projects information", () => {
  it("Render information", () => {
    render(<ProjectInformation projects={customer.projects} />)

    expect(screen.getByTestId("projects-iformation-block")).toBeInTheDocument()
  })

  it("Render no data, if projects are empty", () => {
    render(<ProjectInformation projects={[]} />)

    expect(screen.getByText("No data")).toBeInTheDocument()
  })
})
