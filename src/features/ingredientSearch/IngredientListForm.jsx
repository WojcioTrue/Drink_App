import { useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import { disableButton, enableButton } from "./ingredientsButtonsSlice";
import {
  removeIngredientField,
  changeSelectedField,
  changeSearchParams,
} from "./ingredientsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIngrediendsData,
  fetchDrinksByIngredient,
} from "./ingredientsDataSlice";

const IngredientList = () => {
  const { data, loading, error } = useSelector(
    (state) => state.ingredientsData
  );

  const dispatch = useDispatch();

  // list of all ingredients
    useEffect(() => {
      dispatch(fetchDrinksByIngredient(data.searchParams))
    }, [data.searchParams, dispatch])

  // list of drinks by ingredient
  useEffect(() => {
    dispatch(changeSearchParams(data.searchParams));
  }, [dispatch, data.selectedIngredients, data.searchParams]);

  useEffect(() => {
    dispatch(fetchIngrediendsData());
  }, [dispatch]);

  useEffect(() => {
    if (data.drinkList.length === 0) {
      dispatch(disableButton());
    } else {
      dispatch(enableButton(data.drinkList.length));
    }
  }, [data.drinkList, dispatch]);

  const removeIngredient = (id) => {
    dispatch(removeIngredientField(id));
  };

  const changeSelected = (id, value) => {
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
