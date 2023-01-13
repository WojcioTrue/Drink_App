import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";

const CoctailsFavourite = () => {
  return (
    <section className="coctails-favourite">
      <h3>Favourite drinks:</h3>
      <ul>
        <FavouriteListElement />
      </ul>
    </section>
  );
};

export default CoctailsFavourite;
