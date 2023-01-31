import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";

const CoctailsFavourite = () => {

  const { listOfFav } = useContext(MyContext);

  let listOfFavourite = listOfFav;
  let afterSlice;
  const sliceFavourite = () => {
    if (listOfFavourite.length >= 4) {
      afterSlice = listOfFavourite.slice(0, 5).map(({ name, id }) => {
        return <FavouriteListElement key={id} name={name} id={id} />;
      });
    } else {
      afterSlice = listOfFavourite.map(({ name, id }) => {
        return <FavouriteListElement key={id} name={name} id={id} />;
      });
    }
  };
  sliceFavourite();
  
  return (
    <section className="coctails-favourite">
      <h3>
        Favourite drinks{" "}
        {listOfFavourite.length > 0 && `(${listOfFavourite.length})`}:
      </h3>
      <ul>{afterSlice}</ul>
      <h4>{listOfFavourite.length > 5 && `Check all favourite drinks`}</h4>
    </section>
  );
};

export default CoctailsFavourite;
