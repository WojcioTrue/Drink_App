import "./styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";

const CoctailList = ({ drinkData, addToFav, removeFav }) => {
  return (
    <div className="list-coctails">
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        {/* <CoctailListElement drinkData={drinkData} addToFav={addToFav}/> */}

        <>
          {drinkData
            ? drinkData.drinks.map((element) => (
                <CoctailElement
                  key={element.idDrink}
                  id={element.idDrink}
                  name={element.strDrink}
                  imgSrc={element.strDrinkThumb}
                  addToFav={addToFav}
                  removeFav={removeFav}
                />
              ))
            : "Loading"}
          {/*  */}
        </>
      </div>
    </div>
  );
};

export default CoctailList;
