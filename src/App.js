import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import CoctailFull from "./CoctailFullScreen";
import { useState, useEffect } from "react";

function App() {
  const [drinkData, setDdrinkData] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
      );
  
      const response = await data.json();
      await setDdrinkData(response);
    };
    fetchData();
  },[]);
  
  

  return (
    <>
      <div className="main-container">
        <Searchbar />
        <CoctailsContainer drinkData={drinkData}/>
        <FavButton />
        <NotificationPrompt />
        <CoctailFull />
      </div>
    </>
  );
}

export default App;
