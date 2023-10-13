import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SearchBarInput from "./SearchBarInput";
import "react-intersection-observer/test-utils";
import { renderWithProviders } from "../../utils/test-utils";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { singleDrink, drinkList } from "./SearchBarInputData";
import { searchDrinks } from "./searchBarSlice";
import { setupStore } from "../../app/store";

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php`,
    (req, res, ctx) => {
      const drinkName = req.url.searchParams.get("s");
      switch (drinkName) {
        case "501":
          return res(ctx.status(200), ctx.json(singleDrink));
        case "red":
          return res(ctx.status(200), ctx.json(drinkList));
        default:
          return res(ctx.status(404));
      }
    }
  )
);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterAll(() => server.close());

describe("tests for searchBar Input", () => {
  test("should return textbox/input field", async () => {
    renderWithProviders(<SearchBarInput />);
    // find placeholder in textbox/input field
    const searchPlaceholder = screen.getByPlaceholderText(/search for drink/i);
    expect(searchPlaceholder).toBeInTheDocument();

    // check if textbox is inside document
    const searchBarInput = screen.getByRole("textbox", {
      name: /searchDrink/i,
    });
    expect(searchBarInput).toBeInTheDocument();
  });
  test("should render `501 blue` drink while triggering events for textbox/input field", async () => {
    const store = setupStore();
    // dispatching '501' drink name to redux thunk
    store.dispatch(searchDrinks("501"));
    renderWithProviders(<SearchBarInput />, { store });

    const searchBarInput = screen.getByPlaceholderText(/search for drink/i);

    // value must be passed to input, otherwise element wont be rendered
    fireEvent.change(searchBarInput, { target: { value: "501" } });
    // create focus on element so list can be displayed

    fireEvent.focus(searchBarInput);
    // default value of suggestions with no data

    const text = await screen.findByText(/There is no such drink.../i);
    expect(text).toBeInTheDocument();
    // wait for suggestions to be removed
    await waitForElementToBeRemoved(
      await screen.findByText(/There is no such drink.../i)
    );

    // should get "501 blue" drink
    const drink = await screen.findByText(/501 blue/i);
    expect(drink).toBeInTheDocument();
  });

  test("should render list of 3 drinks with 'red' in name", async () => {
    const store = setupStore();
    // dispatching drink name to redux thunk
    store.dispatch(searchDrinks("red"));
    renderWithProviders(<SearchBarInput />, { store });

    const searchBarInput = screen.getByPlaceholderText(/search for drink/i);

    // value must be passed to input, otherwise element wont be rendered
    fireEvent.change(searchBarInput, { target: { value: "red" } });
    // create focus on element so list can be displayed

    fireEvent.focus(searchBarInput);
    // default value of suggestions with no data

    const text = await screen.findByText(/There is no such drink.../i);
    expect(text).toBeInTheDocument();
    // wait for suggestions to be removed
    await waitForElementToBeRemoved(
      await screen.findByText(/There is no such drink.../i)
    );

    // loop through drinkList mocked data names and check if all of them are rendered
    for (let i = 0; i < drinkList.drinks.length; i++) {
      const drinkListName = screen.getByText(drinkList.drinks[i].strDrink);
      expect(drinkListName).toBeInTheDocument();
    }
  });
  test("should display 'not found' message inside suggestion list", async () => {
    const store = setupStore();
    // dispatching bad drink name to redux thunk
    store.dispatch(searchDrinks("redxxx"));
    renderWithProviders(<SearchBarInput />, { store });

    const searchBarInput = screen.getByPlaceholderText(/search for drink/i);

    // passing bad drink name to input
    fireEvent.change(searchBarInput, { target: { value: "redxxx" } });
    
    // focus on element
    fireEvent.focus(searchBarInput);

    // not found text information
    const notFoundText = await screen.findByText(/there is no such drink.../i)
    expect(notFoundText).toBeInTheDocument()

    //check not found img src
    const notFoundImg = screen.getByRole('img', {name: /there is no such drink.../i})
    expect(notFoundImg).toBeInTheDocument()
  });
});
