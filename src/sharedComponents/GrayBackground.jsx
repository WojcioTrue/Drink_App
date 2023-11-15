import "../styles/grayBackground.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { grayBackground } from "../framerStyles/variants";

const GrayBackground = () => {
  const { display } = useSelector((state) => state.ingredientsButtons);

  return (
    display && 
      <motion.div
      variants={grayBackground}
      initial="hidden"
      animate="show"
      className={"grayBackround"}
    >
    </motion.div>
    
  );
};

export default GrayBackground;
