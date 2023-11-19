import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store/store"

import Customers from "."
import { customerList } from "../../mocks/customer"

const unmockedFetch = global.fetch

describe("Customers", () => {
  beforeAll(() => {
    global.fetch = () =>
      // @ts-ignore
      Promise.resolve({
        json: () => Promise.resolve(customerList),
      })
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })

  it("Render loader by default", () => {
    const { container } = render(
      <Provider store={store}>
        <Customers />
      </Provider>,
    )
    // FIXME
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const skeleton = container.querySelector(".ant-skeleton")

    expect(skeleton).toBeInTheDocument()
  })

  it("Render table", async () => {
    render(
      <Provider store={store}>
        <Customers />
      </Provider>,
    )

    expect(await screen.findByTestId("customers-list")).toBeInTheDocument()
  })

  it("Render error", async () => {
    global.fetch = () =>
      // @ts-ignore
      Promise.resolve({
        json: () => Promise.reject(customerList),
      })

    render(
      <Provider store={store}>
        <Customers />
      </Provider>,
    )

    expect(
      await screen.findByText("Sorry, something went wrong."),
    ).toBeInTheDocument()
  })
})
