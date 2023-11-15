import { Button, Dropdown } from "antd"
import type { MenuProps } from "antd"
import { IndustriesEnum } from "../../types"

const items: MenuProps["items"] = [
  {
    key: 1,
    label: IndustriesEnum.Finance,
  },
  {
    key: 2,
    label: IndustriesEnum.Insurance,
  },
  {
    key: 3,
    label: IndustriesEnum.Marketing,
  },
  {
    key: 4,
    label: IndustriesEnum.Tech,
  },
  {
    key: 5,
    label: IndustriesEnum.Travel,
  },
]

export default function Filters() {
  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Button>Industry</Button>
    </Dropdown>
  )
}
