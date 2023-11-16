import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const FavListIcons = () => {
  const listOfFavourite = useSelector((state) => state.favouriteList);
  return (
    <>
      {listOfFavourite.length > 0 ? (
        <FontAwesomeIcon icon={faHeart} bounce size="3x" />
      ) : (
        <FontAwesomeIcon icon={faHeartBroken} size="lg" />
      )}
    </>
  );
};

export default FavListIcons;
