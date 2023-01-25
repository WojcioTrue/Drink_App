import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const FavouriteListElement = ({ name, id, removeFav }) => {
  return (
    <li>
      <h4>{name}</h4>
      <FontAwesomeIcon
        onClick={() => removeFav(id)}
        icon={faMinusCircle}
        className="remove-favourite"
      />
    </li>
  );
};

export default FavouriteListElement;
