import { Button, Dropdown } from "antd"
import type { MenuProps } from "antd"
import { selectIndustries } from "../../constants"

import styles from "./Filters.module.css"

const items: MenuProps["items"] = selectIndustries

export default function Filters() {
  const handleClickFilter = () => {
    // filter action
  }

  const handleClickReset = () => {
    // reset filter action
  }

  return (
    <div className={styles.wrapper}>
      <Dropdown menu={{ items }} placement="bottom">
        <Button onClick={handleClickFilter}>Industries</Button>
      </Dropdown>
      <Button onClick={handleClickReset}>Reset filter</Button>
    </div>
  )
}
