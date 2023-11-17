import { Button, Dropdown } from "antd"
import type { MenuProps } from "antd"
import { useAppDispatch } from "../../store/store"
import { resetFilter, filteringData } from "../../store/slice"
import { selectIndustries, selectActiveOfCustomers } from "../../constants"

import styles from "./Filters.module.css"

const industryItems: MenuProps["items"] = selectIndustries
const activeItems: MenuProps["items"] = selectActiveOfCustomers

export default function Filters() {
  const dispatch = useAppDispatch()

  const handleClickIndustry = (event: any) => {
    dispatch(filteringData({ type: "industry", value: event.key }))
  }

  const handleClickReset = () => {
    dispatch(resetFilter())
  }

  const handleClickActive = (event: any) => {
    dispatch(filteringData({ type: "active", value: event.key }))
  }

  const industryMenuProps = {
    items: industryItems,
    onClick: handleClickIndustry,
  }

  const activeMenuProps = {
    items: activeItems,
    onClick: handleClickActive,
  }

  return (
    <div className={styles.wrapper}>
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
