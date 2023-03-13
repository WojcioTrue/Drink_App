import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import { Link } from "react-router-dom";
import Button from "./sharedComponents/Button";
import { motion } from "framer-motion";
import { mainView } from "./framerStyles/variants";

const CoctailsFavourite = () => {
  const { listOfFav } = useContext(MyContext);

  const listOfFavourite = listOfFav.drinks;
  let afterSlice;
  const returnFavourite = ({ strDrink, idDrink }) => {
    return (
      <FavouriteListElement key={idDrink} strDrink={strDrink} id={idDrink} />
    );
  };

  const sliceFavourite = () => {
    if (listOfFavourite.length >= 4) {
      afterSlice = listOfFavourite.slice(0, 5).map(returnFavourite);
    } else {
      afterSlice = listOfFavourite.map(returnFavourite);
    }
  };
  sliceFavourite();

  return (
    <motion.section
      variants={mainView}
      custom={0.5}
      initial="hidden"
      animate="show"
      className="coctails-favourite"
    >
      <h3>
        {"Favourite drinks "}
        {listOfFavourite.length > 0 && `(${listOfFavourite.length})`}:
      </h3>
      <ul>{afterSlice}</ul>
      {listOfFavourite.length > 0 && (
        <Link to="/favourite_list">
          <Button variant="coctails-favourite__button">
            {"View all favourite drinks"}
          </Button>
        </Link>
      )}
    </motion.section>
  );
};

export default CoctailsFavourite;
