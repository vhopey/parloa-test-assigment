export interface Customer {
  id: string
  isActive: boolean
  company: string
  industry: string
  projects: Project[]
  about: string
}

export interface TableCustomer extends Customer {
  key: string
}

export interface Project {
  id: string
  name: string
  contact: string | null
  start_date: string
  end_date: string | null
}

export enum IndustriesValuesEnum {
  Insurance = "insurance",
  Travel = "travel",
  Tech = "tech",
  Marketing = "marketing",
  Finance = "finance",
  All = "all",
}

export enum IndustriesLabelsEnum {
  Insurance = "Insurance",
  Travel = "Travel",
  Tech = "Tech",
  Marketing = "Marketing",
  Finance = "Finance",
  All = "All",
}

export enum ActiveOfCustomersValuesEnum {
  Active = "active",
  Inactive = "inactive",
  All = "all",
}

export enum ActiveOfCustomersLabelsEnum {
  Active = "Active",
  Inactive = "Inactive",
  All = "All",
}

export type Filters = {
  isActive: ActiveOfCustomersValuesEnum
  industry: IndustriesValuesEnum
}
