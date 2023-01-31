import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import CoctailFull from "./CoctailFullScreen";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";

function App() {

  const { addedTrigger } = useContext(MyContext);
  
  return (
    <div className="main-container">
      <Searchbar />
      <CoctailsContainer />
      <FavButton />
      {addedTrigger && <NotificationPrompt />}
      <CoctailFull />
    </div>
  );
}

export default App;
