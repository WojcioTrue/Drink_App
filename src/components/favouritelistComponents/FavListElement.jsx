import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../../context/ContextComponent";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const FavouriteListElement = ({ strDrink, id }) => {
  const { removeFav } = useContext(MyContext);

  return (
    <motion.li
      initial={{opacity: 0, x : -10}}
      animate={{opacity: 1, x : 0}}
    >
      <Link to={`${id}`}>
        <h4>{strDrink}</h4>
      </Link>

      <FontAwesomeIcon
        onClick={() => removeFav(id)}
        icon={faMinusCircle}
        className="remove-favourite"
      />
    </motion.li>
  );
};

export default FavouriteListElement;
