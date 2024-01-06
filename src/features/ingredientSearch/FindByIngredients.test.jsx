import { screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import FindByIngredients from "./FindByIngredients";
import { setupStore } from "../../app/store";
import { displayElement } from "./ingredientsButtonsSlice";



describe("test for FindByIngredients compoenent", () => {
  test("should return rendered component with  with 'find by ingredients' button", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<FindByIngredients/>);
    const button = screen.getByRole("button", { name: /find by ingredients/i });
    expect(button).toBeInTheDocument();

  });
});
