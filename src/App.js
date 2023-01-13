import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import "./styles/main_container.css"

function App() {
  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer />
      </div>
    </>
  );
}

export default App;
