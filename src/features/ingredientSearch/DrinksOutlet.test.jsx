import DrinksOutlet from "./DrinksOutlet";
import { renderWithProviders } from "../../utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Tests for DrinksOutlet", () => {
  test("Should return 'Drinks by ingredients' heading", () => {
    require("react-router-dom").useParams.mockReturnValue("");

    renderWithProviders(<DrinksOutlet />);

    const drinkHeading = screen.getByRole("heading", {
      name: /Drinks by ingredients/i,
    });

    expect(drinkHeading).toBeInTheDocument();
  });
});
