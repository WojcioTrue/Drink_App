import FavouriteListElement from "./FavListElement";
import "../../styles/fav_list.css";
import { Link } from "react-router-dom";
import Button from "../../sharedComponents/Button";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { favouriteButton } from "../../framerStyles/variants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const FavouriteList = () => {
  const listOfFavourite = useSelector((state) => state.favouriteList);
  const [afterSliceList, setAfterSliceList] = useState([]);

  const returnFavourite = ({ strDrink, idDrink }) => {
    return (
      <FavouriteListElement key={idDrink} strDrink={strDrink} id={idDrink} />
    );
  };

  useEffect(() => {
    if (listOfFavourite.length >= 4) {
      setAfterSliceList(listOfFavourite.slice(0, 5).map(returnFavourite));
    } else {
      setAfterSliceList(listOfFavourite.map(returnFavourite));
    }
  }, [listOfFavourite]);

  return (
    <>
      <motion.section
        variants={mainView}
        custom={0.5}
        initial="hidden"
        animate="show"
        className="coctails-favourite"
      >
        <div className="coctails__counter">
          <div className="coctails__counter__left">1</div>
          <div className="coctails__counter__right">
            <p>Favourite Drinks</p>
            <p>Number of drinks: {`${listOfFavourite.length}`}</p>
          </div>
        </div>
        <ul>{afterSliceList}</ul>
        {listOfFavourite.length > 0 && (
          <Link to="/favourite_list">
            <Button
              animationVariant={favouriteButton}
              variant="coctails-favourite__button"
            >
              {"View all favourite drinks"}
            </Button>
          </Link>
        )}
      </motion.section>
    </>
  );
};

export default FavouriteList;
