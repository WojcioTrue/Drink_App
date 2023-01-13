import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import "./styles/main_container.css";
import FavButton from './FavButton'
function App() {
  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer />
        <FavButton />
      </div>
    </>
  );
}

export default App;
