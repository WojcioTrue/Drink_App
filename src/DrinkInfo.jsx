import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DrinkInfo = () => {
  const [drink, setDrink] = useState();
  const [ingredients, setIngredients] = useState();
  const { id } = useParams();

  // fetching drink data with id passed with useParams hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const response = await data.json();

      const responseDrinkrink = await response.drinks[0];

      setDrink(responseDrinkrink);
    };

    fetchData();
  }, []);

  // setIngredients array for drink
  useEffect(() => {
    if(drink === undefined){
      console.log("waiting for drink")
    } else {
      setIngredients(displayIngredient());
    }
  },[drink])

// Geting all available ingredients
 function displayIngredient() {
    let i = 1;
    const arrOfIngrgredient = [];
    while ( drink[`strIngredient${i}`] !== null) {
      let myIngredient = drink[`strIngredient${i}`];
      arrOfIngrgredient.push(myIngredient);
      i++;
    }
    return arrOfIngrgredient;
  }

  return (
    <>
      {drink ? (
        <div>
          <h4>Name of drink: {drink.strDrink}</h4>
          <h4>Type of glass: {drink.strGlass}</h4>
          <h4>{drink.strInstructions}</h4>
          {ingredients && ingredients.map(ing => <li>{ing}</li>)}
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default DrinkInfo;
