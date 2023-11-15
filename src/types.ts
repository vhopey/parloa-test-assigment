export interface Customer {
  id: string
  isActive: boolean
  company: string
  industry: string
  projects: Project[]
  about: string
}

export interface Project {
  id: string
  name: string
  contact: string
  start_date: string
  end_date: string
}

export enum IndustriesEnum {
  Insurance = "insurance",
  Travel = "travel",
  Tech = "tech",
  Marketing = "marketing",
  Finance = "finance",
}
