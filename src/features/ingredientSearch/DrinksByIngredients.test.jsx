import { screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import DrinksByIngredients from "./DrinksByIngredients";
import { renderWithProviders } from "../../utils/test-utils";
import { DrinksOutletData } from "./ginData";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php`,
    (req, res, ctx) => {
      const drinkIngredient = req.url.searchParams.get("i");
      if (drinkIngredient === "Gin,Light_rum") {
        return res(ctx.status(200), ctx.json(DrinksOutletData));
      } else {
        return res(ctx.status(404));
      }
    }
  )
);

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
beforeAll(() => server.listen());
afterAll(() => server.close());

describe("test for full screen fetching drinks by ingredients", () => {
  test("Should return no drinks by ingredient initially, no mocking implemented", () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    const badIngredientsHeader = screen.getByText(
      /There are no drinks with such ingredient's!/i
    );
    expect(badIngredientsHeader).toHaveClass("header");
    expect(badIngredientsHeader).toBeInTheDocument();

    const firstMessageLine = screen.getByText(/Change ingredients you chose./i);
    expect(firstMessageLine).toBeInTheDocument();
    const secondMessageLine = screen.getByText(
      /Change ingredients you chose./i
    );
    expect(secondMessageLine).toBeInTheDocument();
  });

  test("Mocking data for drinks by Ingredients. Ingredients are Gin and light rum", async () => {
    // mock useLocation hook with Gin&Light_rum parameter
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    // rendering first drink from mocked API
    const firstDrink = await screen.findByText("3-Mile Long Island Iced Tea");
    expect(firstDrink).toBeInTheDocument();

    for (let element of DrinksOutletData.drinks) {
      // test element for correct drink name
      const drinkName = screen.getByRole("heading", {
        name: element.strDrink,
        level: 4,
      });
      expect(drinkName).toBeInTheDocument();
      // compare rendered img src with one from mocked data
      const drinkImg = screen.getByAltText(element.strDrink);
      expect(drinkImg).toHaveAttribute("src", element.strDrinkThumb);
    }

    // compare links added by react-router to id passed from fetched data
    const links = screen.getAllByRole("link");
    links.forEach((element, index) => {
      expect(element).toHaveAttribute(
        "href",
        `/drink/${DrinksOutletData.drinks[index].idDrink}`
      );
    });

    // should render 4 buttons with 'details' text
    const buttons = screen.getAllByRole("button", { name: /details/i });
    expect(buttons).toHaveLength(4);
    
    //shold return 4 'addFavourite' buttons
    const favButtons = screen.getAllByTitle('addFavourite')
    expect(favButtons).toHaveLength(4);
  });
});
