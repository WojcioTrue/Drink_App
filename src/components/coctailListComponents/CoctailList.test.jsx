import React from "react";
import { setupServer } from "msw/node";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import CoctailList from "./CoctailList";
import { arr } from "./arr";
import { rest } from "msw";

const server = setupServer(
  rest.get("https://fancy-app.com/getSomeData", (req, res, ctx) => {
    return res(ctx.json([arr]));
  })
);

beforeAll(() => server.listen());
  afterAll(() => server.close());
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

describe("chuj", () => {
  
  test("fetches & receives a user after clicking the fetch user button", async () => {
    renderWithProviders(<CoctailList />);

    // no drinkList initialy
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(await screen.findByText(/Loading.../i))

     const textElement = await screen.findByText(/list of coctails/i);
     expect(textElement).toBeInTheDocument();
  });
});
