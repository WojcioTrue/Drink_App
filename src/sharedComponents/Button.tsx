import "../styles/button.css";
import { Variants, motion } from "framer-motion";


type ButtonProps = {
  children: JSX.Element,
  variant: string,
  animationVariant: Variants,
  buttonFunction: () => void,
  isDisabled: boolean,
}

const Button : React.FC = ({ children, variant, animationVariant, buttonFunction, isDisabled }: ButtonProps) => {
  return (
    <motion.button
      variants={isDisabled ? undefined : animationVariant}
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
  variant: ""
};

export default Button;
