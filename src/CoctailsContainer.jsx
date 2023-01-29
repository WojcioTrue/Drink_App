import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory, addToFav, listOfFav,removeFav}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData} addToFav={addToFav} removeFav={removeFav} listOfFav={listOfFav}/>
      </div>
      <FavList listOfFav={listOfFav} removeFav={removeFav}/>
    </div>
  );
};

export default CoctailsContainer;
