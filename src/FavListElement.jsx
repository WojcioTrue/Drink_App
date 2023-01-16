import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const FavouriteListElement = ({element}) => {
  return (
    <li>
      <h4>{element}</h4>
      <FontAwesomeIcon icon={faMinusCircle} className="remove-favourite" />
    </li>
  );
};

export default FavouriteListElement;
