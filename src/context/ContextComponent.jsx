import { useState, useEffect, createContext } from "react";
export const MyContext = createContext();

const ContextComponent = ({ children }) => {
  const [drinkData, setDrinkData] = useState(false);
  // error in API request and we dont display nothing
  const [categoryId, setCategoryId] = useState(false);
  // fetch data with category variables (default "Vodka")
  useEffect(() => {
    const checkCategory = () => {
      // default value for main page, sets drinkData to 
      // Vodka category if path have nothing (undefined)
      if (categoryId === undefined) {
        return "Vodka";
      } else {
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


  return (
    <MyContext.Provider
      value={{
        setDrinkData,
        setCategoryId,
        drinkData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextComponent;
