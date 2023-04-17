import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "../styles/add_rem_button.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../features/favouriteList/favouriteListSlice";
import { addNotification } from "../features/notificationList/notificationListSlice";
import { nanoid } from "@reduxjs/toolkit";

const localStorageFavouriteList = (type, state, element) => {
  switch (type) {
    case "add":
      localStorage.setItem(
        "favouriteList",
        JSON.stringify([...state, element])
      );
      break;
    case "remove":
      localStorage.setItem(
        "favouriteList",
        JSON.stringify(
          state.filter(
            (stateElement) => stateElement.idDrink !== element.idDrink
          )
        )
      );
      break;
    default:
      console.log("nie znam tego typu");
  }
};

function AddRemButton({ name, id, img, className }) {
  const isOnFavourite = useSelector((state) => state.favouriteList);
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
            dispatch(removeFromFavourite(id));
            dispatch(addNotification(false));
            localStorageFavouriteList("remove", isOnFavourite, {
              idDrink: id,
              strDrink: name,
              strDrinkThumb: img,
            });
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={`add-favourite ${className}`}
          onClick={() => {
            dispatch(
              addToFavourite(id,name,img)
            );
            dispatch(addNotification(true));
            localStorageFavouriteList("add", isOnFavourite, {
              idDrink: id,
              strDrink: name,
              strDrinkThumb: img,
            });
          }}
        />
      )}
    </>
  );
}

export default AddRemButton;
