import "./styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMartiniGlassCitrus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import SearchBarSuggestions from "./SearchBarSuggestions";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { mainView } from './framerStyles/variants'

const Searchbar = () => {
  const [searchDrink, setSearchDrink] = useState("");
  const [drinkList, setDrinkList] = useState();
  const [clickedOutside, setClickedOutside] = useState(false);

  // useEffect for searching drink by name
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

  // event listener for changed input value
  const drinkToSearch = (e) => {
    setSearchDrink(e.target.value);
  };
  // Clear search input
  function clearSearch() {
    setSearchDrink("");
  }

  // check if element have focus, if so display list
  const checkFocus = () => {
    const elementFocus = document.querySelector("#SearchDrink");
    const documentFocus = document.activeElement;
    if (elementFocus === documentFocus) {
      return true;
    } else {
      return false;
    }
  };

  // setClickedOutside to true if we focused input, remove focus when clicked outside the input, re
  useEffect(() => {
    window.addEventListener("click", () => {
      setClickedOutside(checkFocus());
    });
    return () => {
      window.removeEventListener("click", () => {
        setClickedOutside(checkFocus());
      });
    };
  }, []);

  return (
    <motion.div
      variants={mainView}
      custom={0.2}
      initial="hidden"
      animate="show"
      className="search-bar">
      <h2>
        <Link to="/" state={{ category: "Vodka" }}>
          <FontAwesomeIcon
            icon={faMartiniGlassCitrus}
            className="search-bar__logo"
          />
          FindMyDrink.
        </Link>
      </h2>

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
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon magnify" />
        { (
          <FontAwesomeIcon
            icon={faXmark}
            className={
              Boolean(searchDrink.length)
                ? `icon x-mark x-mark--focus`
                : `icon x-mark `
            }
            onClick={clearSearch}
          />
        )}

        {/* remove focus when list element is clicked, hide suggestions */}
        {clickedOutside && Boolean(searchDrink.length) && (
          <SearchBarSuggestions
            drinkList={drinkList}
            setSearchDrink={setSearchDrink}
          />
        )}
      </span>
    </motion.div>
  );
};

export default Searchbar;
