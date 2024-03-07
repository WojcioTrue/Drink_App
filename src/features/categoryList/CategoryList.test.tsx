import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryList from "./CategoryList";
import { renderWithProviders } from "../../utils/test-utils";
import { arrayOfCategories } from './CategoriesArray'

describe("Tests for category list elements", () => {
  test("display header form category list", () => {
    renderWithProviders(<CategoryList />);
    const categoryListHeader = screen.getByRole("heading", {
      name: /Select category:/i,
    });
    expect(categoryListHeader).toBeInTheDocument();
  });
  test("check if elements in list are displayed in right order", () => {
    renderWithProviders(<CategoryList />);

    const categoriesList = screen.getAllByRole("listitem");
    categoriesList.forEach((listElement,i) =>
      expect(`${arrayOfCategories[i].text}`).toEqual(listElement.textContent)
    );
  });
});
