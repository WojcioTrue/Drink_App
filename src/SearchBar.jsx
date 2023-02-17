import "./styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMartiniGlassCitrus} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import SearchBarSuggestions from "./SearchBarSuggestions";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchDrink, setSearchDrink] = useState("");
  const [drinkList, setDrinkList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
      );

      const data = await response.json();

      await setDrinkList(data);
    };

    fetchData();
  }, [searchDrink]);

  const drinkToSearch = (e) => {
    setSearchDrink(e.target.value);
  };

  return (
    <div className="search-bar">
      <Link to="/">
      <h2>
        
        <FontAwesomeIcon
          icon={faMartiniGlassCitrus}
          className="search-bar__logo"
        />
        FindMyDrink.
      </h2>
      </Link>
      <span className="search-bar__input">
        <input
          autoComplete="off"
          type="text"
          value={searchDrink}
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search for drink"
          onChange={drinkToSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        {Boolean(searchDrink.length) && 
          <SearchBarSuggestions drinkList={drinkList} />
        }
      </span>
    </div>
  );
};

export default Searchbar;
