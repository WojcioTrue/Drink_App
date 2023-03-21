import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./sharedComponents/FavButton";
import NotificationList from "./NotificationList";
import { motion } from "framer-motion";

const appVariant = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.3
    } 
  }
};

function App() {
  return (
    <motion.div
      variants={appVariant}
      initial="hidden"
      animate="show"
      className="main-container"
    >
      <Searchbar />
      <CoctailsContainer />
      <FavButton />
      <NotificationList />
    </motion.div>
  );
}

export default App;
