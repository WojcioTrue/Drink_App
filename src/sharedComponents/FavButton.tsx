import "../styles/fav_button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../framerStyles/variants";
// import FavListIcons from "../features/favouriteList/FavListIcons";
import { useAppSelector } from "../app/storeHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavButton = () => {
  const listOfFavourite = useAppSelector((state) => state.favouriteList)


  return (
    <Link to="/favourite_list">
      <motion.div
        variants={mainView}
        custom={0.6}
        initial="hidden"
        animate="show"
        className="fav-button"
      >
        <motion.span
              key="1"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
            >
              <FontAwesomeIcon
                className="fav-button__icon"
                icon={faHeart}
                beatFade
              ></FontAwesomeIcon>
            </motion.span>
        <div className="fav-list__Counter">
        
            <p>{listOfFavourite.length}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default FavButton;
