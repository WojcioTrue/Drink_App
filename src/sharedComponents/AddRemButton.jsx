import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "../styles/add_rem_button.css";
import { useDispatch, useSelector } from 'react-redux'
import { addToFavourite, removeFromFavourite } from "../features/favouriteList/favouriteListSlice"
import { addNotification } from "../features/notificationList/notificationListSlice"
import { nanoid } from "@reduxjs/toolkit";

function AddRemButton({ name, id, img, className }) {
  const isOnFavourite = useSelector(state => state.favouriteList);
  const [inFavourite, setInFavourite] = useState(false);


  const dispatch = useDispatch();
  useEffect(() => {
    function isOnList() {
      return isOnFavourite.some((drink) => drink.idDrink === id);
    }
    setInFavourite(isOnList);
  }, [isOnFavourite, id]);

  return (
    <>
      {inFavourite ? (
        <FontAwesomeIcon
          icon={faMinusCircle}
          className={`add-favourite remove-color ${className}`}
          onClick={() => {
            dispatch(removeFromFavourite({idDrink: id}));
            dispatch(addNotification({id : nanoid(), isAdded:false}));
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={`add-favourite ${className}`}
          onClick={() => {
            dispatch(addToFavourite({idDrink: id, strDrink: name,  strDrinkThumb : img }))
            dispatch(addNotification({id : nanoid(), isAdded: true}));
          }}
        />
      )}
    </>
  );
}

export default AddRemButton;
