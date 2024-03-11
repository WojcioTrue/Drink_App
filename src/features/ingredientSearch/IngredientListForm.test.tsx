import { screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import IngredientListForm from "./IngredientListForm";
import { renderWithProviders } from "../../utils/test-utils";
import { addIngredientField } from "./ingredientsDataSlice";
import { setupStore } from "../../app/store";
import { ingredientPromptData } from "./mockData/ingredientPromptData";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";


const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php`,
    (req, res, ctx) => {
      const list = req.url.searchParams.get("i");
      if (list === "list") {
        return res(ctx.status(200), ctx.json(ingredientPromptData));
      }
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("tests for IngredientListForm component", () => {
  test("should render 'Ingredient 1' label", async () => {
    renderWithProviders(<IngredientListForm />);

    let selectLabel;

    await waitFor(async () => {
      selectLabel = await screen.findByLabelText(/IngredientLabel1/i);
    });

    expect(selectLabel).toBeInTheDocument();
    expect(selectLabel).toHaveTextContent("Ingredient 1 :");
  });
  test("should render 'selectField1' select field with 1 option '--please choose an option--'", async () => {
    renderWithProviders(<IngredientListForm />);

    let selectfield! : HTMLSelectElement;

    await waitFor(async () => {
      selectfield = await screen.findByTestId(/selectfield1/i);
    });

    expect(selectfield).toBeInTheDocument();
    expect(selectfield).toHaveLength(1);
    expect(selectfield[0]).toHaveTextContent(/-- Please choose an option --/i);
    expect(selectfield[1]).toEqual(undefined);
  });
  test("should render 'selectField1' select field with 101 option fields mocked from 'ingredientPromptData'", async () => {
    renderWithProviders(<IngredientListForm />);

    // await for all ingredients to be mocked
    const tea = await screen.findByText(/tea/i);
    expect(tea).toBeInTheDocument()
    const selectfield = screen.getByTestId(/selectfield1/i);
    expect(selectfield).toBeInTheDocument();
    expect(selectfield).not.toHaveLength(1);
    // length of ingredients + default value passed in component
    expect(selectfield).toHaveLength(101);
  });
  test("should render 'selectField2' after dispatching action", async () => {
    const store = setupStore();
    store.dispatch(addIngredientField());

    renderWithProviders(<IngredientListForm />, { store });

    // should return two tea's, because we have 2 select fields
    const tea = await screen.findAllByText(/tea/i);
    expect(tea).toHaveLength(2);

    const secondSelectfield = screen.getByTestId(/selectfield2/i);
    expect(secondSelectfield).toBeInTheDocument();
  });
  test("selectfield2 should not have 'light rum' option after selecting in selectfield1 field", async () => {
    const store = setupStore();
    store.dispatch(addIngredientField());

    renderWithProviders(<IngredientListForm />, { store });

    // await for all ingredients to be mocked
    const lightRum = await screen.findAllByText("Light rum");
    const firstSelectfield = screen.getByTestId(/selectfield1/i);

    // not choosen Light rum in selectfield1
    expect(lightRum).toHaveLength(2);

    // choose 'Light rum' in selectfield1
    fireEvent.change(firstSelectfield, { target: { value: "Light rum" } });
    expect(firstSelectfield).toHaveValue("Light rum");

    // should remove 'Light rum' from selectField1 and return only one option of light rum
    const lightRumAfter = await screen.findAllByText("Light rum");
    expect(lightRumAfter).toHaveLength(1);

    const secondSelectfield = await screen.findByTestId(/selectfield2/i);
    expect(secondSelectfield).not.toContain(/light rum/i);
  });
});
