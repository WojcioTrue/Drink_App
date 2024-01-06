import { screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import IngredientPrompt from "./IngredientPrompt";
import { renderWithProviders } from "../../utils/test-utils";
import { DrinksOutletData } from "./ginData";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { setupStore } from "../../app/store";
import { displayElement } from "./ingredientsButtonsSlice";
describe("tests for ingredients prompt", () => {
  test("x", () => {
    const store = setupStore();
    store.dispatch(displayElement());

    renderWithProviders(<IngredientPrompt />, { store });
  });
});
