import FavouriteListElement from "./FavListElement";
import "../../styles/fav_list.css";
import { Link } from "react-router-dom";
import Button from "../../sharedComponents/Button";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { favouriteButton } from "../../framerStyles/variants";
import { ReactNode, useEffect, useState } from "react";
import FavListIcons from "./FavListIcons";
import { useAppSelector } from "../../app/storeHooks";

type FavouriteListElementProps = {
  strDrink: string;
  idDrink: string;
}

const FavouriteList = () => {
  const listOfFavourite = useAppSelector((state) => state.favouriteList);
  const [afterSliceList, setAfterSliceList] = useState<ReactNode[]>([]);

  const returnFavourite = ({ strDrink, idDrink }: FavouriteListElementProps) => {
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
          <div className="coctails__counter__left">
            <FavListIcons />
          </div>
          <div className="coctails__counter__right">
            <p>Favourite Drinks:</p>
            <p>{`${listOfFavourite.length}`}</p>
          </div>
        </div>
        <ul className="drink__list">{afterSliceList}</ul>
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
