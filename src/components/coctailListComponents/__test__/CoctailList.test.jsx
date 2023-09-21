import React from "react";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
import CoctailList from "../CoctailList";
import { setupCoctailListHandlers } from "../msw/coctailListHandler";
import { setupStore } from "../../../app/store";
import { getDrinks } from "../../../features/categoryList/categoryListSlice";


describe("Test for displaying proper list of coctails", () => {
  beforeEach(() => setupCoctailListHandlers());
  test("fetches & receives a user after clicking the fetch user button", async () => {
    const store = setupStore()
    store.dispatch(getDrinks('Gin'))
    renderWithProviders(<CoctailList />, {store});

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    const textElement = await screen.findByText(/list of coctails/i);
    expect(textElement).toBeInTheDocument();
    
    screen.debug()
  });
});
