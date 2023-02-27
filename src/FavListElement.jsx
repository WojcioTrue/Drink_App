import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import { Link } from "react-router-dom";
const FavouriteListElement = ({ strDrink, id }) => {
  const { removeFav } = useContext(MyContext);

  return (
    <li>
      <Link to={`${id}`}>
        <h4>{strDrink}</h4>
      </Link>

      <FontAwesomeIcon
        onClick={() => removeFav(id)}
        icon={faMinusCircle}
        className="remove-favourite"
      />
    </li>
  );
};

export default FavouriteListElement;
