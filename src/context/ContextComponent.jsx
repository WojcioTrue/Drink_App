import { useState, useEffect, createContext } from "react";

export const MyContext = createContext();

//initialization of local storage
const checkLocal = () => {
  const localFavList = JSON.parse(localStorage.getItem("fav-list"));
  // set default empty array [] if local storage don't have items
  if (localFavList === null) {
    return [];
  } else {
    return localFavList;
  }
};
const ContextComponent = ({ children }) => {
  const [drinkData, setDdrinkData] = useState();
  const [category, setCategory] = useState("Vodka");
  const [listOfFav, setListOfFav] = useState(checkLocal);
  const [addedTrigger, setAddedTrigger] = useState(false);
  // fetch data with category variables (default "Vodka")
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );

      const response = await data.json();
      await setDdrinkData(response);
    };
    fetchData();
  }, [category]);

  console.log(listOfFav);
  // get category from CategoryListElement
  const getCategory = (id) => setCategory(id);

  //local storage for favourite list
  useEffect(() => {
    localStorage.setItem("fav-list", JSON.stringify(listOfFav));
  }, [listOfFav]);

  // display prompt and add drink to favourite
  const addToFav = (argument) => {
    setAddedTrigger(true);
    const elementExist = listOfFav.some(
      (element) => element.id === argument.id
    );
    if (elementExist) {
      console.log("element się powtarza");
    } else {
      setListOfFav([argument, ...listOfFav]);
    }
  };
  // remove element with the same id using filter method
  const removeFav = (id) => {
    const filteredList = listOfFav.filter((element) => element.id !== id);
    setListOfFav(filteredList);
  };
  // useEffect for notification prompt
  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedTrigger(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [addedTrigger]);

  return (
    <MyContext.Provider
      value={{
        addedTrigger,
        drinkData,
        addToFav,
        removeFav,
        getCategory,
        listOfFav,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextComponent;
