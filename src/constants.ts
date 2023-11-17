import {
  Customer,
  IndustriesValuesEnum,
  IndustriesLabelsEnum,
  ActiveOfCustomersValuesEnum,
  ActiveOfCustomersLabelsEnum,
} from "./types"

export const emptyCustomer: Customer = {
  id: "",
  isActive: false,
  company: "",
  industry: "",
  projects: [],
  about: "",
}

export const selectIndustries = [
  {
    label: IndustriesLabelsEnum.Finance,
    key: IndustriesValuesEnum.Finance,
  },
  {
    label: IndustriesLabelsEnum.Marketing,
    key: IndustriesValuesEnum.Marketing,
  },
  {
    label: IndustriesLabelsEnum.Insurance,
    key: IndustriesValuesEnum.Insurance,
  },
  {
    label: IndustriesLabelsEnum.Travel,
    key: IndustriesValuesEnum.Travel,
  },
  {
    label: IndustriesLabelsEnum.Tech,
    key: IndustriesValuesEnum.Tech,
  },
]

export const selectActiveOfCustomers = [
  {
    label: ActiveOfCustomersLabelsEnum.Active,
    key: ActiveOfCustomersValuesEnum.Active,
  },
  {
    label: ActiveOfCustomersLabelsEnum.Inactive,
    key: ActiveOfCustomersValuesEnum.Inactive,
  },
  {
    label: ActiveOfCustomersLabelsEnum.All,
    key: ActiveOfCustomersValuesEnum.All,
  },
]
