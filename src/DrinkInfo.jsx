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

    if (drink !== undefined) {
      checkIngredients();
    }
  }, [drink]);

  return <>{drink ? 
  <>
  <h1>{drink.strDrink}</h1>
  {ingredients.map((ingredient) => <p key={ingredient}>{ingredient}</p>)}
  </>
   : "Loading"}</>;
};


export default DrinkInfo;
