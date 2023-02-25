import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/ContextComponent";
import "../styles/AddRemButton.css";

function AddRemButton({ name, id }) {
  const [inFavourite, setInFavourite] = useState(false);
  const { addToFav, removeFav, listOfFav } = useContext(MyContext);

  useEffect(() => {
    function isOnList() {
      return listOfFav.some((drink) => drink.id === id);
    }
    setInFavourite(isOnList);
  }, [listOfFav, id]);

  return (
    <>
      {inFavourite ? (
        <FontAwesomeIcon
          icon={faMinusCircle}
          className="add-favourite remove-color"
          onClick={() => {
            removeFav(id);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="add-favourite"
          onClick={() => {
            addToFav({ name: name, id: id });
          }}
        />
      )}
    </>
  );
}

export default AddRemButton;
