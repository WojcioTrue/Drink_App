import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavListFullScreen from "./FavListFullScreen";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("tests for favourite list container full screen", () => {
  test("Basic header content test with empty list", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <FavListFullScreen />
        </Provider>
      </MemoryRouter>
    );

    const bottleImg = screen.getByRole("img");
    const header = screen.getByText("Your list is empty!");
    const addText = screen.getByText("Add something to your favourite list.");
    const responsinilityText = screen.getByText("Drink responsibly!");

    expect(bottleImg.getAttribute("src")).toBe("./img/fav_icon.png");
    expect(header).toBeInTheDocument();
    expect(addText).toBeInTheDocument();
    expect(responsinilityText).toBeInTheDocument();
  });
  test("async call to redux to get list of favourite Drinks", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <FavListFullScreen />
        </Provider>
      </MemoryRouter>
    );
  });
});
