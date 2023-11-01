import { useState, useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const IngredientList = ({ disableButtonData }) => {
  const [ingredientList, setIngredientList] = useState([]);
  const [onList, setOnList] = useState([{ id: nanoid(), value: "" }]);
  const [searchParams, setSearchParams] = useState("");
  const [byIngredientDrinkList, setByIngredientDrinkList] = useState([]);

  useEffect(() => {
    if (byIngredientDrinkList.length === 0) {
      disableButtonData({ toDisable: true, drinks: 0 });
    } else {
      disableButtonData({
        toDisable: false,
        drinks: byIngredientDrinkList.length,
      });
    }
  }, [byIngredientDrinkList]);

  const addIngredient = () => {
    setOnList([...onList, { id: nanoid(), value: "" }]);
  };

  const removeIngredient = (id) => {
    setOnList(onList.filter((ingredient) => ingredient.id !== id));
  };

  const changeSelected = (id, value) => {
    setOnList(
      onList.map((listElement) =>
        listElement.id === id ? { id: id, value: value } : listElement
      )
    );
  };

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );

        const data = await response.json();
        const removeObj = data.drinks.map((element) => element.strIngredient1);
        setIngredientList(removeObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredients();
  }, []);

  useEffect(() => {
    const arrOfIngredients = [];
    for (let element of onList) {
      if (element.value !== "") {
        const replaceWhiteSpace = element.value.replace(/\s+/g, "_");
        arrOfIngredients.push(replaceWhiteSpace);
      } else {
        continue;
      }
    }
    setSearchParams(arrOfIngredients.join(","));
  }, [onList]);

  useEffect(() => {
    let url = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";
    if (searchParams !== "") {
      url += searchParams;
    } else {
      setByIngredientDrinkList([]);
      return;
    }
    const fetchDrinks = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();
        if (data.drinks === "None Found") {
          setByIngredientDrinkList([]);
        } else {
          setByIngredientDrinkList(data.drinks);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDrinks();
  }, [searchParams]);

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

      {onList.length >= 4 ? (
        <Button variant={"add-ingredient"} isDisabled={true}>
          Add Ingredient
        </Button>
      ) : (
        <Button
          variant={"add-ingredient"}
          animationVariant={coctailButton}
          buttonFunction={() => addIngredient()}
        >
          Add Ingredient
        </Button>
        
      )}
    </ul>
  );
};

export default IngredientList;
