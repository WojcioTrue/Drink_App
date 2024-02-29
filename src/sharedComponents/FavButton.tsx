import "../styles/fav_button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../framerStyles/variants";
// import FavListIcons from "../features/favouriteList/FavListIcons";
import { useAppSelector } from "../app/storeHooks";
import { useEffect } from "react";

const FavButton = () => {
  const listOfFavourite = useAppSelector((state) => state.favouriteList)

  useEffect(() => {
    console.log(listOfFavourite)
  }, [listOfFavourite])
  return (
    <Link to="/favourite_list">
      <motion.div
        variants={mainView}
        custom={0.6}
        initial="hidden"
        animate="show"
        className="fav-button"
      >
        
        <div className="favListCounter">
            <p>{listOfFavourite.length}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default FavButton;
