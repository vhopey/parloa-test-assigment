import { useEffect, useMemo } from "react"
import { Table, Skeleton, Result, Button } from "antd"
import type { ColumnsType } from "antd/es/table"
import Editor from "../Editor"
import DeleteCustomer from "../DeleteCustomer"
import ProjectIformation from "../ProjectIformation"
import { useAppDispatch, useAppSelector } from "../../store/store"
import {
  fetchCustomersList,
  selectCustomers,
  selectIsError,
  selectIsLoading,
  selectFilteringCustomers,
} from "../../store/slice"
import { TableCustomer } from "../../types"
import { getDataWithKeys } from "../../helpers"

import styles from "./Customers.module.css"

const columns: ColumnsType<TableCustomer> = [
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Industry",
    dataIndex: "industry",
    key: "industry",
  },
  {
    title: "About",
    dataIndex: "about",
    key: "about",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, item) => {
      return (
        <div className={styles.actionButtons}>
          <Editor customer={item} />
          {!item.isActive && <DeleteCustomer id={item.id} />}
        </div>
      )
    },
  },
]

function Customers() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectCustomers)
  const filteringData = useAppSelector(selectFilteringCustomers)
  const isLoading = useAppSelector(selectIsLoading)
  const isError = useAppSelector(selectIsError)

  useEffect(() => {
    dispatch(fetchCustomersList())
  }, [dispatch])

  const onTryAgainClick = () => {
    window.location.reload()
  }

  const dataForTable = useMemo(
    () =>
      filteringData.length > 0
        ? getDataWithKeys(filteringData)
        : getDataWithKeys(data),
    [filteringData, data],
  )

  return (
    <>
      <Skeleton loading={isLoading} active />
      {isError && (
        <Result
          status="error"
          title="Error"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={onTryAgainClick}>
              Try again
            </Button>
          }
        />
      )}
      {data.length > 0 && (
        <Table
          expandable={{
            expandedRowRender: ({ projects }) => (
              <ProjectIformation projects={projects} />
            ),
          }}
          columns={columns}
          dataSource={dataForTable}
        />
      )}
    </>
  )
}

export default Customers
