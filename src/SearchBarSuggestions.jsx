import { useEffect, useState } from "react";
import SearchBarListElement from "./SearchBarListElement";

const SearchBarSuggestions = ({ drinkList, setSearchDrink }) => {
  const [listToMap, setListToMap] = useState();
  useEffect(() => {
    async function display() {
      if (drinkList) {
        if (!drinkList.drinks) {
          setListToMap(false);
        } else {
          setListToMap(drinkList.drinks);
        }
      } else {
        console.log("loading");
      }
    }
    display();
  }, [drinkList]);

  return (
    <div className="search-bar__suggestions">
      <ul>
        {listToMap ?
          listToMap.map((element) => (
            <SearchBarListElement
              key={element.idDrink}
              name={element.strDrink}
              img={element.strDrinkThumb}
              id={element.idDrink}
              setSearchDrink={setSearchDrink}
              noElement={true}
            />
          )) : <SearchBarListElement img={"./img/category_icons/face-sad-tear-solid.svg"} name={"There is no such drink..."} noElement={false}/>}
      </ul>
    </div>
  );
};

export default SearchBarSuggestions;
