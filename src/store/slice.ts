import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { fetchCustomers } from "../api"
import {
  Customer,
  Filters,
  ActiveOfCustomersValuesEnum,
  IndustriesValuesEnum,
} from "../types"
import { RootState } from "./store"
import { filterData } from "../helpers"

export interface CustomersState {
  data: Customer[]
  filters: Filters
  filteringData: Customer[]
  isLoading: boolean
  isError: boolean
}

const filtersInitialState = {
  isActive: ActiveOfCustomersValuesEnum.All,
  industry: IndustriesValuesEnum.All,
}
const initialState: CustomersState = {
  data: [],
  filters: filtersInitialState,
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

      if (state.filteringData.length > 0) {
        state.filteringData = filterData([...state.data], { ...state.filters })
      }
    },
    editCustomer(state, action) {
      const index = state.data.findIndex((item) => {
        return item.id === action.payload.id
      })
      state.data.splice(index, 1, action.payload)

      if (state.filteringData.length > 0) {
        state.filteringData = filterData([...state.data], { ...state.filters })
      }
    },
    deleteCustomer(state, action) {
      const index = state.data.findIndex((item) => {
        return item.id === action.payload
      })
      state.data.splice(index, 1)

      if (state.filteringData.length > 0) {
        state.filteringData = filterData([...state.data], { ...state.filters })
      }
    },
    filteringData(state, { payload }) {
      state.filters = {
        ...state.filters,
        ...payload,
      }

      state.filteringData = filterData([...state.data], { ...state.filters })
    },
    resetFilter(state) {
      state.filters = filtersInitialState
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
