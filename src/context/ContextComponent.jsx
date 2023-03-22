import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
export const MyContext = createContext();

//get favourite Drinks from local storage
const checkLocal = () => {
  const localFavList = JSON.parse(localStorage.getItem("fav-list"));
  // set default empty object {drink: []} if local storage don't have items
  if (!localFavList) {
    return {drinks: []};
  } else {
    return localFavList;
  }
};

// set category in sessionStorage, so for example: if we reload page
// with category whiskey, category won't be set to 'vodka' as default,
// like it previously did
// const actualCategory = () => {
//   const category = sessionStorage.getItem('category');
//   console.log("wywołanie", category)
//   if(category === null){
//     return "Vodka";
//   } else {
//     return category;
//   }
// }


const ContextComponent = ({ children }) => {
  const [drinkData, setDrinkData] = useState(false);
  const [category, setCategory] = useState("vodka");
  const [listOfFav, setListOfFav] = useState(checkLocal);
  const [alertList, setAlertList] = useState([]);

    // get category from CategoryListElement
    const getCategory = (id) => {
      setCategory(id)
      console.log('redirect z category', id);
    };

  // fetch data with category variables (default "Vodka")
  useEffect(() => {
    if(category === 'redirect'){
      console.log("reditect z useEffect")
    }
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      )
      try {
      const response = await data.json();
      await setDrinkData(response);
      }
      catch(error) {
        console.log("Cant find desired category", error);
      }
      
    };
    fetchData();
  }, [category]);

  // set category to local storage
  // useEffect(() => {
  //   sessionStorage.setItem("category", category);
  // }, [category]);



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
