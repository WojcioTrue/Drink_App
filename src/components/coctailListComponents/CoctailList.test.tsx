import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import CoctailList from "./CoctailList";
import {
  vodkaData as vodka,
  whiskeyData as whiskey,
  ginData as gin,
  bourbonData as bourbon,
  tequilaData as tequila,
  rumData as rum,
} from "./testListData.jsx";
import { rest } from "msw";
import "react-intersection-observer/test-utils";
import { setupStore } from "../../app/store";
import { getDrinks } from "../../features/categoryList/categoryListSlice";

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php`,
    (req, res, ctx) => {
      const categoryId = req.url.searchParams.get("i");
      switch (categoryId) {
        case "Rum":
          return res(ctx.status(200), ctx.json(rum));
        case "Whiskey":
          return res(ctx.status(200), ctx.json(whiskey));
        case "Gin":
          return res(ctx.status(200), ctx.json(gin));
        case "Bourbon":
          return res(ctx.status(200), ctx.json(bourbon));
        case "Tequila":
          return res(ctx.status(200), ctx.json(tequila));
        case "Vodka":
          return res(ctx.status(200), ctx.json(vodka));
        default:
          return res(ctx.status(404));
      }
    }
  )
);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterAll(() => server.close());

describe("Tests for CoctailList component that renders list of coctails", () => {
  test("Mocking data with default 'Vodka' value inside redux-thunk", async () => {
    // rendering elements with redux provider wrapper
    renderWithProviders(<CoctailList />);

    // check if first drink is rendered
    const titleOfDrink = await screen.findByText(/155 Belmont/i);
    expect(titleOfDrink).toBeInTheDocument();
  });
  test("compare rendered images src with mocked data", async () => {
    renderWithProviders(<CoctailList />);

    //loop through vodka drinks and check if img exist
    for (let i = 0; i < vodka.drinks.length; i++) {
      let element = vodka.drinks[i];
      const drinkImage: HTMLImageElement = await screen.findByRole("img", {
        name: element.strDrink,
      });
      // src of img should be the same as mocked data
      expect(drinkImage.src).toContain(element.strDrinkThumb)
    }
  });
  test("compare rendered names of drinks with the one from mocked data", async () => {
    renderWithProviders(<CoctailList />);
    // loop through mocked data and compare it with rendered titles
    for (let i = 0; i < vodka.drinks.length; i++) {
      const gridCoctailsHeaders = await screen.findAllByRole("heading", {
        level: 4,
      });
      expect(gridCoctailsHeaders[i]).toBeInTheDocument();
      expect(gridCoctailsHeaders[i]).toHaveTextContent(
        `${vodka.drinks[i].strDrink}`
      );
    }
  });
  describe("loop through mock data with different categories of drinks", () => {
    const arrOfCategories = [
      { categoryName: "Rum", mockData: rum },
      { categoryName: "Whiskey", mockData: whiskey },
      { categoryName: "Gin", mockData: gin },
      { categoryName: "Bourbon", mockData: bourbon },
      { categoryName: "Tequila", mockData: tequila },
    ];

    for (let i = 0; i < arrOfCategories.length; i++) {
      test(`Mocking data with "${arrOfCategories[i].categoryName}" category changed inside redux-thunk`, async () => {
        const store = setupStore();
        // dispatching new category to redux thunk
        store.dispatch(getDrinks(arrOfCategories[i].categoryName));
        renderWithProviders(<CoctailList />, { store });


        // get name of first drink from mocked data
        const firstDrink = await screen.findByText(
          `${arrOfCategories[i].mockData.drinks[0].strDrink}`
        );
        // check if mocked drink was rendered
        expect(firstDrink).toBeInTheDocument();
      });
    }
  });

  test("dispatching wrong category", async () => {
    // setup initial store for redux wrapper
    const store = setupStore();
    // dispatching invalid category to redux thunk
    store.dispatch(getDrinks("Gin_Vodka"));
    renderWithProviders(<CoctailList />, { store });

    // error Img inside NotFound message
    const errorPic : HTMLImageElement = await screen.findByRole("img");
    expect(errorPic.alt).toContain("Alt img for error prompt");

    // should return error text
    const errorHeader = screen.getByText(/something went wrong!/i);
    expect(errorHeader).toBeInTheDocument();

    // description of error
    const descriptionError = screen.getByText(
      /I don't see the page you looking for, or some error occured.../i
    );
    expect(descriptionError).toHaveTextContent(
      "I don't see the page you looking for, or some error occured..."
    );

    // button to return homepage
    const homeButton = screen.getByRole("button", { name: /return home/i });
    expect(homeButton).toBeInTheDocument();
  });
});
