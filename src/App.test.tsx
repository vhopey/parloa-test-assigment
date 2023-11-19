import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"

describe("App", () => {
  it("Correct render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )

    expect(screen.getByTestId("app-layout")).toBeInTheDocument()
  })
})
