import Button from "../../sharedComponents/Button";
import { coctailButton } from "../../framerStyles/variants";
import "../../styles/select_ingredient.css";
import { useDispatch } from "react-redux";
import { displayElement } from "./ingredientsButtonsSlice";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

const FindByIngredients = () => {
  const dispatch = useDispatch();

  const displayPrompt = () => {
    dispatch(displayElement());
  };

  return (
    <motion.div
      variants={mainView}
      custom={0.2}
      initial="hidden"
      animate="show"
      className="find-ingredient"
    >
      <Button
        buttonFunction={() => displayPrompt()}
        animationVariant={coctailButton}
        variant={"open-prompt"}
      >
        <FontAwesomeIcon icon={faLemon} />
        Find by ingredients
      </Button>
    </motion.div>
  );
};

export default FindByIngredients;
