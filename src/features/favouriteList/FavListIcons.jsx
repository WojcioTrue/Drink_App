import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultHeart = (
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
);

const FavListIcons = () => {
  const listOfFavourite = useSelector((state) => state.favouriteList);
  const [heart, setHeart] = useState(defaultHeart);

  useEffect(() => {
    switch (listOfFavourite.length) {
      case 0:
        setHeart(
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
        );
        break;
      case 1:
        setHeart(
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
        );
        break;
      case 2:
        setHeart(
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
        );
        break;
      case 3:
        setHeart(
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
        );
        break;
      case 4:
        setHeart(
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
        );
        break;
      default:
        setHeart(
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
        );
        break;
    }
  }, [listOfFavourite.length]);

  return (
    <ul className="fav__heart__list">
      <AnimatePresence mode="wait">{heart}</AnimatePresence>
    </ul>
  );
};

export default FavListIcons;
