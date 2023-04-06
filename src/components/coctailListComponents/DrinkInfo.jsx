import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "../../styles/Drink_info.css";
import AddRemButton from "../../sharedComponents/AddRemButton";
import { motion } from "framer-motion";
import { drinkInfo } from "../../framerStyles/variants";
import LoadingScreen from "../../sharedComponents/LoadingScreen";
import { useSelector } from "react-redux";

const DrinkInfo = () => {
  const listOfFavourite = useSelector(state => state.favouriteList)
  const [drink, setDrink] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [isFavourite, setIsFavourite] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();


  // check if element is on favourite list
  useEffect(() => {
    const onList = listOfFavourite.some((element) => element.idDrink === id);
    setIsFavourite(onList);
    
  }, [listOfFavourite, id]);
  // fetching drink data with id passed from useParams hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      try {
        const response = await data.json();
        setDrink(response.drinks[0]);
      } catch (error) {
        console.log(
          "Probably can't find drink with this id, check your id and try again.",
          error
        );
        setNotFound(true);
      }
    };
    fetchData();
  }, [id]);

  // creating array with ingredients
  useEffect(() => {
    function checkIngredients() {
      let i = 1;
      const listOfIngredients = [];
      while (drink[`strIngredient${i}`] !== null) {
        listOfIngredients.push(drink[`strIngredient${i}`]);
        i++;
      }
      setIngredients(listOfIngredients);
    }
    // initiate looking for ingredients if drink exist
    if (drink !== undefined) {
      checkIngredients();
    }
  }, [drink]);

  return notFound ? (
    <Navigate to="/error" />
  ) : (
    <>
      {drink ? (
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
            <img alt="#" src={drink.strDrinkThumb} />
          </motion.div>
          <div className="drink-info__description">
            <motion.span
            variants={drinkInfo}
            initial="hidden"
            animate="show"
            custom={1}>
              <h2>{drink.strDrink}</h2>
              <p className="favouriteButton">
                <AddRemButton
                  name={drink.strDrink}
                  id={id}
                  img={drink.strDrinkThumb}
                  className="drink-info__addbutton"
                />
                {isFavourite ? "Remove from favourite" : "Add to favourite"}
              </p>
            </motion.span>

            <motion.ul
            variants={drinkInfo}
            initial="hidden"
            animate="show"
            custom={2}>
              <h3>List of ingredients:</h3>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>- {ingredient}</li>
              ))}
            </motion.ul>
            <motion.span
            variants={drinkInfo}
            initial="hidden"
            animate="show"
            custom={3}>
              <h3>Preparation:</h3>
              <p className="paragraph-margin">{drink.strInstructions}</p>
            </motion.span>
            <motion.span
            variants={drinkInfo}
            initial="hidden"
            animate="show"
            custom={4}>
              <h3>Type of glass:</h3>
              <p className="paragraph-margin">{drink.strGlass}</p>
            </motion.span>
          </div>
        </motion.div>
      ) : (
        <LoadingScreen/>
      )}
    </>
  );
};

export default DrinkInfo;
