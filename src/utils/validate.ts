import { Customer, Project } from "../types"

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
