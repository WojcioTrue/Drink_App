import { useEffect, useState } from "react";
import SearchBarListElement from "./SearchBarListElement";
import { motion } from 'framer-motion'

const SearchBarSuggestions = ({ drinkList, setSearchDrink, searchDrink }) => {
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

  let searchBarContent;
  

  if(listToMap && searchDrink.length > 0){
    searchBarContent =  listToMap.slice(0,7).map((element) => (
      <SearchBarListElement
        key={element.idDrink}
        name={element.strDrink}
        img={element.strDrinkThumb}
        id={element.idDrink}
        setSearchDrink={setSearchDrink}
        noElement={true}
      />
     ))
  }

  if(!listToMap){
    searchBarContent =  <SearchBarListElement img={process.env.PUBLIC_URL + "/img/broken_glass.png"} name={"There is no such drink..."} noElement={false}/>
  }

  return (
    <div className="search-bar__suggestions">
      <motion.ul
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        {searchBarContent}
      </motion.ul>
    </div>
  );
};

export default SearchBarSuggestions;
