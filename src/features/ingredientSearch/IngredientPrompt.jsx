import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { hideElement } from "./findByIngredientsSlice";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import IngredientListForm from "./IngredientListForm";
import { useEffect, useState } from "react";

const IngredientPrompt = () => {
  const { display, disableButtonTest } = useSelector((state) => state.ingredientsData);
  // const [disableButton, setDisableButton] = useState({ toDisable: true, drinks: 0 })

  const dispatch = useDispatch();
  const hidePrompt = () => {
    dispatch(hideElement());
  };

  // const disableButtonData = (arg) => {
  //   setDisableButton(arg)
  // }

  useEffect(() => {
    console.log(disableButtonTest)
  }, [])

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
          <IngredientListForm />
          <Button 
          variant="ingredient-button" 
          animationVariant={coctailButton}
          isDisabled={disableButtonTest.toDisable}
          >Display drinks
          </Button>
        </div>
      )}
    </>
  );
};

export default IngredientPrompt;
