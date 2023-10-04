import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import DrinkInfo from "./DrinkInfo";
import "react-intersection-observer/test-utils";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { testDrink } from "./drinkInfoTestData";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";
import { getDrinkData } from "./drinkDataSlice";

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php`,
    (req, res, ctx) => {
      const drinkId = req.url.searchParams.get("i");
      if (drinkId === "17105") return res(ctx.status(404), ctx.json(testDrink));
    }
  )
);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterAll(() => server.close());

describe("test for single drink with provided route parameter", () => {
  test("display component", async () => {
    // setup initial store for redux wrapper
    const store = setupStore();
    // dispatching drinkId for mocked data
    store.dispatch(getDrinkData("17105"));
    renderWithProviders(<DrinkInfo />, { store });

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i));

    const drinkName = screen.getByRole("heading", { name: /501 blue/i });

    expect(drinkName).toBeInTheDocument();
  });
});
