import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchCustomersList, selectCustomers } from "./customersSlice"

function Customers() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectCustomers)

  useEffect(() => {
    dispatch(fetchCustomersList())
  }, [dispatch])

  return (
    <div>
      {data.map((item) => (
        <div> {item.id} </div>
      ))}
    </div>
  )
}

export default Customers
