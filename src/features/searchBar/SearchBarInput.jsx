import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import SearchBarSuggestions from "./SearchBarSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { searchDrinks } from "./searchBarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBarInput = () => {
  const [searchDrink, setSearchDrink] = useState("");
  const dispatch = useDispatch();
  const { searchDrinkData } = useSelector((state) => state.searchBar);
  // const searchInput = useRef(false)
  const [searchInputFocus, setSearchInputFocus] = useState(true);
  
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

  // set searchInputFocus to true if we focusing on input, remove focus when clicked outside the input
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

  useEffect(() => {
    dispatch(searchDrinks(searchDrink));
  }, [dispatch, searchDrink]);

  // event listener for changed input value
  const drinkToSearch = (e) => {
    setSearchDrink(e.target.value);
  };
  // Clear search input button
  function clearSearch() {
    setSearchDrink("");
  }

  return (
    <>
      <span className="search-bar__textbox">
        <input
          autoComplete="off"
          type="text"
          value={searchDrink}
          id="SearchDrink"
          name="SearchDrink"
          title="searchDrink"
          placeholder="Search for drink"
          onChange={drinkToSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon magnify" />
        {
          <FontAwesomeIcon
            icon={faXmark}
            className={
              Boolean(searchDrink.length)
                ? `icon x-mark x-mark--focus`
                : `icon x-mark `
            }
            onClick={clearSearch}
          />
        }
        {/* remove focus when you click outside searchbar, hide suggestions */}
        {searchInputFocus && Boolean(searchDrinkData) && (
          <SearchBarSuggestions
            drinkList={searchDrinkData}
            setSearchDrink={setSearchDrink}
            searchDrink={searchDrink}
          />
        )}
      </span>
    </>
  );
};

export default SearchBarInput;