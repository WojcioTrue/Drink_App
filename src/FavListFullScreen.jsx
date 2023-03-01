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
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        {favouriteList.length > 0 ? (
          favouriteList.map((element) => {
            return (
              <CoctailListElement
                key={element.idDrink}
                id={element.idDrink}
                name={element.strDrink}
                imgSrc={element.strDrinkThumb}
              />
            );
          })
        ) : (
          <h3>"Dodaj coś!"</h3>
        )}
      </div>
    </div>
  );
};

export default FavListFullScreen;
