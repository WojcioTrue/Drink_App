import "./styles/coctails_container.css";
import CoctailsFavourite from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData}/>
      </div>
      <CoctailsFavourite />
    </div>
  );
};

export default CoctailsContainer;
