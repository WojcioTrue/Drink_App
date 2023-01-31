import "./styles/coctails_container.css";
import FavList from "./FavList";
import CategoryList from "./CategoryList";
import CoctailList from "./CoctailList";

const CoctailsContainer = () => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList />
        <CoctailList />
      </div>
      <FavList />
    </div>
  );
};

export default CoctailsContainer;
