import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import "../../styles/select_ingredient.css";
import { useDispatch } from "react-redux";
import { displayElement } from "./findByIngredientsSlice";


const FindByIngredients = () => {
  const dispatch = useDispatch()

  const displayPrompt = () => {
    dispatch(displayElement())
  }

  return (
    <div className="find-ingredient">
      <Button
        buttonFunction={() => displayPrompt()}
        animationVariant={coctailButton}
      >
        Find by ingredients
      </Button>
    </div>
  );
};

export default FindByIngredients;
