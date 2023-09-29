import { setupServer } from "msw/node";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import CoctailList from "./CoctailList";
import {
  vodkaData as vodka,
  whiskeyData as whiskey,
  ginData as gin,
  bourbonData as bourbon,
  tequilaData as tequila,
  rumData as rum,
} from "./testData.jsx";
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
    // no drinkList initialy, pending data
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
    // waiting for element to be removed
    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));
    expect(loadingText).not.toBeInTheDocument();
    // should return 'list of coctails' after some time
    const textElement = await screen.findByText(/list of coctails/i);
    expect(textElement).toBeInTheDocument();
    // check if first drink is rendered
    const titleOfDrink = await screen.findByText(/155 Belmont/i);
    expect(titleOfDrink).toBeInTheDocument();
  });
  test("compare rendered images src with mocked data", async () => {
    renderWithProviders(<CoctailList />);

    // waiting for pending data to be sucessful and "loading..." text to me removed
    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    for (let i = 0; i < vodka.drinks.length; i++) {
      const gridCoctailsImg = screen.getAllByRole("img");
      // check if img element is rendered
      expect(gridCoctailsImg[i]).toBeInTheDocument();
      // compare src attribute to have the same value as mocked data
      expect(gridCoctailsImg[i].src).toBe(`${vodka.drinks[i].strDrinkThumb}`);
    }
  });
  test("compare rendered names of drinks with the one from mocked data", async () => {
    renderWithProviders(<CoctailList />);

    // waiting for pending data to be sucessful and "loading..." text to me removed
    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    // loop through mocked data and compare it with rendered titles
    for (let i = 0; i < vodka.drinks.length; i++) {
      const gridCoctailsHeaders = screen.getAllByRole("heading", {
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

        // wait for loadin... to fullfill
        await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

        // get name of first drink from mocked data
        const firstDrink = screen.getByText(
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

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    // error Img inside NotFound message
    const errorPic = screen.getByRole("img");
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
