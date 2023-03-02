import { useContext } from "react";
import "./styles/coctail_list.css";
import { MyContext } from "./context/ContextComponent";
import CoctailListElement from "./CoctailListElement";
import Message from "./Message";

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
        <Message 
        header={"Your list is empty!"} 
        text={"Add something to your favourite list."}
        secondText={"Drink responsibly!"}
        img={"./img/fav_icon.png"}
        />
      )}
    </div>
  );
};



export default FavListFullScreen;
