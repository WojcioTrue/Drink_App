import "./styles/coctails_container.css";
import CoctailsFavourite from "./FavList";
import CategoriesList from "./CategoriesList";
import CoctailList from "./CoctailList";

const CoctailsContainer = ({drinkData, getCategory}) => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoriesList getCategory={getCategory}/>
        <CoctailList drinkData={drinkData}/>
      </div>
      <CoctailsFavourite />
    </div>
  );
};

export default CoctailsContainer;
