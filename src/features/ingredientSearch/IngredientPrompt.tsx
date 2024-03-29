import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { hideElement } from "./ingredientsButtonsSlice";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import IngredientListForm from "./IngredientListForm";
import { addIngredientField, clearSelectedIngredients } from "./ingredientsDataSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ingredientPrompt } from "../../framerStyles/variants";
import IngredientCounter from "./IngredientCounter";
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";

const IngredientPrompt = () => {
  const { display, disableButtonTest } = useAppSelector(
    (state) => state.ingredientsButtons
  );
  const { data } = useAppSelector(
    (state) => state.ingredientsData
  );
  const [ingredientsLink, setIngredientsLink] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    let inputString = data.searchParams;
    setIngredientsLink(inputString.replace(/,/g, "&"));
  }, [data.searchParams]);

  const hidePrompt = () => {
    dispatch(clearSelectedIngredients());
    dispatch(hideElement());
  };

  const addIngredient = () => {
    dispatch(addIngredientField());
  };

  const displayByIngredient = () => {
    dispatch(clearSelectedIngredients());
    dispatch(hideElement());
  };

  return (
    <>
      {display && (
        <motion.div
          variants={ingredientPrompt}
          initial="hidden"
          animate="show"
          className="ingredient-prompt"
        >
          <FontAwesomeIcon
            onClick={() => {
              hidePrompt();
              }}
            className="close-prompt"
            data-testid="close-prompt-test"
            icon={faXmark}
          />
          <h3>Select ingredients: </h3>
          <IngredientListForm />
          <IngredientCounter />
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
          <Link to={`ingredients/${ingredientsLink}`}>
            <Button
              variant="ingredient-button"
              animationVariant={coctailButton}
              isDisabled={disableButtonTest.toDisable}
              buttonFunction={() => displayByIngredient()}
            >
              Display drinks
            </Button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default IngredientPrompt;
