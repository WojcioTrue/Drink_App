import "./styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Searchbar = () => {
  const [searchDrink, setSearchDrink] = useState("");

  const findByName = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
    );

    const data = await response.json();

    console.log(data);
  };

  const drinkToSearch = (e) => {
    findByName();
    setSearchDrink(e.target.value);
  };

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
          value={searchDrink}
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search"
          onChange={drinkToSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </span>
    </div>
  );
};

export default Searchbar;
