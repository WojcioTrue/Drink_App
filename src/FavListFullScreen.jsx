import { useContext } from "react";
import "./styles/coctail_list.css";
import { MyContext } from "./context/ContextComponent";
import CoctailListElement from "./CoctailListElement";
import "./styles/fav_list_fullscreen.css";

const FavListFullScreen = () => {
  const { listOfFav } = useContext(MyContext);
  const favouriteList = listOfFav.drinks;

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
        <div className="empty-list">
          <span className="empty-list-img">
            <img alt="#" src="./img/fav_icon.png"></img>
          </span>
          <section>
            <h3>Your list is empty!</h3>
            <p>Add something to your favourite list.</p>
            <p>Drink responsibly!</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default FavListFullScreen;
