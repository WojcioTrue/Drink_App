import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationList from "./NotificationList";

function App() {
  return (
    <div className="main-container">
      <Searchbar />
      <CoctailsContainer />
      <FavButton />
      <NotificationList />
    </div>
  );
}

export default App;
