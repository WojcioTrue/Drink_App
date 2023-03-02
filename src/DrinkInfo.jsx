import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles/Drink_info.css";
import AddRemButton from "./sharedComponents/AddRemButton";
import { MyContext } from "./context/ContextComponent";

const DrinkInfo = () => {
  const [drink, setDrink] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [isFavourite, setIsFavourite] = useState(true);
  const { id } = useParams();
  const { listOfFav } = useContext(MyContext);

  // check if element is on favourite list
  useEffect(() => {
    const onList = listOfFav.drinks.some(element => element.idDrink === id);
    setIsFavourite(onList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfFav]);
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
        console.log("Probably can't find drink with this id, check your id and try again.",error );
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
            <AddRemButton
                name={drink.strDrink}
                id={id}
                img={drink.strDrinkThumb}
                className="drink-info__addbutton"
              />
              {isFavourite ? "Remove from favourite" : "Add to favourite"}
              
            </p>
            <ul>
              <h3>List of ingredients:</h3>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>- {ingredient}</li>
              ))}
            </ul>
            <h3>Preparation:</h3>
            <p className="paragraph-margin">{drink.strInstructions}</p>
            <h3>Type of glass:</h3>
            <p className="paragraph-margin">{drink.strGlass}</p>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default DrinkInfo;
