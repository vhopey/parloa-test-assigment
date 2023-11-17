import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCustomers } from "../api"
import { Customer, RenderCustomer } from "../types"
import { RootState } from "./store"
import { getDataWithKeys } from "./helpers"

export interface CustomersState {
  data: Customer[]
  renderData: RenderCustomer[]
  isLoading: boolean
  isError: boolean
}

const initialState: CustomersState = {
  data: [],
  renderData: [],
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
  reducers: {
    // create
    // edit
    // del
    // filter by industry
    // reset filter
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCustomersList.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.renderData = getDataWithKeys(state.data)
      })
      .addCase(fetchCustomersList.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const selectCustomers = (state: RootState) => state.customers.renderData
export const selectIsLoading = (state: RootState) => state.customers.isLoading
export const selectIsError = (state: RootState) => state.customers.isError

export default customersSlice.reducer
