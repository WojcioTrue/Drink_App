import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/Drink_info.css";
import AddRemButton from "./sharedComponents/AddRemButton";

const DrinkInfo = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState();
  const [ingredients, setIngredients] = useState([]);

  // fetching drink data with id passed from useParams hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const response = await data.json();
      setDrink(response.drinks[0]);
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

  return (
    <>
      {drink ? (
        <div className="drink-info">
          <div className="drink-info__img">
            <img alt="#" src={drink.strDrinkThumb} />
          </div>
          <div className="drink-info__description">
            <h2>{drink.strDrink}</h2>
            <p className="favouriteButton">
              Add to favourite
              <AddRemButton
                name={drink.strDrink}
                id={id}
                className="drink-info__addbutton"
              />
            </p>
            <ul>
              <h3>List of ingredients:</h3>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>- {ingredient}</li>
              ))}
            </ul>
            <h3>Preparation:</h3>
            <p>{drink.strInstructions}</p>
            <h3>Type of glass:</h3>
            <p>{drink.strGlass}</p>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default DrinkInfo;
