import "./styles/main_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import CoctailFull from "./CoctailFull";

function App() {
  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer />
        <FavButton />
        <NotificationPrompt />
        <CoctailFull />
      </div>
    </>
  );
}

export default App;
