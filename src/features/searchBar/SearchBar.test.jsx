import { screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "react-intersection-observer/test-utils";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";
import { searchDrinks } from "./searchBarSlice";

describe("tests for searchBar component", () => {
  test("should renturn app name and svg logo", async () => {
    const store = setupStore();
    // dispatching new category to redux thunk
    store.dispatch(searchDrinks("GG"));
    renderWithProviders(<SearchBar />, { store });

    const appName = screen.getByRole("heading", {
      level: 2,
      name: /FindMyDrink./i,
    });
    expect(appName).toBeInTheDocument();

    const drinkLogo = screen.getByTitle(/logo/i);
    expect(drinkLogo).toBeInTheDocument();
  });
});
