import { useEffect, useState } from "react";
import SearchBarListElement from "./SearchBarListElement";

const SearchBarSuggestions = ({ drinkList }) => {
  const [listToMap, setListToMap] = useState();
  useEffect(() => {
    display();
  }, [drinkList]);

  async function display() {
    if (drinkList) {
      if (!drinkList.drinks) {
        console.log("nie ma takich drinków");
      } else {
        setListToMap(drinkList.drinks);
      }
    } else {
      console.log("loading");
    }
  }

  return (
    <div className="search-bar__suggestions">
      <ul>
        {listToMap && 
            listToMap.map((element) => <SearchBarListElement key={element.idDrink} name={element.strDrink}/>)
        }
      </ul>
    </div>
  );
};

export default SearchBarSuggestions;
