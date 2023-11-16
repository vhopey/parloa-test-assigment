import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCustomers } from "../api"
import { Customer } from "../types"
import { RootState } from "./store"

export interface CustomersState {
  data: Customer[]
  isLoading: boolean
  isError: boolean
}

const initialState: CustomersState = {
  data: [],
  isLoading: true,
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
        state.isLoading = false
      })
  },
})

export const selectCustomers = (state: RootState) => state.customers.data
export const selectIsLoading = (state: RootState) => state.customers.isLoading
export const selectIsError = (state: RootState) => state.customers.isError

export default customersSlice.reducer
