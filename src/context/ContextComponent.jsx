import { useState, useEffect, createContext } from "react";

export const MyContext = createContext();

//initialization of local storage
const checkLocal = () => {
  const localFavList = JSON.parse(localStorage.getItem("fav-list"));
  // set default empty array [] if local storage don't have items

  if (localFavList === null) {
    return {};
  } else {
    return localFavList;
  }
};

// set category in sessionStorage, so for example: if we reload page
// with category whiskey, category won't be set to 'vodka' as default,
// like it previously did
const actualCategory = () => {
  const category = sessionStorage.getItem('category');
  if(category === null){
    return "Vodka";
  } else {
    return category;
  }
}

actualCategory();

const ContextComponent = ({ children }) => {
  const [drinkData, setDrinkData] = useState();
  const [category, setCategory] = useState(actualCategory);
  const [listOfFav, setListOfFav] = useState(checkLocal);
  const [alertList, setAlertList] = useState([]);

  // fetch data with category variables (default "Vodka")
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );

      const response = await data.json();
      await setDrinkData(response);
    };
    fetchData();
  }, [category]);

  // set category to local storage
  useEffect(() => {
    sessionStorage.setItem("category", category);
  }, [category]);

  // get category from CategoryListElement
  const getCategory = (id) => setCategory(id);

  //local storage for favourite list
  useEffect(() => {
    localStorage.setItem("fav-list", JSON.stringify(listOfFav));
  }, [listOfFav]);

  // display prompt and add drink to favourite
  const addToFav = (argument) => {
    setAlertList([...alertList,{id: Date.now(),isAdded:true}]);
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
    setAlertList([...alertList,{id: Date.now(),isAdded:false}]);
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
        getCategory,
        setAlertList,
        drinkData,
        listOfFav,
        alertList
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextComponent;
