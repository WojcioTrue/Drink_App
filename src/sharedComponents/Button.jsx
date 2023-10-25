import "../styles/button.css";
import { motion } from "framer-motion";

const Button = ({ children, variant, animationVariant, buttonFunction, isDisabled }) => {
  return (
    <motion.button
      variants={isDisabled ? "" : animationVariant }
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="tap"
      className={`rounded-button ${variant}`}
      onClick={buttonFunction}
      disabled={isDisabled}
    >
      {children}
    </motion.button>
  );
};

Button.defaultProps = {
  children: "Button",
};

export default Button;
