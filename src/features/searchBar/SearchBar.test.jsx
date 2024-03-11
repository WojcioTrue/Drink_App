import { screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "react-intersection-observer/test-utils";
import { renderWithProviders } from "../../utils/test-utils";

describe("tests for searchBar component", () => {
  test("should renturn app name", () => {
    renderWithProviders(<SearchBar />);
    
    const appName = screen.getByRole("heading", {name: /find mydrink ./i});
    expect(appName).toBeInTheDocument()
  });
  test("should renturn logo by title 'logo'", () => {
    renderWithProviders(<SearchBar />);

    const logoRole = screen.getByTitle("logo");
    expect(logoRole).toBeInTheDocument();
  });
});
