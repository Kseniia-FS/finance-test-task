import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
const options = ["AAPL", "GOOGL", "MSFT", "AMZN", "FB", "TSLA"];

describe("App", () => {
  it("renders App component", async () => {
    const { debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    debug();
    screen.getByText(/Can be interesting for you/i);
    screen.getByRole("table");
    await screen.findAllByTestId(/custom-element/);
    debug();
  });
  it("checked inputs", () => {
    const { debug } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    debug();
    const label = screen.getAllByTestId(/custom-label/);
    label.map((el) =>
      fireEvent.click(el, {
        target: { "data-testid": options[1] },
      })
    );
    debug();
  });
});
