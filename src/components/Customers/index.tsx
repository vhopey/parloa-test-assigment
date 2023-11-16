import { useEffect } from "react"
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
} from "../../store/slice"
import { Customer } from "../../types"

import styles from "./Customers.module.css"

interface DataSource extends Customer {
  key: string
}

const getDataForTable: (data: Customer[]) => DataSource[] = (data) => {
  const result: DataSource[] = []

  data.forEach((item, index) => {
    result[index] = { ...item, key: item.id }
  })

  return result
}

const columns: ColumnsType<DataSource> = [
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
          <DeleteCustomer />
        </div>
      )
    },
  },
]

function Customers() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectCustomers)
  const isLoading = useAppSelector(selectIsLoading)
  const isError = useAppSelector(selectIsError)

  useEffect(() => {
    dispatch(fetchCustomersList())
  }, [dispatch])

  const onTryAgainClick = () => {
    window.location.reload()
  }

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
          dataSource={getDataForTable(data)}
        />
      )}
    </>
  )
}

export default Customers
