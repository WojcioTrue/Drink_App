import { AnimatePresence } from "framer-motion";
import CoctailListElement from "../../components/coctailListComponents/CoctailListElement";
import Message from "../../sharedComponents/Message";
import { noFavouriteDrinks } from "../../framerStyles/variants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDrinksByIngredient } from "./ingredientsDataSlice";
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";


const DrinksByIngredients = () => {
  const { data } = useAppSelector(
    (state) => state.ingredientsData
  );
  const { display } = useAppSelector((state) => state.ingredientsButtons);
  const [drinksToDisplay, setDrinksToDisplay] = useState<GlobalDrinkType[]>([]);
  const ingredientsParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let inputString = ingredientsParams.id === undefined ? '' : ingredientsParams.id.replace(/&/g, ",");
    if (inputString !== "") {
      dispatch(fetchDrinksByIngredient(inputString));
    }
    // only need to rerender when id is changed
  }, [dispatch, ingredientsParams.id]);

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
          imgAltText="No drinking. No image :)"
        />
      )}
    </>
  );
};

export default DrinksByIngredients;
