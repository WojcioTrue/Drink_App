import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/Drink_info.css";

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
  console.log(drink);
  return (
    <>
      {drink ? (
        <div className="drink-info">
          <div className="drink-info__img">
            <img
              alt="#"
              src="https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg"
            />
          </div>
          <div className="drink-info__description">
            <h3>{drink.strDrink}</h3>
            <ul>
            <label>List of ingredients:</label>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <h3>Preparation: {drink.strInstructions}</h3>
            <h3>Type of glass: {drink.strGlass}</h3>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default DrinkInfo;
