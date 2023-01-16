import FavouriteListElement from "./FavListElement";
import "./styles/fav_list.css";

const CoctailsFavourite = ({listOfFav}) => {
  const listOfFavourite = listOfFav;
  return (
    <section className="coctails-favourite">
      <h3>Favourite drinks:</h3>
      <ul>
        {listOfFavourite.map(({name, id}) => {
          return <FavouriteListElement key={id} name={name}/>
        })}
      </ul>
    </section>
  );
};

export default CoctailsFavourite;
