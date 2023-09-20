import React from "react";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import CoctailList from "./CoctailList";

describe("chuj", () => {

  test("fetches & receives a user after clicking the fetch user button", async () => {
    renderWithProviders(<CoctailList />);

    // no drinkList initialy
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i))

     const textElement = await screen.findByText(/list of coctails/i);
     expect(textElement).toBeInTheDocument();
  });
});
