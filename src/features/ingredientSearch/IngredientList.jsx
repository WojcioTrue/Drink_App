import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

const IngredientList = () => {
  const [ingredientList, setIngredientList] = useState([]);
    const [onList, setOnList] = useState([])

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIngredientList(data.drinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredients();
  }, []);

  return (
    <ul>
      {ingredientList.slice(0,7).map((element, index) => (
        <li key={nanoid()}>
            <label>Ingredient {index} </label> 
            {element.strIngredient1}</li>
      ))}
    </ul>
  );
};

export default IngredientList;
