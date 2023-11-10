import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import "../../styles/select_ingredient.css";
import { useDispatch } from "react-redux";
import { displayElement } from "./ingredientsButtonsSlice";


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
        variant={"open-prompt"}
      >
        Find by ingredients
      </Button>
    </div>
  );
};

export default FindByIngredients;
