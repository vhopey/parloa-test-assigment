import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store/store"
import Filters from "./index"

describe("Filters", () => {
  it("Render Filters", () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    )

    expect(screen.getByTestId("filters-container")).toBeInTheDocument()
    expect(screen.getByText("Active of customers")).toBeInTheDocument()
    expect(screen.getByText("Industries")).toBeInTheDocument()
    expect(screen.getByText("Reset filter")).toBeInTheDocument()
  })
})
