import "./styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <h2>
        <FontAwesomeIcon
          icon={faMartiniGlassCitrus}
          className="search-bar__logo"
        />
        FindMyDrink.
      </h2>
      <span className="search-bar__input">
        <input
          type="text"
          // value=""
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </span>
    </div>
  );
};

export default Searchbar;
