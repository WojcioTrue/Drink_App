import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Drink_info.css";
import AddRemButton from "../../sharedComponents/AddRemButton";
import { motion } from "framer-motion";
import { drinkInfo } from "../../framerStyles/variants";
import LoadingScreen from "../../sharedComponents/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getDrinkData } from "./drinkDataSlice";
import NotFound from "../../sharedComponents/NotFound";

const DrinkInfo = () => {
  const dispatch = useDispatch();
  const listOfFavourite = useSelector((state) => state.favouriteList);
  const { data, loading, error } = useSelector((state) => state.drinkData);
  const [ingredients, setIngredients] = useState([]);
  const [isFavourite, setIsFavourite] = useState(true);
  const { id } = useParams();

  // dispatch getDrinkData thunk
  useEffect(() => {
    dispatch(getDrinkData(id));
  }, [dispatch,id]);

  // check if drink is already on favourite list
  useEffect(() => {
    const onList = listOfFavourite.some((element) => element.idDrink === id);
    setIsFavourite(onList);
  }, [listOfFavourite, id]);

  // loop through ingredients of drink

  // initiate looping through ingredients when data is available
  useEffect(() => {
    function checkIngredients() {
      let i = 1;
      const listOfIngredients = [];
      while (data[`strIngredient${i}`] !== null) {
        listOfIngredients.push(data[`strIngredient${i}`]);
        i++;
      }
      setIngredients(listOfIngredients);
    }
    if (data.strDrink) {
      checkIngredients();
    }
  }, [data]);

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      {loading === "idle" && error === null && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="drink-info"
        >
          <motion.div
            variants={drinkInfo}
            initial="hidden"
            animate="show"
            custom={2}
            className="drink-info__img"
          >
            <img alt="#" src={data.strDrinkThumb} />
          </motion.div>

          <div className="drink-info__description">
            <motion.span
              variants={drinkInfo}
              initial="hidden"
              animate="show"
              custom={1}
            >
              <h2>{data.strDrink}</h2>
              <p className="favouriteButton">
                <AddRemButton
                  name={data.strDrink}
                  id={id}
                  img={data.strDrinkThumb}
                  className="drink-info__addbutton"
                  title={isFavourite ? "favourite" : "notFavourite"}
                />
                {isFavourite ? "Remove from favourite" : "Add to favourite"}
              </p>
            </motion.span>

            <motion.ul
              variants={drinkInfo}
              initial="hidden"
              animate="show"
              custom={2}
            >
              <h3>List of ingredients:</h3>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>- {ingredient}</li>
              ))}
            </motion.ul>
            <motion.span
              variants={drinkInfo}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <h3>Preparation:</h3>
              <p className="paragraph-margin">{data.strInstructions}</p>
            </motion.span>
            <motion.span
              variants={drinkInfo}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <h3>Type of glass:</h3>
              <p className="paragraph-margin">{data.strGlass}</p>
            </motion.span>
          </div>
        </motion.div>
      )}
      {error !== null && <NotFound />}
    </>
  );
};

export default DrinkInfo;
