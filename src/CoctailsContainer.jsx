import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory, addToFav, listOfFav}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData} addToFav={addToFav}/>
      </div>
      <FavList listOfFav={listOfFav}/>
    </div>
  );
};

export default CoctailsContainer;
