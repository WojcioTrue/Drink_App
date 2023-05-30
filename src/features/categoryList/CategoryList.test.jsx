import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import CategoryList from "./CategoryList";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("basic tests", () => {
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
});
