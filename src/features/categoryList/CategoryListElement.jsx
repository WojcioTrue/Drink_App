import "../../styles/categories_list.css";
import { motion } from 'framer-motion';
import { categoryGestures } from '../../framerStyles/variants'



const CategoryListElement = ({ imgSrc, text }) => {

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
