import { vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { store } from "../../store/store"
import { customer } from "../../mocks/customer"
import Editor from "."

vi.mock("../CustomerForm", () => {
  const CustomerForm = vi.fn()

  return { default: CustomerForm }
})

describe("Editor", () => {
  it("Render edit icon button", () => {
    render(
      <Provider store={store}>
        <Editor customer={customer} />
      </Provider>,
    )

    expect(screen.getByTestId("edit-icon-button")).toBeInTheDocument()
  })

  it("Show editor modal by click", async () => {
    render(
      <Provider store={store}>
        <Editor customer={customer} />
      </Provider>,
    )
    userEvent.click(screen.getByTestId("edit-icon-button"))
    expect(await screen.findByText("Edit a customer")).toBeInTheDocument()
  })
})
