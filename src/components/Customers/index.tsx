import { useEffect } from "react"
import { Table, Skeleton, Result, Button } from "antd"
import Editor from "../Editor"
import DeleteCustomer from "../DeleteCustomer"
import ViewInformation from "../ViewInformation"
import { useAppDispatch, useAppSelector } from "../../store/store"
import {
  fetchCustomersList,
  selectCustomers,
  selectIsError,
  selectIsLoading,
} from "../../store/slice"

import styles from "./Customers.module.css"

const columns = [
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
    render: () => (
      <div className={styles.actionButtons}>
        <ViewInformation />
        <Editor />
        <DeleteCustomer />
      </div>
    ),
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
      {data.length > 0 && <Table columns={columns} dataSource={data} />}
    </>
  )
}

export default Customers
