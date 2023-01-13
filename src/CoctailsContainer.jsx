import "./styles/coctails_container.css";
import "./styles/coctails_favourite.css";
import CoctailsFavourite from "./CoctailsFavourite";
import CategoriesList from "./CategoriesList";
import CoctailList from "./CoctailList";

const CoctailsContainer = () => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoriesList />
        <CoctailList />
      </div>
      <CoctailsFavourite />
    </div>
  );
};

export default CoctailsContainer;
