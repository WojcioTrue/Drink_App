import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import { useState } from "react";
import "../../styles/select_ingredient.css";
import IngredientPrompt from "./IngredientPrompt";

const FindByIngredients = () => {
  const [displayIngredients, setdisplayIngredients] = useState(false);

  return (
    <div className="find-ingredient">
      <Button
        buttonFunction={() => setdisplayIngredients(true)}
        animationVariant={coctailButton}
      >
        Find by ingredients
      </Button>
      {displayIngredients && <IngredientPrompt/>}
    </div>
  );
};

export default FindByIngredients;
