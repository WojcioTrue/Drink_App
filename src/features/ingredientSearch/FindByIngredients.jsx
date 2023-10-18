import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import { useState } from "react";
import '../../styles/select_ingredient.css'


const FindByIngredients = () => {
    const [displayIngredients, setdisplayIngredients] = useState(false)
  return (
    <div className="find-ingredient">
      <Button animationVariant={coctailButton}>Find by ingredients</Button>
    </div>
  );
};

export default FindByIngredients;
