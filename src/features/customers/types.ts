export interface ICustomer {
  id: string
  isActive: boolean
  company: string
  industry: string
  projects: IProject[]
  about: string
}

export interface IProject {
  id: string
  name: string
  contact: string
  start_date: string
  end_date: string
}
