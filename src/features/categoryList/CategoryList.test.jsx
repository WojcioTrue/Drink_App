import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryList from "./CategoryList";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Tests for category list elements", () => {
  test("display header form category list", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CategoryList />
        </Provider>
      </MemoryRouter>
    );
    const categoryListHeader = screen.getByRole("heading", {
      name: /Select category:/i,
    });
    expect(categoryListHeader).toBeInTheDocument();
  });
  test("check elements of list in right order", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CategoryList />
        </Provider>
      </MemoryRouter>
    );

    const categoriesList = screen.getAllByRole("listitem");
    categoriesList.forEach(listElement =>
      expect(listElement).toBeInTheDocument())
  });
});
