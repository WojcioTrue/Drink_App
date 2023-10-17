import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouriteList from "./FavouriteList";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";
import { addToFavourite } from "./favouriteListSlice";
import "react-intersection-observer/test-utils";
import { arrOfFavourite } from "./FavListFullScreenData";

describe("tests for favourite list container full screen", () => {
  test("should return 'favourite drinks' header", () => {
    renderWithProviders(<FavouriteList />);

    const header = screen.getByRole("heading", {
      name: /Favourite drinks :/i,
      level: 3,
    });
    expect(header).toBeInTheDocument();
  });
  test("should render list of favourite drinks with A1 drink", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );

    renderWithProviders(<FavouriteList />, { store });

    const drinkName = screen.getByRole("heading", {
      name: /A1/i,
      level: 4,
    });
    expect(drinkName).toBeInTheDocument();
  });

  test("should render 'View all favourite drinks' button", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );

    renderWithProviders(<FavouriteList />, { store });

    const drinkName = screen.getByRole("button", {
      name: /view all favourite drinks/i,
    });
    expect(drinkName).toBeInTheDocument();
  });
  test("should render list of favourite drinks with data from arrOfFavourite variable", () => {
    const store = setupStore();

    for (let i = 0; i < arrOfFavourite.length; i++) {
      const element = arrOfFavourite[i];
      store.dispatch(
        addToFavourite(element.idDrink, element.strDrink, element.strDrinkThumb)
      );
    }

    renderWithProviders(<FavouriteList />, { store });

    for (let i = 0; i < arrOfFavourite.length; i++) {
      const element = arrOfFavourite[i];
      // check drink name inside favourite list
      const drinkName = screen.getByRole("heading", { name: element.strDrink });
      expect(drinkName).toBeInTheDocument();

    }
  });
  test("should remove drink from list after button click", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );

    renderWithProviders(<FavouriteList />, { store });
    // render drink
    const drinkName = screen.getByText(/a1/i)
    expect(drinkName).toBeInTheDocument()

    // fire event to remove from favourite
    const button = screen.getByTitle('removeFavourite')
    fireEvent.click(button)
    
    // drink should disappear
    expect(drinkName).not.toBeInTheDocument()
    
    const noDrinkHeader = screen.getByText(/Favourite drinks/i)
    expect(noDrinkHeader).toBeInTheDocument()
  });
});
