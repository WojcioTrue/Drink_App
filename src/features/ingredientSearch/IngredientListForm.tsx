import { useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import { disableButton, enableButton } from "./ingredientsButtonsSlice";
import {
  removeIngredientField,
  changeSelectedField,
  changeSearchParams,
} from "./ingredientsDataSlice";
import {
  fetchIngrediendsData,
  fetchDrinksByIngredient,
} from "./ingredientsDataSlice";
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";

const IngredientList = () => {
  const { data } = useAppSelector(
    (state) => state.ingredientsData
  );

  const dispatch = useAppDispatch();

  // list of all ingredients
  useEffect(() => {
    dispatch(fetchDrinksByIngredient(data.searchParams));
  }, [data.searchParams, dispatch]);

  // list of drinks by ingredient
  useEffect(() => {
    dispatch(changeSearchParams());
  }, [dispatch, data.selectedIngredients, data.searchParams]);

  useEffect(() => {
    dispatch(fetchIngrediendsData());
  }, [dispatch]);

  useEffect(() => {
    if (data.drinkList.length === 0) {
      dispatch(disableButton());
    } else {
      dispatch(enableButton());
    }
  }, [data.drinkList, dispatch]);

  const removeIngredient = (id:string) => {
    dispatch(removeIngredientField(id));
  };

  const changeSelected = (id:string, value:string) => {
    dispatch(changeSelectedField({ id, value }));
  };

  return (
    <ul>
      {data.selectedIngredients.map((listElement, index) => (
        <IngredientListElement
          key={index}
          listNumber={index}
          listElement={listElement}
          removeIngredient={removeIngredient}
          changeSelected={changeSelected}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
