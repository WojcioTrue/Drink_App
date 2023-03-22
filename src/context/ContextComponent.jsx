import { useState, useEffect, createContext } from "react";
export const MyContext = createContext();

//get favourite Drinks from local storage
const checkLocal = () => {
  const localFavList = JSON.parse(localStorage.getItem("fav-list"));
  // set default empty object {drink: []} if local storage don't have items
  if (!localFavList) {
    return { drinks: [] };
  } else {
    return localFavList;
  }
};


const ContextComponent = ({ children }) => {
  const [drinkData, setDrinkData] = useState(false);
  const [listOfFav, setListOfFav] = useState(checkLocal);
  const [alertList, setAlertList] = useState([]);
  // false as default value, thanks to that we have 
  // error in API request and we dont display nothing
  const [categoryId, setCategoryId] = useState(false);
  // fetch data with category variables (default "Vodka")
  useEffect(() => {
    const checkCategory = () => {
      console.log(categoryId);
      // default value for main page, sets drinkData to 
      // Vodka category if path have nothing (undefined)
      if (categoryId === undefined) {
        return "Vodka";
      // checking if path have correct category
      } else if (
        categoryId === "Vodka" ||
        categoryId === "Whiskey" ||
        categoryId === "Bourbon" ||
        categoryId === "Gin" ||
        categoryId === "Tequila" ||
        categoryId === "Rum"
      ) {
        return categoryId;
      }
    };
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${checkCategory()}`
      );
      try {
        const response = await data.json();
        setDrinkData(response);
      } catch (error) {
        console.log("Cant find desired category", error);
      }
    };
    fetchData();
  }, [categoryId]);


  //local storage for favourite list
  useEffect(() => {
    localStorage.setItem("fav-list", JSON.stringify(listOfFav));
  }, [listOfFav]);

  // display prompt and add drink to favourite
  const addToFav = (argument) => {
    setAlertList([...alertList, { id: Date.now(), isAdded: true }]);
    const elementExist = listOfFav.drinks.some(
      (element) => element.idDrink === argument.idDrink
    );
    if (elementExist) {
      console.log("element się powtarza");
    } else {
      setListOfFav({ drinks: [argument, ...listOfFav.drinks] });
    }
  };
  // remove element with the same id using filter method
  const removeFav = (id) => {
    setAlertList([...alertList, { id: Date.now(), isAdded: false }]);
    const filteredList = listOfFav.drinks.filter(
      (element) => element.idDrink !== id
    );
    setListOfFav({ drinks: filteredList });
  };

  return (
    <MyContext.Provider
      value={{
        addToFav,
        removeFav,
        setDrinkData,
        setAlertList,
        setCategoryId,
        drinkData,
        listOfFav,
        alertList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextComponent;
