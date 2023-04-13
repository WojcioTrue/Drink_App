import "../styles/coctails_container.css";
// import FavList from "./favouriteListComponents/FavList";
import FavouriteList from "../features/favouriteList/FavouriteList";
import CategoryList from "../features/categoryList/CategoryList";
const CoctailsContainer = () => {
  
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList />
      </div>
      {/* <FavList /> */}
      <FavouriteList/>
    </div>
  );
};

export default CoctailsContainer;
