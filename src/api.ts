const BASE_URL = "https://parloafrontendchallenge.z6.web.core.windows.net"
const CUSTOMERS_URL = "customers.json"

export async function fetchCustomers() {
  const response = await fetch(`${BASE_URL}/${CUSTOMERS_URL}`)
  return await response.json()
}
