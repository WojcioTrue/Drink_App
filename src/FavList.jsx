import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import { Link } from "react-router-dom";

const CoctailsFavourite = () => {
  const { listOfFav } = useContext(MyContext);

  const listOfFavourite = listOfFav;
  let afterSlice;
  const returnFavourite = ({ name, id }) => {
    return <FavouriteListElement key={id} name={name} id={id} />;
  };

  const sliceFavourite = () => {
    if (listOfFavourite.length >= 4) {
      afterSlice = listOfFavourite.slice(0, 5).map(returnFavourite);
    } else {
      afterSlice = listOfFavourite.map(returnFavourite);
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
      {listOfFavourite.length > 5 && <button><Link to="/">Check all drinks</Link></button>}
    </section>
  );
};

export default CoctailsFavourite;
