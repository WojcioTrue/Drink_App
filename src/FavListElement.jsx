import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";

const FavouriteListElement = ({ name, id }) => {

  const { removeFav } = useContext(MyContext);
  
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
