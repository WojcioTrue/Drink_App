import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const FavListIcons = () => {
  const listOfFavourite = useSelector((state) => state.favouriteList);

  return (
    <ul className="fav__heart__list">
      <AnimatePresence mode="wait">
        {listOfFavourite.length === 0 && (
          <motion.li
            key="0"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <FontAwesomeIcon
              className="broken-heart"
              icon={faHeartBroken}
              beatFade
            ></FontAwesomeIcon>
          </motion.li>
        )}
        {listOfFavourite.length === 1 && (
          <motion.li
            key="1"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <FontAwesomeIcon
              className="whole-heart-1"
              icon={faHeart}
              beatFade
            ></FontAwesomeIcon>
          </motion.li>
        )}
        {listOfFavourite.length === 2 && (
          <motion.li
            key="2"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <FontAwesomeIcon
              className="whole-heart-2"
              icon={faHeart}
              beatFade
            ></FontAwesomeIcon>
          </motion.li>
        )}
        {listOfFavourite.length === 3 && (
          <motion.li
            key="3"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <FontAwesomeIcon
              className="whole-heart-3"
              icon={faHeart}
              beatFade
            ></FontAwesomeIcon>
          </motion.li>
        )}
        {listOfFavourite.length === 4 && (
          <motion.li
            key="4"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <FontAwesomeIcon
              className="whole-heart-4"
              icon={faHeart}
              beatFade
            ></FontAwesomeIcon>
          </motion.li>
        )}
        {listOfFavourite.length >= 5 && (
          <motion.li
            key="5"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
          >
            <span className="double-heart">
              <FontAwesomeIcon
                className="whole-heart-5"
                icon={faHeart}
                beatFade
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="whole-heart-5 second"
                icon={faHeart}
                beatFade
              ></FontAwesomeIcon>
            </span>
          </motion.li>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default FavListIcons;
