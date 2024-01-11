import { screen, waitFor, fireEvent, act } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import IngredientPrompt from "./IngredientPrompt";
import { renderWithProviders } from "../../utils/test-utils";
import { ingredientPromptData } from "./ingredientPromptData";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { setupStore } from "../../app/store";
import { displayElement } from "./ingredientsButtonsSlice";
import { teaMockedData } from "./teaMockedData";

const server = setupServer(
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php`,
    (req, res, ctx) => {
      const list = req.url.searchParams.get("i");
      if (list === "list") {
        return res(ctx.status(200), ctx.json(ingredientPromptData));
      }
    }
  ),
  rest.get(
    `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php`,
    (req, res, ctx) => {
      const list = req.url.searchParams.get("i");
      if (list === "Tea") {
        return res(ctx.status(200), ctx.json(teaMockedData));
      }
    }
  ),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("tests if ingredients prompt is displayed", () => {
  test("should not display prompt, didn't dispatched action", () => {
    renderWithProviders(<IngredientPrompt />);

    const promptLabel = screen.queryByText(/select ingredients:/i);
    expect(promptLabel).not.toBeInTheDocument();
  });
  test("should display prompt, dispatched action", async () => {
    const store = setupStore();
    store.dispatch(displayElement());

    renderWithProviders(<IngredientPrompt />, { store });

    // using await waitFor to remove error with act method in jest, wait for all sideEffect inside components to complete
    await waitFor(async () => {
      const promptLabel = await screen.findByText(/select ingredients:/i);
      expect(promptLabel).toBeInTheDocument();
    });
  });
});

describe("test for displaying elements of IngredientPrompt", () => {
  test("should return 'Select ingredients:' header", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const promptLabel = await screen.findByText(/select ingredients:/i);
      expect(promptLabel).toBeInTheDocument();
    });
  });
  test("should return 'Ingredient 1:' label", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    // for some reason 'findByLabelText' throw an error
    await waitFor(async () => {
      const promptLabel = await screen.findByLabelText(/ingredientlabel1/i);
      expect(promptLabel).toBeInTheDocument();
    });
  });
  test("should return 'selectField1' select field", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const promptLabel = await screen.findByTestId(/selectField1/i);
      expect(promptLabel).toBeInTheDocument();
    });
  });

  test("should return 'Lemon vodka','Blended whiskey' and 'Tea' ingredients options", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    //after waitFor
    const lemonVodka = await screen.findByRole("option", {
      name: /lemon vodka/i,
    });
    expect(lemonVodka).toBeInTheDocument();

    const blendedWhiskey = await screen.findByRole("option", {
      name: /blended whiskey/i,
    });
    expect(blendedWhiskey).toBeInTheDocument();

    const tea = await screen.findByRole("option", { name: /tea/i });
    expect(tea).toBeInTheDocument();
  });

  test("should loop through all ingredients, check if they are rendered in right order and comared with the one inside mocked data", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    // get one specific element to make sure DOM is rendered correctly
    const tea = await screen.findByRole("option", { name: /tea/i });
    expect(tea).toBeInTheDocument();

    const ingredients = await screen.findAllByRole("option");

    for (let i = 0; i < ingredients.length; i++) {
      // ommit last element in array, because it's gonna be check thank's to ingredients[i + 1]
      if (i === ingredients.length - 1) {
        break;
      }
      expect(ingredients[i]).toBeInTheDocument();
      expect(ingredients[i + 1].value).toBe(
        ingredientPromptData.drinks[i].strIngredient1
      );
    }
  });

  test("should return 'removeField1' div", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const promptLabel = await screen.findByTestId("removeField1");
      expect(promptLabel).toBeInTheDocument();
    });
  });

  test("should return 'number of drinks' label", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const promptLabel = await screen.findByLabelText(/labeldrinksnumber/i);
      expect(promptLabel).toBeInTheDocument();
    });
  });
  test("should return 'add ingredient' button", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const button = await screen.findByRole("button", {
        name: /add ingredient/i,
      });
      expect(button).toBeInTheDocument();
    });
  });
  test("should return 'display drinks' button", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const button = await screen.findByRole("button", {
        name: /display drinks/i,
      });
      expect(button).toBeInTheDocument();
    });
  });
  test("Should return 'faXmark' icon to close Ingredient-prompt", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    await waitFor(async () => {
      const button = await screen.findByTestId(/close-prompt-test/i);
      expect(button).toBeInTheDocument();
    });
  });
});

describe("Tests for interactions with Ingredient-prompt component", () => {
  test("Should close Ingredient-prompt after clicking faXmark icon (as button)", async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    let button;

    await waitFor(async () => {
      button = await screen.findByTestId(/close-prompt-test/i);
    });
    // button should be in document
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).not.toBeInTheDocument();
  });
  test('Should change "Add ingredient" button to disabled after clicking 3 times and create 3 ingredient select fields (4 in total)', async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    let addIngredient;

    await waitFor(async () => {
      addIngredient = await screen.findByRole("button", {
        name: /add ingredient/i,
      });
    });

    expect(addIngredient).not.toHaveAttribute("disabled");

    fireEvent.click(addIngredient);
    fireEvent.click(addIngredient);
    fireEvent.click(addIngredient);

    expect(addIngredient).toHaveAttribute("disabled");

    for (let i = 0; i < 4; i++) {
      const selectIngredient = screen.getByTestId(`selectField${i + 1}`);
      expect(selectIngredient).toBeInTheDocument();
    }
  });
  test('should create 4 select fields with "remove ingredient" button, and button should be disabled when there is only one ingredient field', async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    let addIngredientButton;

    await waitFor(async () => {
      addIngredientButton = await screen.findByRole("button", {
        name: /add ingredient/i,
      });
    });

    const removeIngredient = screen.getByTestId(/removeField1/i);
    expect(removeIngredient).toBeInTheDocument();
    // at first, removeIngredient "button" should be disabled with "remove-ingredient--disabled" class and no function
    expect(removeIngredient).toHaveClass(
      "remove-ingredient remove-ingredient--disabled"
    );

    fireEvent.click(addIngredientButton);
    expect(removeIngredient).not.toHaveClass(
      "remove-ingredient remove-ingredient--disabled"
    );
    expect(removeIngredient).toHaveClass("remove-ingredient");

    // fire event 2 times to have 4 remove-ingredient "buttons"
    fireEvent.click(addIngredientButton);
    fireEvent.click(addIngredientButton);

    for (let i = 0; i < 4; i++) {
      // check if there are 4 remove-ingredient buttons
      const dataTestId = `removeField${i + 1}`;
      const button = screen.getByTestId(dataTestId);
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("remove-ingredient");
    }

    const removeField4 = screen.getByTestId(/removeField4/i);
    // remove fourth field
    fireEvent.click(removeIngredient);
    expect(removeField4).not.toBeInTheDocument();
    const removeField3 = screen.getByTestId(/removeField3/i);
    // remove third field
    fireEvent.click(removeIngredient);
    expect(removeField3).not.toBeInTheDocument();
    const removeField2 = screen.getByTestId(/removeField2/i);
    // remove second field
    fireEvent.click(removeIngredient);
    expect(removeField2).not.toBeInTheDocument();

    // should return to state from beggining of test with disabled class for first button
    expect(removeIngredient).toHaveClass(
      "remove-ingredient remove-ingredient--disabled"
    );
  });
  test('should display "display drinks" button disabled', async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    let displayDrinks;

    await waitFor(async () => {
      displayDrinks = await screen.findByRole("button", {
        name: /display drinks/i,
      });
    });
    expect(displayDrinks).toBeInTheDocument();
    expect(displayDrinks).toBeDisabled();
  });
  test('should display "display drinks" button enabled', async () => {
    const store = setupStore();
    store.dispatch(displayElement());
    renderWithProviders(<IngredientPrompt />, { store });

    let displayDrinks;

    await waitFor(async () => {
      displayDrinks = await screen.findByRole("button", {
        name: /display drinks/i,
      });
    });

    // initially button is disabled
    expect(displayDrinks).toBeInTheDocument();
    expect(displayDrinks).toBeDisabled()
    // await to load all ingredients
    const tea = await screen.findByText(/tea/i)
    expect(tea).toBeInTheDocument()

    // change value in select element
    const selectField = await screen.findByTestId(/selectField1/i)
    
    fireEvent.change(selectField, { target: { value: 'Tea' } })
    
    // wait for DOM asynchronous updates
    // button should be disabled
    await waitFor( async() => {
      expect(displayDrinks).not.toBeDisabled()
    })

  });
});
