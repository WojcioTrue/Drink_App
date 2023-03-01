import { useContext } from "react";
import "./styles/coctail_list.css";
import { MyContext } from "./context/ContextComponent";
import CoctailListElement from "./CoctailListElement";

const FavListFullScreen = () => {
  const { listOfFav } = useContext(MyContext);
  const favouriteList = listOfFav.drinks;

  console.log(favouriteList.length);
  return (
    <div className="list-coctails">
      
        {favouriteList.length > 0 ? (
          <>
          <h3>FavouriteDrinks:</h3>
          <div className="grid-coctails">
            {favouriteList.map((element) => {
            return (
              <CoctailListElement
                key={element.idDrink}
                id={element.idDrink}
                name={element.strDrink}
                imgSrc={element.strDrinkThumb}
              />
            );
          })}
          </div>
          </>
        ) : (
          <div>
            <h3>Your list is empty!</h3>
            <p>Add something to your favourite list. drink responsibly!</p>
          </div>
        )}
      </div>
  );
};

export default FavListFullScreen;
