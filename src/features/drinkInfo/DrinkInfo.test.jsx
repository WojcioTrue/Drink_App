import { fireEvent, screen } from "@testing-library/react";
import DrinkInfo from "./DrinkInfo";
import "react-intersection-observer/test-utils";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { testDrink } from "./drinkInfoTestData";
import { renderWithProviders } from "../../utils/test-utils";

// mock react router for proper id inside useParams hook
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
  test("should render 501 Blue drinkName", async () => {
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);
    // await for response from rendered component
    const drinkName = await screen.findByRole("heading", {
      name: testDrink.drinks[0]["strDrink"],
    });
    expect(drinkName).toBeInTheDocument();
  });
  test("should render add/remove button and trigger click event", async () => {
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);

    // find button add/remove by title 'not favourite'
    const addButton = await screen.findByTitle(/addFavourite/i);
    expect(addButton).toBeInTheDocument();
    // text that will change after button is clicked
    const buttonDescription = await screen.findByText(/add to favourite/i);
    expect(buttonDescription).toBeInTheDocument();

    // fire event to change state of button
    fireEvent.click(addButton);
    // changed title for button after click event to 'favourite'
    const removeButton = screen.getByTitle(/removeFavourite/i);
    expect(removeButton).toBeInTheDocument();
    // text changed after button was clicked
    const removeButtonDescription = await screen.findByText(
      /remove from favourite/i
    );
    expect(removeButtonDescription).toBeInTheDocument();
  });
  test("should render list of ingredients", async () => {
    renderWithProviders(<DrinkInfo />);

    const ingredientsHeader = await screen.findByRole("heading", {
      level: 3,
      name: /list of ingredients/i,
    });
    expect(ingredientsHeader).toBeInTheDocument();

    const listOfIngredients = await screen.findAllByRole("listitem");

    // compare list of ingredients with test data
    function checkIngredients() {
      let i = 0;
      while (listOfIngredients[i] !== undefined) {
        expect(listOfIngredients[i]).toHaveTextContent(
          testDrink.drinks[0][`strIngredient${i + 1}`]
        );
        i++;
      }
    }

    checkIngredients();
  });
  test("should return preparation info", async () => {
    renderWithProviders(<DrinkInfo />);

    const preparationHeader = await screen.findByText(/preparation/i);
    expect(preparationHeader).toBeInTheDocument();

    const preparationDescription = await screen.findByText(
      testDrink.drinks[0]["strInstructions"]
    );

    expect(preparationDescription).toBeInTheDocument();
  });
  test("should return type of glass for drink", async () => {
    renderWithProviders(<DrinkInfo />);

    const preparationHeader = await screen.findByText(/type of glass/i);
    expect(preparationHeader).toBeInTheDocument();

    const preparationDescription = await screen.findByText(
      testDrink.drinks[0]["strGlass"]
    );

    expect(preparationDescription).toBeInTheDocument();
  });
});
