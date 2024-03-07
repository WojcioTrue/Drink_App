import {
  fireEvent,
  screen,
} from "@testing-library/react";
import DrinkInfo from "./DrinkInfo";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { testDrink } from "./drinkInfoTestData";
import { renderWithProviders } from "../../utils/test-utils";


// mock react router for proper id inside useParams hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php`,
    (req, res, ctx) => {
      const drinkId = req.url.searchParams.get("i");
      if (drinkId === "17105") {
        return res(ctx.status(200), ctx.json(testDrink));
      } else {
        return res(ctx.status(404));
      }
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("test for single drink with mocked id parameter in react-router-dom", () => {
  test("should render 501 Blue drinkName", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);
    // await for response from rendered component
    const drinkName = await screen.findByRole("heading", {
      name: "501 Blue",
    });
    expect(drinkName).toBeInTheDocument();
  });
  test("should render add/remove button and trigger click event", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    // initiate render with dispatched drink id
    renderWithProviders(<DrinkInfo />);

    // find button add/remove by title 'addFavourite'
    const addButton = await screen.findByTitle(/addFavourite/i);
    expect(addButton).toBeInTheDocument();
    // text that will change after button is clicked
    const buttonDescription = await screen.findByText(/add to favourite/i);
    expect(buttonDescription).toBeInTheDocument();

    // fire event to change state of button
    fireEvent.click(addButton);
    // changed title for button after click event to 'removefavourite'
    const removeButton = screen.getByTitle(/removeFavourite/i);
    expect(removeButton).toBeInTheDocument();
    // text changed after button was clicked
    const removeButtonDescription = await screen.findByText(
      /remove from favourite/i
    );
    expect(removeButtonDescription).toBeInTheDocument();
  });

  test("Should return 'list of ingredients' header", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const ingredientsHeader = await screen.findByRole("heading", {
      level: 3,
      name: /list of ingredients/i,
    });
    expect(ingredientsHeader).toBeInTheDocument();

  })
  test("should render list of ingredients", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const listOfIngredients: HTMLLIElement[] = await screen.findAllByRole("listitem");

    // compare list of ingredients with test data
    function checkIngredients() {
      let i = 0;
      while (listOfIngredients[i] !== undefined) {
        expect(listOfIngredients[i]).toHaveTextContent(
          `${testDrink.drinks[0][`strIngredient${i + 1}`]}`
        );
        i++;
      }
    }

    checkIngredients();
  });

  test("should return 'Preparation' header", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const preparationHeader = await screen.findByText(/preparation/i);
    expect(preparationHeader).toBeInTheDocument();
  })

  test("should return preparation info", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const preparationDescription = await screen.findByText(`${testDrink.drinks[0][`strInstructions`]}`);

    expect(preparationDescription).toBeInTheDocument();
  });
  test("should return 'type of glass' header", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const preparationHeader = await screen.findByText(/type of glass/i);
    expect(preparationHeader).toBeInTheDocument();
  })
  test("should return type of glass description", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105" });
    renderWithProviders(<DrinkInfo />);

    const preparationDescription = await screen.findByText(`${testDrink.drinks[0][`strGlass`]}`);

    expect(preparationDescription).toBeInTheDocument();
  });
});

describe("Mocking react-router-dom with invalid data to cause error", () => {
  test("Should return 'something went wront' header", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105x" });
    renderWithProviders(<DrinkInfo />);

    const errorHeader = await screen.findByText(/something went wrong!/i);
    expect(errorHeader).toBeInTheDocument();
  });
  test("Should return first paragraph of error message", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105x" });
    renderWithProviders(<DrinkInfo />);

    const firstErrorMessage = await screen.findByText(
      /i don't see the page you looking for, or some error occured.../i
    );
    expect(firstErrorMessage).toBeInTheDocument()
  })
  test("Should return second paragraph of error message", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105x" });
    renderWithProviders(<DrinkInfo />);
    const secondErrorMessage = await screen.findByText(/return to home page./i);
    expect(secondErrorMessage).toBeInTheDocument()
  })

  test("Should return 'return home' button", async () => {
    require("react-router-dom").useParams.mockReturnValue({ id: "17105x" });
    renderWithProviders(<DrinkInfo />);
    const returnButton = await screen.findByRole('button', { name: /return home/i })
    expect(returnButton).toBeInTheDocument()
  })
})