import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../utils/test-utils";
import CoctailList from "./CoctailList";
import { arr } from "./arr";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get(
    "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    (req, res, ctx) => {
      return res(ctx.json(arr.drinks), ctx.delay(150));
    }
  ),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<CoctailList />);

  // no drinkList initialy
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  const textElement = await screen.findByText(/list of coctails/i);

  expect(textElement).toBeInTheDocument();
});
