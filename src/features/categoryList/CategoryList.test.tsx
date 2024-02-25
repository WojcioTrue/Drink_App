import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryList from "./CategoryList";
import { renderWithProviders } from "../../utils/test-utils";

describe("Tests for category list elements", () => {
  test("display header form category list", () => {
    renderWithProviders(<CategoryList />);
    const categoryListHeader = screen.getByRole("heading", {
      name: /Select category:/i,
    });
    expect(categoryListHeader).toBeInTheDocument();
  });
  test("check elements of list in right order", () => {
    renderWithProviders(<CategoryList />);

    const categoriesList = screen.getAllByRole("listitem");
    categoriesList.forEach((listElement) =>
      expect(listElement).toBeInTheDocument()
    );
  });
});
