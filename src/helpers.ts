import { v4 as uuidv4 } from "uuid"
import dayjs from "dayjs"
import {
  Customer,
  Filters,
  TableCustomer,
  IndustriesValuesEnum,
  ActiveOfCustomersValuesEnum,
  Project,
  ProjectsWithDayJS,
} from "./types"

export const getDataWithKeys: (data: Customer[]) => TableCustomer[] = (
  data,
) => {
  const dataWithKeys: TableCustomer[] = []
  data.forEach((item, index) => {
    dataWithKeys[index] = { ...item, key: item.id }
  })

  return dataWithKeys
}

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

export const normalizeProjectsData = (projects: Project[]) => {
  if (projects.length < 0) {
    return projects
  }

  return projects.map((item) => {
    return {
      ...item,
      id: item?.id || uuidv4(),
      start_date: dayjs(item?.start_date).toISOString(),
      end_date: item?.end_date ? dayjs(item?.end_date).toISOString() : null,
    }
  })
}

const checkProjectsErrors = (projects: Project[]) => {
  let isError = false
  projects.forEach((item) => {
    if (!item || !item.name || !item.contact || !item.start_date) {
      isError = true
    }
  })

  return isError
}

export const checkErrors = (data: Customer) => {
  if (!data.company || !data.industry || checkProjectsErrors(data.projects)) {
    return true
  }

  return false
}

export const formatDateInProjectsToDatePicker: (
  projects: Project[],
) => ProjectsWithDayJS[] = (projects) => {
  return projects.map((item) => {
    return {
      ...item,
      start_date: dayjs(item.start_date),
      end_date: item.end_date ? dayjs(item.end_date) : null,
    }
  })
}
