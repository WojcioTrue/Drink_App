import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory, initFavourite}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData} initFavourite={initFavourite}/>
      </div>
      <FavList />
    </div>
  );
};

export default CoctailsContainer;
