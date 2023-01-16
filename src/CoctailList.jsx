import "./styles/coctail_list.css";
import CoctailListElement from "./CoctailListElement";

const CoctailList = ({drinkData, addToFav}) => {
  return (
    <div className="list-coctails">
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        <CoctailListElement drinkData={drinkData} addToFav={addToFav}/>
      </div>
    </div>
  );
};

export default CoctailList;
