import { vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { store } from "../../store/store"
import Creator from "."

vi.mock("../CustomerForm", () => {
  const CustomerForm = vi.fn()

  return { default: CustomerForm }
})

describe("Creator", () => {
  it("Render create button", () => {
    render(
      <Provider store={store}>
        <Creator />
      </Provider>,
    )

    expect(screen.getByTestId("create-button")).toBeInTheDocument()
  })

  it("Show creator modal by click", async () => {
    render(
      <Provider store={store}>
        <Creator />
      </Provider>,
    )
    userEvent.click(screen.getByTestId("create-button"))
    expect(await screen.findByTestId("create-modal")).toBeInTheDocument()
  })
})
