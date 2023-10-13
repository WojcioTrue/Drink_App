import {screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavListFullScreen from "./FavListFullScreen";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";

describe("tests for favourite list container full screen", () => {
  test("Basic header content test with empty list", () => {
    renderWithProviders(<FavListFullScreen />);

    const bottleImg = screen.getByRole("img");
    const header = screen.getByText(/Your list is empty!/i);
    const addText = screen.getByText(/Add something to your favourite list./i);
    const responsinilityText = screen.getByText(/Drink responsibly!/i);

    expect(bottleImg.getAttribute("src")).toBe("./img/fav_icon.png");
    expect(header).toBeInTheDocument();
    expect(addText).toBeInTheDocument();
    expect(responsinilityText).toBeInTheDocument();
  });
  test("snapshot test with empty list", () => {
    const store = setupStore();
    // dispatching new category to redux thunk
    // store.dispatch();

    renderWithProviders(<FavListFullScreen />, {store});
    screen.debug()
  });
});
