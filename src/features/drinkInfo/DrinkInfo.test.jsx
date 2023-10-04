import { fireEvent, screen } from "@testing-library/react";
import DrinkInfo from "./DrinkInfo";
import "react-intersection-observer/test-utils";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { testDrink } from "./drinkInfoTestData";
import { renderWithProviders } from "../../utils/test-utils";

// mock react router for proper id for useParams hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "17105",
  }),
}));

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php`,
    (req, res, ctx) => {
      const drinkId = req.url.searchParams.get("i");
      if (drinkId === "17105") {
        return res(ctx.status(200), ctx.json(testDrink));
      }
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("test for single drink with provided route parameter", () => {
  test("expect to render 501 Blue drinkName", async () => {
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);
    // await for response from rendered component
    const drinkName = await screen.findByRole("heading", { name: /501 blue/i });
    expect(drinkName).toBeInTheDocument();
  });
  test("render add/remove button and trigger click event", async () => {
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);

    // find button add/remove by title 'not favourite'
    const addButton = await screen.findByTitle(/notFavourite/i);
    expect(addButton).toBeInTheDocument();
    // text that will change after button is clicked
    const buttonDescription = await screen.findByText(/add to favourite/i);
    expect(buttonDescription).toBeInTheDocument();

    // fire event to change state of button
    fireEvent.click(addButton);
    // changed title for button after click event to 'favourite'
    const removeButton = screen.getByTitle(/favourite/i);
    expect(removeButton).toBeInTheDocument();
    // text changed after button was clicked
    const removeButtonDescription = await screen.findByText(
      /remove from favourite/i
    );
    expect(removeButtonDescription).toBeInTheDocument();
  });
});
