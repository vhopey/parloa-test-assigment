import { checkErrors } from "../validate"
import { customer } from "../../mocks/customer"

describe("Validate", () => {
  it("All fields are correct", () => {
    expect(checkErrors(customer)).toBeFalsy()
  })

  it("Without company", () => {
    expect(
      checkErrors({
        ...customer,
        company: "",
      }),
    ).toBeTruthy()
  })

  it("Without industry", () => {
    expect(
      checkErrors({
        ...customer,
        industry: "",
      }),
    ).toBeTruthy()
  })

  it("Without name in project", () => {
    expect(
      checkErrors({
        ...customer,
        projects: [
          {
            ...customer.projects[0],
            name: "",
          },
        ],
      }),
    ).toBeTruthy()
  })

  it("Without start date in project", () => {
    expect(
      checkErrors({
        ...customer,
        projects: [
          {
            ...customer.projects[0],
            start_date: "",
          },
        ],
      }),
    ).toBeTruthy()
  })
})
