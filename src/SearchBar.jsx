import "./styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import SearchBarSuggestions from "./SearchBarSuggestions";
const Searchbar = () => {
  const [searchDrink, setSearchDrink] = useState("");
  const [drinkList, setDrinkList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
      );

      const data = await response.json();
      if (searchDrink.length > 0) {
        await setDrinkList(data);
      }
    };
    fetchData();
  }, [searchDrink]);

  const drinkToSearch = (e) => {
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
        <ul></ul>
      </h2>
      <span className="search-bar__input">
        <input
          autoComplete="off"
          type="text"
          value={searchDrink}
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search"
          onChange={drinkToSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <SearchBarSuggestions drinkList={drinkList} />
      </span>
    </div>
  );
};

export default Searchbar;
