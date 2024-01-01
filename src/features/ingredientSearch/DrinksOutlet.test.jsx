import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import DrinksOutlet from "./DrinksOutlet";
import { renderWithProviders } from "../../utils/test-utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Tests for DrinksOutlet", () => {
  test("Should return 'Something went wrong!' page", () => {
    require("react-router-dom").useLocation.mockReturnValue({
      pathname: "/ingredients/",
    });
    renderWithProviders(<DrinksOutlet />);

    const errorHeader = screen.getByText(/something went wrong!/i);
    expect(errorHeader).toBeInTheDocument();
    const firstErrorMessage = screen.getByText(
      /i don't see the page you looking for, or some error occured.../i
    );
    expect(firstErrorMessage).toBeInTheDocument();
    const secondErrorMessage = screen.getByText(/return to home page./i);
    expect(secondErrorMessage).toBeInTheDocument();

    const returnButton = screen.getByRole("button", { name: /return home/i });
    expect(returnButton).toBeInTheDocument();
  });
});
