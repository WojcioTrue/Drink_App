import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrinksByIngredients from "./DrinksByIngredients";
import { renderWithProviders } from "../../utils/test-utils";
import { DrinksOutletData } from "./mockData/ginData";
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

// beforeEach(() => {
//   const mockIntersectionObserver = jest.fn();
//   mockIntersectionObserver.mockReturnValue({
//     observe: () => null,
//     unobserve: () => null,
//     disconnect: () => null,
//   });
//   window.IntersectionObserver = mockIntersectionObserver;
// });
beforeAll(() => server.listen());
afterAll(() => server.close());

describe("Displaying 'no drinks by ingredient' screen initially", () => {
  test("Should return 'There are no drinks with such ingredient's' header", () => {
    // mocking required by component react-router-dom useParams hook with empty id
    require("react-router-dom").useParams.mockReturnValue({
      id: "",
    });
    renderWithProviders(<DrinksByIngredients />);

    const badIngredientsHeader = screen.getByText(
      /There are no drinks with such ingredient's!/i
    );
    expect(badIngredientsHeader).toHaveClass("header");
    expect(badIngredientsHeader).toBeInTheDocument();
  });
  test("Should return 'Change ingredients you chose.' message", () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "",
    });
    renderWithProviders(<DrinksByIngredients />);

    const changeIngredientsMessage = screen.getByText(/Change ingredients you chose./i);
    expect(changeIngredientsMessage).toBeInTheDocument();
  });

  test("Should return 'Drink responsibly!' message", () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "",
    });
    renderWithProviders(<DrinksByIngredients />);

    const drinkResponsibilyMessage = screen.getByText(/Drink responsibly!/i);
    expect(drinkResponsibilyMessage).toBeInTheDocument();
  });
});

describe("Mocking data for 'DrinksByIngredients'. 'Gin&Light_rum' as passed as ingredients", () => {
  test("Should return '3-mile Long Island iced Tea", async () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    // rendering first drink from mocked API
    const firstDrink = await screen.findByText("3-Mile Long Island Iced Tea");
    expect(firstDrink).toBeInTheDocument();
  })
  test("Should return element's with correct drink name", async () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    for (let element of DrinksOutletData.drinks) {
      const drinkName = await screen.findByRole("heading", {
        name: element.strDrink,
        level: 4,
      });
      expect(drinkName).toBeInTheDocument();
    }
  })

  test("Should check if element have valid 'src' path to img", async () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    for (let element of DrinksOutletData.drinks) {

      const drinkImg = await screen.findByAltText(element.strDrink);
      expect(drinkImg).toHaveAttribute("src", element.strDrinkThumb);
    }
  })

  test("Should return true if all drinks have correct links from mocked data", async () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    const links = await screen.findAllByRole("link");
    links.forEach((element, index) => {
      expect(element).toHaveAttribute(
        "href",
        `/drink/${DrinksOutletData.drinks[index].idDrink}`
      );
    });
  })

  test("should render 4 buttons with 'details' text", async () => {
    require("react-router-dom").useParams.mockReturnValue({
      id: "Gin&Light_rum",
    });
    renderWithProviders(<DrinksByIngredients />);

    const buttons = await screen.findAllByRole("button", { name: /details/i });
    expect(buttons).toHaveLength(4);

    //shold return 4 'addFavourite' buttons
    const favButtons = screen.getAllByTitle('addFavourite')
    expect(favButtons).toHaveLength(4);
  })
})




