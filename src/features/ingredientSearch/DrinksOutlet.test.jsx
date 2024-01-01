import DrinksOutlet from "./DrinksOutlet";
import { renderWithProviders } from "../../utils/test-utils";
import { screen } from "@testing-library/react";

describe("Tests for DrinksOutlet", () => {
  test("Should return 'Drinks by ingredients' heading", () => {
    renderWithProviders(<DrinksOutlet />);

    const drinkHeading = screen.getByRole("heading", {
      name: /Drinks by ingredients/i,
    });

    expect(drinkHeading).toBeInTheDocument();
  });
});
