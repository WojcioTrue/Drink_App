import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavListFullScreen from "./FavListFullScreen";
import { renderWithProviders } from "../../utils/test-utils";
import { setupStore } from "../../app/store";
import { addToFavourite } from "./favouriteListSlice";
import "react-intersection-observer/test-utils";
import { arrOfFavourite } from "./FavListFullScreenData";

describe("Tests for 'FavListFullScreen' component with no drinks on list", () => {
  test("should return nofavouriteDrinks img", () => {
    renderWithProviders(<FavListFullScreen />);

    const bottleImg = screen.getByRole("img");
    expect(bottleImg.getAttribute("src")).toBe("./img/fav_icon.png");
  });

  test("should return 'Your list is empty!' header", () => {
    renderWithProviders(<FavListFullScreen />);

    const header = screen.getByText(/Your list is empty!/i);
    expect(header).toBeInTheDocument();
  });
  test("Add something to your favourite list.' paragraph", () => {
    renderWithProviders(<FavListFullScreen />);

    const addSomethingParagraph = screen.getByText(/Add something to your favourite list./i);
    expect(addSomethingParagraph).toBeInTheDocument();
  });
  test("Should return 'Drink responsibly!' paragraph", () => {
    renderWithProviders(<FavListFullScreen />);

    const responsinilityText = screen.getByText(/Drink responsibly!/i);
    expect(responsinilityText).toBeInTheDocument();
  });
});

describe("tests for 'FavListFullScreen' component with A1 drink", () => {
  test("should return 'A1 drink' heading", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );
    renderWithProviders(<FavListFullScreen />, { store });
    const drinkName = screen.getByRole("heading", { name: /A1/i });
    expect(drinkName).toBeInTheDocument();

  });

  test("should return 'A1 drink' thumbnail", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );
    renderWithProviders(<FavListFullScreen />, { store });
    const drinkImg: HTMLImageElement = screen.getByRole("img", { name: "A1" });
    expect(drinkImg.alt).toEqual("A1");
    expect(drinkImg).toBeInTheDocument();
  });

  test("should return 'Details' button", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );
    renderWithProviders(<FavListFullScreen />, { store });
    const drinkImg: HTMLButtonElement = screen.getByRole("button", { name: "Details" });
    expect(drinkImg).toBeInTheDocument();
  });
});





describe("Displaying many drinks from mocked data", () => {

  test("should render list of favourite drinks with data from 'arrOfFavourite' and check names and images", () => {
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
      const drinkImg: HTMLImageElement = screen.getByRole("img", { name: element.strDrink });

      expect(drinkImg.alt).toEqual(element.strDrink);
      expect(drinkImg.src).toEqual(element.strDrinkThumb);
      expect(drinkImg).toBeInTheDocument();
    }
  });
})
describe('tests for adding and removing drinks from list', () => {
  test("should add 'Allegheny' drink to favouriteList", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "11021",
        "Allegheny",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );

    renderWithProviders(<FavListFullScreen />, { store });
    // render drink
    const drinkName = screen.getByText(/allegheny/i);
    expect(drinkName).toBeInTheDocument();

  });

  test("should add 'A1' drink and remove it after clicking button", () => {
    const store = setupStore();

    store.dispatch(
      addToFavourite(
        "17222",
        "A1",
        "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
      )
    );

    renderWithProviders(<FavListFullScreen />, { store });
    // render drink
    const drinkName = screen.getByText(/a1/i);
    expect(drinkName).toBeInTheDocument();

    // fire event to remove from favourite
    const button = screen.getByTitle("removeFavourite");
    fireEvent.click(button);

    // drink should disappear
    expect(drinkName).not.toBeInTheDocument();

    const noDrinkHeader = screen.getByText(/Your list is empty!/i);
    expect(noDrinkHeader).toBeInTheDocument();
  });
});
