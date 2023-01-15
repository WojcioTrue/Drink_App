import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import CoctailFull from "./CoctailFullScreen";
import { useState, useEffect } from "react";

function App() {
  const [drinkArray, setDrinkArray] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
      );
  
      const response = await data.json();
      await setDrinkArray(response);
    };
    fetchData();
  },[]);
  
  

  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer />
        <FavButton />
        <NotificationPrompt />
        <CoctailFull />
      </div>
    </>
  );
}

export default App;
