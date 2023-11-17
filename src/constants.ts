import { Customer, IndustriesValuesEnum, IndustriesLabelsEnum } from "./types"

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
    value: IndustriesValuesEnum.Finance,
    key: IndustriesValuesEnum.Finance,
  },
  {
    label: IndustriesLabelsEnum.Marketing,
    value: IndustriesValuesEnum.Marketing,
    key: IndustriesValuesEnum.Marketing,
  },
  {
    label: IndustriesLabelsEnum.Insurance,
    value: IndustriesValuesEnum.Insurance,
    key: IndustriesValuesEnum.Insurance,
  },
  {
    label: IndustriesLabelsEnum.Travel,
    value: IndustriesValuesEnum.Travel,
    key: IndustriesValuesEnum.Travel,
  },
  {
    label: IndustriesLabelsEnum.Tech,
    value: IndustriesValuesEnum.Tech,
    key: IndustriesValuesEnum.Tech,
  },
]
