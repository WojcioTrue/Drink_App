import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { hideElement } from "./findByIngredientsSlice";
import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import IngredientListForm from "./IngredientListForm";

const IngredientPrompt = () => {
  const { display, disableButtonTest } = useSelector((state) => state.ingredientsButtons);

  const dispatch = useDispatch();
  const hidePrompt = () => {
    dispatch(hideElement());
  };

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
