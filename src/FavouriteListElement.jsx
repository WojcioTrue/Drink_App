import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const FavouriteListElement = () => {
  return (
    <li>
      <h4>favourite 1</h4>
      <FontAwesomeIcon icon={faMinusCircle} className="remove-favourite" />
    </li>
  );
};

export default FavouriteListElement;
