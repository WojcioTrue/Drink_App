import { useState, useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import { nanoid } from "@reduxjs/toolkit";

const IngredientList = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [onList, setOnList] = useState([{ id: nanoid(), value: "" }]);

  const addIngredient = () => {
    setOnList([...onList, { id: nanoid(), value: "" }]);
  };

  const removeIngredient = (id) => {
    setOnList(onList.filter((ingredient) => ingredient.id !== id));
  };

  const changeSelected = (id, value) => {
    setOnList(onList.map((listElement) => listElement.id === id ? {id : id, value : value} : listElement))
  }


  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );

        const data = await response.json();
        const removeObj = data.drinks.map((element) => element.strIngredient1)
        setIngredientList(removeObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredients();
  }, []);

  return (
    <ul>
      {onList.map((listElement, index) => (
        <IngredientListElement
          key={index}
          ingredientList={ingredientList}
          listNumber={index}
          listElement={listElement}
          onList={onList}
          removeIngredient={removeIngredient}
          changeSelected={changeSelected}
        />
      ))}

      <button onClick={() => addIngredient()}>Add ingredient</button>
    </ul>
  );
};

export default IngredientList;
