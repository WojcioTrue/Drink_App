import "../styles/button.css";
import { motion } from "framer-motion";

const Button = ({ children, variant, animationVariant }) => {
  return (
    <motion.button
      variants={animationVariant}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="tap"
      className={`rounded-button ${variant}`}
    >
      {children}
    </motion.button>
  );
};

Button.defaultProps = {
  text: "Button",
};

export default Button;
