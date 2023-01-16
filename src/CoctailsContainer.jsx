import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory, addToFav}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData} addToFav={addToFav}/>
      </div>
      <FavList />
    </div>
  );
};

export default CoctailsContainer;
