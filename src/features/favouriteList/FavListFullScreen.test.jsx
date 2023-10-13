import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavListFullScreen from "./FavListFullScreen";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";
import { addToFavourite } from "./favouriteListSlice";
import "react-intersection-observer/test-utils";
import { arrOfFavourite } from "./FavListFullScreenData";

describe("tests for favourite list container full screen", () => {
  test("Basic header content test with empty list", () => {
    renderWithProviders(<FavListFullScreen />);

    const bottleImg = screen.getByRole("img");
    const header = screen.getByText(/Your list is empty!/i);
    const addText = screen.getByText(/Add something to your favourite list./i);
    const responsinilityText = screen.getByText(/Drink responsibly!/i);

    expect(bottleImg.getAttribute("src")).toBe("./img/fav_icon.png");
    expect(header).toBeInTheDocument();
    expect(addText).toBeInTheDocument();
    expect(responsinilityText).toBeInTheDocument();
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
    // addToFavourite(id,name,img)
    renderWithProviders(<FavListFullScreen />, { store });

    const drinkName = screen.getByRole("heading", { name: /A1/i });
    expect(drinkName).toBeInTheDocument();

    const drinkImg = screen.getByRole("img", { name: "A1" });
    expect(drinkImg.alt).toEqual("A1");
    expect(drinkImg).toBeInTheDocument();
  });

  test("should render list of favourite drinks with data from arrOfFavourite variable", () => {
    const store = setupStore();
    for (let i = 0; i < arrOfFavourite.length; i++) {
      const element = arrOfFavourite[i];
      store.dispatch(
        addToFavourite(element.idDrink, element.strDrink, element.strDrinkThumb)
      );
    }

    renderWithProviders(<FavListFullScreen />, { store });

    // loop through rendered favourite list

    for (let i = 0; i < arrOfFavourite.length; i++) {
      const element = arrOfFavourite[i];
      // drink name
      const drinkName = screen.getByRole("heading", { name: element.strDrink });
      expect(drinkName).toBeInTheDocument();

      //  drink thumbnail alt name and src
      const drinkImg = screen.getByRole("img", { name: element.strDrink });
      //
      expect(drinkImg.alt).toEqual(element.strDrink);
      expect(drinkImg.src).toEqual(element.strDrinkThumb);
      expect(drinkImg).toBeInTheDocument();
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
    // addToFavourite(id,name,img)
    renderWithProviders(<FavListFullScreen />, { store });
    // render drink
    const drinkName = screen.getByText(/a1/i)
    expect(drinkName).toBeInTheDocument()

    // fire event to remove from favourite
    const button = screen.getByTitle('removeFavourite')
    fireEvent.click(button)
    
    // drink should disappear
    expect(drinkName).not.toBeInTheDocument()
    
    const noDrinkHeader = screen.getByText(/Your list is empty!/i)
    expect(noDrinkHeader).toBeInTheDocument()
  });
});
