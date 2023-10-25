import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { hideElement } from "./findByIngredientsSlice";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import IngredientListForm from "./IngredientListForm";
import { useEffect, useState } from "react";

const IngredientPrompt = () => {
  const { display } = useSelector((state) => state.ingredientsData);
  const [disableButton, setDisableButton] = useState({ toDisable: true, drinks: 0 })

  const dispatch = useDispatch();
  const hidePrompt = () => {
    dispatch(hideElement());
  };

  const disableButtonData = (arg) => {
    setDisableButton(arg)
  }

  return (
    <>
      {display && (
        <div className="ingredient-prompt">
          <FontAwesomeIcon
            onClick={() => hidePrompt()}
            className="close-prompt"
            icon={faXmark}
          />
          <h3>Select ingredients: </h3>
          <IngredientListForm disableButtonData={disableButtonData}/>
          <Button 
          variant="ingredient-button" 
          animationVariant={coctailButton}
          isDisabled={disableButton.toDisable}
          >Show Drinks
          </Button>
        </div>
      )}
    </>
  );
};

export default IngredientPrompt;
