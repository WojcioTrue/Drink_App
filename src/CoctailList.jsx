import "./styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";

const CoctailList = ({drinkData}) => {
  return (
    <div className="list-coctails">
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        <CoctailElement drinkData={drinkData}/>
      </div>
    </div>
  );
};

export default CoctailList;
