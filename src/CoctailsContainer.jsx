import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";

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
