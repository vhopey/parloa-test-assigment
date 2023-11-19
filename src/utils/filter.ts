import {
  Customer,
  Filters,
  IndustriesValuesEnum,
  ActiveOfCustomersValuesEnum,
} from "../types"

export const filterData = (data: Customer[], filters: Filters) => {
  let updatedData = [...data]

  if (filters.isActive !== ActiveOfCustomersValuesEnum.All) {
    const filterIsActive =
      filters.isActive === ActiveOfCustomersValuesEnum.Active ? true : false

    updatedData = updatedData.filter((item) => {
      return item.isActive === filterIsActive
    })
  }

  if (filters.industry !== IndustriesValuesEnum.All) {
    updatedData = updatedData.filter((item) => {
      return item.industry === filters.industry
    })
  }

  return updatedData
}
