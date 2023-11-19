import { customer } from "../../mocks/customer"
import dayjs from "dayjs"
import {
  getDataWithKeys,
  normalizeProjectsData,
  formatDateInProjectsToDatePicker,
} from "../normalizers"

const firstProject = customer.projects[0]

describe("Normalizers", () => {
  it("getDataWithKeys", () => {
    expect(getDataWithKeys([customer])).toEqual([
      {
        ...customer,
        key: customer.id,
      },
    ])
  })

  it("normalizeProjectsData", () => {
    expect(normalizeProjectsData([firstProject])).toEqual([
      {
        ...firstProject,
        start_date: dayjs(firstProject.start_date).toISOString(),
        end_date: dayjs(firstProject.end_date).toISOString(),
      },
    ])
  })

  it("formatDateInProjectsToDatePicker", () => {
    expect(formatDateInProjectsToDatePicker([firstProject])).toEqual([
      {
        ...firstProject,
        start_date: dayjs(firstProject.start_date),
        end_date: dayjs(firstProject.end_date),
      },
    ])
  })
})
