const CUSTOMERS_URL =
  "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json"

export async function fetchCustomers() {
  const response = await fetch(CUSTOMERS_URL)
  return await response.json()
}
