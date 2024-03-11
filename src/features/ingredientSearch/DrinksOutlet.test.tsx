import { screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import DrinksOutlet from "./DrinksOutlet";
import { renderWithProviders } from "../../utils/test-utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Tests for DrinksOutlet", () => {
  test("Should return 'something went wront' header", async () => {
    require("react-router-dom").useLocation.mockReturnValue({
      pathname: "/ingredients/",
    });
    renderWithProviders(<DrinksOutlet />);

    const errorHeader = await screen.findByText(/something went wrong!/i);
    expect(errorHeader).toBeInTheDocument();
  });
  test("Should return first paragraph of error message", async () => {
    require("react-router-dom").useLocation.mockReturnValue({
      pathname: "/ingredients/",
    });
    renderWithProviders(<DrinksOutlet />);

    const firstErrorMessage = await screen.findByText(
      /i don't see the page you looking for, or some error occured.../i
    );
    expect(firstErrorMessage).toBeInTheDocument()
  })
  test("Should return second paragraph of error message", async () => {
    require("react-router-dom").useLocation.mockReturnValue({
      pathname: "/ingredients/",
    });
    renderWithProviders(<DrinksOutlet />);
    const secondErrorMessage = await screen.findByText(/return to home page./i);
    expect(secondErrorMessage).toBeInTheDocument()
  })

  test("Should return 'return home' button", async () => {
    require("react-router-dom").useLocation.mockReturnValue({
      pathname: "/ingredients/",
    });
    renderWithProviders(<DrinksOutlet />);
    const returnButton = await screen.findByRole('button', { name: /return home/i })
    expect(returnButton).toBeInTheDocument()
  })
});


