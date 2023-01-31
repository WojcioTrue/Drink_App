import "./styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { MyContext } from "./context/ContextComponent";
import { useContext } from "react";

const CoctailList = () => {
  const {drinkData} = useContext(MyContext);

  return (
    <div className="list-coctails">
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        {drinkData
          ? drinkData.drinks.map((element) => (
              <CoctailElement
                key={element.idDrink}
                id={element.idDrink}
                name={element.strDrink}
                imgSrc={element.strDrinkThumb}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default CoctailList;
