import { screen, act } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import IngredientPrompt from "./IngredientPrompt";
import { renderWithProviders } from "../../utils/test-utils";
import { ingredientPromptData } from "./ingredientPromptData";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { setupStore } from "../../app/store";
import { displayElement } from "./ingredientsButtonsSlice";

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php`,
    (req, res, ctx) => {
      const list = req.url.searchParams.get("i");
      if (list === "list") {
        return res(ctx.status(200), ctx.json(ingredientPromptData));
      }
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("tests for ingredients prompt", () => {
  test("should display Ingredient Prompt", async () => {
    const store = setupStore();
    store.dispatch(displayElement());

    renderWithProviders(<IngredientPrompt />, { store });

    screen.debug()
    });
});
