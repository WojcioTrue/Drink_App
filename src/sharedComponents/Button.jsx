import "../styles/button.css";
import { motion } from "framer-motion";

const Button = ({ children, variant, animationVariant, buttonFunction }) => {
  return (
    <motion.button
      variants={animationVariant}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="tap"
      className={`rounded-button ${variant}`}
      onClick={buttonFunction}
    >
      {children}
    </motion.button>
  );
};

Button.defaultProps = {
  children: "Button",
};

export default Button;
