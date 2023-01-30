import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";

const CoctailsFavourite = ({ listOfFav, removeFav }) => {
  const listOfFavourite = listOfFav;

  let afterSlice;
  const sliceFavourite = () => {
    if (listOfFavourite.length >= 4) {
      afterSlice = listOfFavourite.slice(0, 4).map(({ name, id }) => {
        return (
          <FavouriteListElement
            key={id}
            name={name}
            removeFav={removeFav}
            id={id}
          />
        );
      });
    } else {
      afterSlice = listOfFavourite.map(({ name, id }) => {
        return (
          <FavouriteListElement
            key={id}
            name={name}
            removeFav={removeFav}
            id={id}
          />
        );
      });
    }
  };
  sliceFavourite();
  return (
    <section className="coctails-favourite">
      <h3>Favourite drinks {listOfFavourite.length > 0 && `(${listOfFavourite.length})`}:</h3>
      <ul>{afterSlice}</ul>    
      <h4>{listOfFavourite.length > 4 && `Check all favourite drinks`}</h4>
    </section>
  );
};

export default CoctailsFavourite;
