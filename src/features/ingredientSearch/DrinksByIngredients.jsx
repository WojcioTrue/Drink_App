import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CoctailListElement from "../../components/coctailListComponents/CoctailListElement";
import Message from "../../sharedComponents/Message";
import { noFavouriteDrinks } from "../../framerStyles/variants";
import { useEffect, useState } from "react";

const DrinksByIngredients = () => {
    const { data, loading, error } = useSelector((state) => state.ingredientsData)
    const [drinksToDisplay, setDrinksToDisplay]= useState([])
    // check if CoctailListElement is inside favourite_list component,
    // if so return true
    useEffect(() => {
      setDrinksToDisplay(data.drinksListToDisplay)
    },[data.drinksListToDisplay])

    return (
      <div className="list-coctails">
        {drinksToDisplay.length > 0 ? (
          <>
            <h3>Drinks by ingredients:</h3>
            <div className="grid-coctails">
              <AnimatePresence>
                {drinksToDisplay.map((element) => {
                  return (
                    <CoctailListElement
                      key={element.idDrink}
                      id={element.idDrink}
                      name={element.strDrink}
                      imgSrc={element.strDrinkThumb}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <Message
            animationVariant={noFavouriteDrinks}
            header={"There are no drinks with such ingredient's!"}
            text={"Change ingredients you chose."}
            secondText={"Drink responsibly!"}
            img={process.env.PUBLIC_URL + "../img/fav_icon.png"}
          />
        )}
      </div>
    );
  };


export default DrinksByIngredients