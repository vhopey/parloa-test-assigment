import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { fetchCustomers } from "../api"
import { Customer, Filters } from "../types"
import { RootState } from "./store"

export interface CustomersState {
  data: Customer[]
  filters: Filters[]
  filteringData: Customer[]
  isLoading: boolean
  isError: boolean
}

const initialState: CustomersState = {
  data: [],
  filters: [],
  filteringData: [],
  isLoading: true,
  isError: false,
}

export const fetchCustomersList = createAsyncThunk(
  "customers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCustomers()
      return response
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    createCustomer(state, action) {
      state.data = [{ ...action.payload, id: uuidv4() }, ...state.data]
    },
    editCustomer(state, action) {
      const index = state.data.findIndex((item) => {
        return item.id === action.payload.id
      })
      state.data.splice(index, 1, action.payload)
    },
    deleteCustomer(state, action) {
      const index = state.data.findIndex((item) => {
        return item.id === action.payload
      })
      state.data.splice(index, 1)
    },
    filteringData(state, { payload }) {
      const filterIndex = state.filters.findIndex((item) => {
        return item.type === payload.type && item.value === payload.value
      })
      if (filterIndex) {
        state.filters.splice(filterIndex, 1, payload)
      }

      state.filteringData = []
    },
    resetFilter(state) {
      state.filters = []
      state.filteringData = []
    },
  },
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
export const selectFilters = (state: RootState) => state.customers.filters
export const selectFilteringCustomers = (state: RootState) =>
  state.customers.filteringData

export const {
  createCustomer,
  editCustomer,
  deleteCustomer,
  filteringData,
  resetFilter,
} = customersSlice.actions
export default customersSlice.reducer
