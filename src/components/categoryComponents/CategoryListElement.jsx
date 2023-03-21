import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/categories_list.css";
import { useContext } from "react";
import { MyContext } from "../../context/ContextComponent";
import { motion } from 'framer-motion';
import { categoryGestures } from '../../framerStyles/variants'



const CategoryListElement = ({ imgSrc, text }) => {
  const location = useLocation();
  const { getCategory } = useContext(MyContext);
  useEffect(() => {
      location.state && getCategory(location.state.category);
  }, [location, getCategory]);

  return (
    <motion.li 
    variants={categoryGestures}
    whileTap="tap"
    whileHover="hover"
    value={text}>
      <img alt="#" src={imgSrc} />
      <p>{text}</p>
    </motion.li>
  );
};

export default CategoryListElement;
