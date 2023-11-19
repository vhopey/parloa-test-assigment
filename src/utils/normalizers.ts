import { v4 as uuidv4 } from "uuid"
import dayjs from "dayjs"
import { Customer, TableCustomer, Project, ProjectsWithDayJS } from "../types"

export const getDataWithKeys: (data: Customer[]) => TableCustomer[] = (
  data,
) => {
  const dataWithKeys: TableCustomer[] = []
  data.forEach((item, index) => {
    dataWithKeys[index] = { ...item, key: item.id }
  })

  return dataWithKeys
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
