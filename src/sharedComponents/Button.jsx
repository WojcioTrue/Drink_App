import "../styles/button.css";
import { motion } from "framer-motion";

const Button = ({ children, variant }) => {
  return (
    <motion.button
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={`rounded-button ${variant}`}>
      {children}
    </motion.button>
  );
};

Button.defaultProps = {
  text: "Button",
};

export default Button;
