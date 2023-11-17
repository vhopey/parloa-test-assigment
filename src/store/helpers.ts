import { Customer, RenderCustomer } from "../types"

export const getDataWithKeys: (data: Customer[]) => RenderCustomer[] = (
  data,
) => {
  const dataWithKeys: RenderCustomer[] = []
  data.forEach((item, index) => {
    dataWithKeys[index] = { ...item, key: item.id }
  })

  return dataWithKeys
}
