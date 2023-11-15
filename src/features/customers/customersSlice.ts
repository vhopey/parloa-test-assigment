import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCustomers } from "../../api"
import { ICustomer } from "./types"
import { RootState } from "../../app/store"

export interface CustomersState {
  data: ICustomer[]
  isLoading: boolean
  isError: boolean
}

const initialState: CustomersState = {
  data: [],
  isLoading: false,
  isError: false,
}

export const fetchCustomersList = createAsyncThunk(
  "customers/fetchCustomers",
  async () => {
    const response = await fetchCustomers()
    return response
  },
)

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCustomersList.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchCustomersList.rejected, (state) => {
        state.isError = true
      })
  },
})

export const selectCustomers = (state: RootState) => state.customers.data

export default customersSlice.reducer
