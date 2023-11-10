import { useState, useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import { disableButton, enableButton } from "./ingredientsButtonsSlice";
import {
  addIngredientField,
  removeIngredientField,
  changeSelectedField,
} from "./ingredientsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngrediendsData } from "./ingredientsDataSlice";

const IngredientList = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [onList, setOnList] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [byIngredientDrinkList, setByIngredientDrinkList] = useState([]);
  const { data, loading, error } = useSelector(
    (state) => state.ingredientsData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngrediendsData());
  }, [dispatch]);

  useEffect(() => {
    setOnList(data.selectedIngredients);
  }, [data.selectedIngredients]);

  useEffect(() => {
    const removeObj = data.ingredients.map((element) => element.strIngredient1);
    setIngredientList(removeObj);
  }, [data.ingredients]);

  useEffect(() => {
    if (byIngredientDrinkList.length === 0) {
      dispatch(disableButton());
    } else {
      dispatch(enableButton(byIngredientDrinkList.length));
    }
  }, [byIngredientDrinkList, dispatch]);

  const addIngredient = () => {
    dispatch(addIngredientField());
  };

  const removeIngredient = (id) => {
    dispatch(removeIngredientField(id));
  };

  const changeSelected = (id, value) => {
    dispatch(changeSelectedField({id, value}))
  };

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
