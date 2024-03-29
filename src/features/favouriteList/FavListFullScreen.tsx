import "../../styles/coctail_list.css";
import CoctailListElement from "../../components/coctailListComponents/CoctailListElement";
import Message from "../../sharedComponents/Message";
import { AnimatePresence } from "framer-motion";
import { noFavouriteDrinks } from "../../framerStyles/variants";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/storeHooks";

const FavListFullScreen = () => {
  const listOfFavourite = useAppSelector((state) => state.favouriteList);
  // check if CoctailListElement is inside favourite_list component,
  // if so return true
  const location = useLocation();
  const inFavourite = location.pathname === "/favourite_list";
  return (
    <div className="list-coctails">
      {listOfFavourite.length > 0 ? (
        <>
          <h3>Favourite drinks:</h3>
          <div className="grid-coctails">
            <AnimatePresence>
              {listOfFavourite.map((element) => {
                return (
                  <CoctailListElement
                    key={element.idDrink}
                    id={element.idDrink}
                    name={element.strDrink}
                    imgSrc={element.strDrinkThumb}
                    useLayout={inFavourite}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <Message
          animationVariant={noFavouriteDrinks}
          header={"Your list is empty!"}
          text={"Add something to your favourite list."}
          secondText={"Drink responsibly!"}
          img={process.env.PUBLIC_URL + "./img/fav_icon.png"}
          imgAltText="Empty list image"
        />
      )}
    </div>
  );
};

export default FavListFullScreen;
