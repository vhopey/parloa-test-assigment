import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { store } from "../../store/store"
import { customer } from "../../mocks/customer"
import DeleteCustomer from "."

describe("DeleteCustomer", () => {
  it("Render delete icon button", () => {
    render(
      <Provider store={store}>
        <DeleteCustomer id={customer.id} />
      </Provider>,
    )

    expect(screen.getByTestId("delete-icon-button")).toBeInTheDocument()
  })

  it("Show confirm delete modal by click", async () => {
    render(
      <Provider store={store}>
        <DeleteCustomer id={customer.id} />
      </Provider>,
    )
    userEvent.click(screen.getByTestId("delete-icon-button"))
    expect(
      await screen.findByText("Are you sure delete this customer?"),
    ).toBeInTheDocument()
  })
})
