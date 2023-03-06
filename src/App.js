import "./styles/app_container.css";
import Searchbar from "./SearchBar";
import CoctailsContainer from "./CoctailsContainer";
import FavButton from "./FavButton";
import NotificationPrompt from "./NotificationPrompt";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";

function App() {

  const { alertList } = useContext(MyContext);
  console.log(alertList);

  return (
    <div className="main-container">
      <Searchbar />
      <CoctailsContainer />
      <FavButton />
      {/* <NotificationPrompt /> */}
      {alertList.map((element) => {
        if(element === 'added'){
          return <NotificationPrompt/>
        } else {
          return <NotificationPrompt/>
        }
      })}
    </div>
  );
}

export default App;
