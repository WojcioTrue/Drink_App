import { useEffect } from "react";
import IngredientListElement from "./IngredientListElement";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import { disableButton, enableButton } from "./ingredientsButtonsSlice";
import {
  addIngredientField,
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

    useEffect(() => {
      dispatch(fetchDrinksByIngredient(data.searchParams))
    }, [data.searchParams, dispatch])

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

  const addIngredient = () => {
    dispatch(addIngredientField());
  };

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

      {data.selectedIngredients.length >= 4 ? (
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
