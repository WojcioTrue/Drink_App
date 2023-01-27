import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import CoctailFull from "./CoctailFullScreen";
import { useState, useEffect } from "react";

function App() {
  const [drinkData, setDdrinkData] = useState();
  const [category, setCategory] = useState("Vodka");
  const [listOfFav, setListOfFav] = useState([]);
  const [addedTrigger, setAddedTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );

      const response = await data.json();
      await setDdrinkData(response);
    };
    fetchData();
  }, [category]);

  const getCategory = (id) => setCategory(id);

  const addToFav = (argument) => {
    setAddedTrigger(true);
    const elementExist = listOfFav.some(
      (element) => element.id === argument.id
    );
    if (elementExist) {
      console.log("element się powtarza");
    } else {
      setListOfFav([argument, ...listOfFav]);
    }
  };

  const removeFav = (id) => {
    const filteredList = listOfFav.filter((element) => element.id !== id);
    setListOfFav(filteredList);
  };

  // useEffect for notification prompt
  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedTrigger(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [addedTrigger]);

  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer
          drinkData={drinkData}
          getCategory={getCategory}
          addToFav={addToFav}
          listOfFav={listOfFav}
          removeFav={removeFav}
        />
        <FavButton />
        {addedTrigger && <NotificationPrompt />}
        <CoctailFull />
      </div>
    </>
  );
}

export default App;
