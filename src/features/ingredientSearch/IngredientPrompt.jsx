import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { hideElement } from "./findByIngredientsSlice";

const IngredientPrompt = () => {
  const { display } = useSelector((state) => state.ingredientsData);
  
  const dispatch = useDispatch()

  const hidePrompt = () => {
    dispatch(hideElement())
  }
  
  return (
    <>
      {display && (
        <div className="ingredient-prompt">
          <h3>Select ingredients: </h3>
          <FontAwesomeIcon onClick={() => hidePrompt()} className="close-prompt" icon={faXmark} />
        </div>
      )}
    </>
  );
};

export default IngredientPrompt;
