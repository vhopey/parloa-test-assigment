import { Button, Dropdown } from "antd"
import type { MenuProps } from "antd"
import { useAppDispatch } from "../../store/store"
import { resetFilter, filteringData } from "../../store/slice"
import { selectIndustries, selectActiveOfCustomers } from "../../constants"
import { ActiveOfCustomersValuesEnum, IndustriesValuesEnum } from "../../types"

import styles from "./Filters.module.css"

const industryItems: MenuProps["items"] = selectIndustries
const activeItems: MenuProps["items"] = selectActiveOfCustomers

export default function Filters() {
  const dispatch = useAppDispatch()

  const handleClickIndustry = (event: any) => {
    dispatch(filteringData({ industry: event.key }))
  }

  const handleClickReset = () => {
    dispatch(resetFilter())
  }

  const handleClickActive = (event: any) => {
    dispatch(filteringData({ isActive: event.key }))
  }

  const industryMenuProps = {
    items: industryItems,
    selectable: true,
    defaultSelectedKeys: [IndustriesValuesEnum.All],
    onClick: handleClickIndustry,
  }

  const activeMenuProps = {
    items: activeItems,
    selectable: true,
    defaultSelectedKeys: [ActiveOfCustomersValuesEnum.All],
    onClick: handleClickActive,
  }

  return (
    <div className={styles.wrapper} data-testid="filters-container">
      <Dropdown menu={activeMenuProps} placement="bottom">
        <Button>Active of customers</Button>
      </Dropdown>
      <Dropdown menu={industryMenuProps} placement="bottom">
        <Button>Industries</Button>
      </Dropdown>
      <Button onClick={handleClickReset}>Reset filter</Button>
    </div>
  )
}
