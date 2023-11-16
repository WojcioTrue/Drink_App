import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AddRemButton from "../../sharedComponents/AddRemButton";

const FavouriteListElement = ({ strDrink, id }) => {
  return (
    <motion.li 
    whileHover={{
      scale: 1.05,
      transition: {duration: 0.01}
    }}
    initial={{ opacity: 0, x: -10 }} 
    animate={{ opacity: 1, x: 0 }}>
      <Link to={`/drink/${id}`}>
        <h4>{strDrink}</h4>
      </Link>

      <AddRemButton name={strDrink} id={id} className="remove-favourite" />
    </motion.li>
  );
};

export default FavouriteListElement;
