import "./styles/app_container.css";
import Searchbar from "./components/searchBarComponents/SearchBar";
import CoctailsContainer from "./components/CoctailsContainer";
import FavButton from "./sharedComponents/FavButton";
import NotificationList from "./features/notificationList/NotificationList"
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
