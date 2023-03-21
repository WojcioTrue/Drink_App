import "../styles/coctails_container.css";
import FavList from "./favouritelistComponents/FavList";
import CategoryList from "./categoryComponents/CategoryList";

const CoctailsContainer = () => {
  
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList />
      </div>
      <FavList />
    </div>
  );
};

export default CoctailsContainer;
