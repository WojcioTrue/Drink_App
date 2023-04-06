import "../styles/coctails_container.css";
// import FavList from "./favouriteListComponents/FavList";
import CategoryList from "./categoryComponents/CategoryList";
import FavouriteList from "../features/favouriteList/FavouriteList";
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
