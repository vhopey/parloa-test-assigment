import { useEffect } from "react"
import { Table } from "antd"
import Editor from "../Editor"
import DeleteCustomer from "../DeleteCustomer"
import ViewInformation from "../ViewInformation"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { fetchCustomersList, selectCustomers } from "../../store/slice"

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

  useEffect(() => {
    dispatch(fetchCustomersList())
  }, [dispatch])

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      {/* {data.map((item) => (
        <>
          <div> {item.id} </div>
          <Editor />
        </>
      ))} */}
    </div>
  )
}

export default Customers
