import { customerList } from "../../mocks/customer"
import { filterData } from "../filter"
import { ActiveOfCustomersValuesEnum, IndustriesValuesEnum } from "../../types"

describe("Filter", () => {
  it("filter by activity", () => {
    expect(
      filterData(customerList, {
        isActive: ActiveOfCustomersValuesEnum.Active,
        industry: IndustriesValuesEnum.All,
      }),
    ).toEqual([customerList[0]])
  })

  it("filter by industry", () => {
    expect(
      filterData(customerList, {
        isActive: ActiveOfCustomersValuesEnum.All,
        industry: IndustriesValuesEnum.Tech,
      }),
    ).toEqual([customerList[1]])
  })

  it("filter by default", () => {
    expect(
      filterData(customerList, {
        isActive: ActiveOfCustomersValuesEnum.All,
        industry: IndustriesValuesEnum.All,
      }),
    ).toEqual(customerList)
  })
})
