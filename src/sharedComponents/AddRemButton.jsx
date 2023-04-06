import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/ContextComponent";
import "../styles/add_rem_button.css";
import { useDispatch } from 'react-redux'
import { addToFavourite, removeFromFavourite } from "../features/favouriteList/favouriteListSlice"


function AddRemButton({ name, id, img, className }) {
  const [inFavourite, setInFavourite] = useState(false);
  const { addToFav, removeFav, listOfFav } = useContext(MyContext);

  const dispatch = useDispatch();
  useEffect(() => {
    function isOnList() {
      return listOfFav.drinks.some((drink) => drink.idDrink === id);
    }
    setInFavourite(isOnList);
  }, [listOfFav, id]);

  return (
    <>
      {inFavourite ? (
        <FontAwesomeIcon
          icon={faMinusCircle}
          className={`add-favourite remove-color ${className}`}
          onClick={() => {
            removeFav(id);
            dispatch(removeFromFavourite({idDrink: id}));
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={`add-favourite ${className}`}
          onClick={() => {
            addToFav({idDrink: id, strDrink: name,  strDrinkThumb : img });
            dispatch(addToFavourite({idDrink: id, strDrink: name,  strDrinkThumb : img }))
          }}
        />
      )}
    </>
  );
}

export default AddRemButton;
