import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CoctailListElement from "../../components/coctailListComponents/CoctailListElement";
import Message from "../../sharedComponents/Message";
import { noFavouriteDrinks } from "../../framerStyles/variants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDrinksByIngredient } from "./ingredientsDataSlice";

const DrinksByIngredients = () => {
  const { data } = useSelector(
    (state) => state.ingredientsData
  );
  const { display } = useSelector((state) => state.ingredientsButtons);
  const [drinksToDisplay, setDrinksToDisplay] = useState([]);
  const ingredientsParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    let inputString = ingredientsParams.id.replace(/&/g, ",");
    if (inputString !== data.searchParams) {
      dispatch(fetchDrinksByIngredient(inputString));
    }
  }, [dispatch, data.searchParams, ingredientsParams.id]);

  useEffect(() => {
    if (!display && data.drinkList.length > 0) {
      setDrinksToDisplay(data.drinkList);
    }
  }, [data.drinkList, display]);

  return (
    <>
      {drinksToDisplay.length > 0 ? (
        <>
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
    </>
  );
};

export default DrinksByIngredients;
