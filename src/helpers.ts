import { Customer, TableCustomer } from "./types"

export const getDataWithKeys: (data: Customer[]) => TableCustomer[] = (
  data,
) => {
  const dataWithKeys: TableCustomer[] = []
  data.forEach((item, index) => {
    dataWithKeys[index] = { ...item, key: item.id }
  })

  return dataWithKeys
}
