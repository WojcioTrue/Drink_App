import "../styles/coctails_container.css";
// import FavList from "./favouriteListComponents/FavList";
import CategoryList from "./categoryComponents/CategoryList";
import FavouriteListRedux from "../features/favouriteList/FavouriteListRedux";
const CoctailsContainer = () => {
  
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoryList />
      </div>
      {/* <FavList /> */}
      <FavouriteListRedux/>
    </div>
  );
};

export default CoctailsContainer;
