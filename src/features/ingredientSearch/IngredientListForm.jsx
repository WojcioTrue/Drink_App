import { useState, useEffect } from "react";
import IngredientListElement from "./IngredientListElement";

const IngredientList = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [onList, setOnList] = useState([]);
  
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        
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
      <IngredientListElement ingredientList={ingredientList}/>
      <button>Add ingredient</button>
    </ul>
    
  );
};

export default IngredientList;
