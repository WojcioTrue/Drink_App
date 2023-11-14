import "./styles/app_container.css";
import Searchbar from "./features/searchBar/SearchBar";
import CoctailsContainer from "./components/CoctailsContainer";
import FavButton from "./sharedComponents/FavButton";
import NotificationList from "./features/notificationList/NotificationList";
import { motion } from "framer-motion";
import FindByIngredients from "./features/ingredientSearch/FindByIngredients";
import IngredientPrompt from "./features/ingredientSearch/IngredientPrompt";
import GrayBackground from "./sharedComponents/GrayBackground";
import { appVariant } from "./framerStyles/variants";


function App() {
  return (
    <>
      <GrayBackground />
      <motion.div
        variants={appVariant}
        initial="hidden"
        animate="show"
        className="main-container"
      >
        <Searchbar />
        <FindByIngredients />
        <IngredientPrompt />
        <CoctailsContainer />
        <FavButton />
        <NotificationList />
      </motion.div>
    </>
  );
}

export default App;
