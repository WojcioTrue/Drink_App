import "../../styles/search_bar.css";
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
import { mainView } from '../../framerStyles/variants'
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "./searchBarSlice";

const Searchbar = () => {
  const [searchDrink, setSearchDrink] = useState("");
  const [searchInputFocus, setSearchInputFocus] = useState(false);
  const dispatch = useDispatch();
  const { searchDrinkData, loading, error } = useSelector(state => state.searchBar)
  useEffect(() => {
    dispatch(getDrinks(searchDrink))
  }, [dispatch, searchDrink])


  // event listener for changed input value
  const drinkToSearch = (e) => {
    setSearchDrink(e.target.value);
  };
  // Clear search input button
  function clearSearch() {
    setSearchDrink("");
  }

  // check if element have focus
  const checkFocus = () => {
    const elementFocus = document.querySelector("#SearchDrink");
    const documentFocus = document.activeElement;
    if (elementFocus === documentFocus) {
      return true;
    } else {
      return false;
    }
  };

  // set searchInputFocus to true if we focused input, remove focus when clicked outside the input
  useEffect(() => {
    window.addEventListener("click", () => {
      setSearchInputFocus(checkFocus());
    });
    return () => {
      window.removeEventListener("click", () => {
        setSearchInputFocus(checkFocus());
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

        {/* remove focus when you click outside searchbar, hide suggestions */}
        {searchInputFocus && Boolean(searchDrinkData) && (
          <SearchBarSuggestions
            drinkList={searchDrinkData}
            setSearchDrink={setSearchDrink}
          />
        )}
      </span>
    </motion.div>
  );
};

export default Searchbar;
