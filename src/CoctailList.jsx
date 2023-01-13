import "./styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";

const CoctailList = () => {
  return (
    <div className="list-coctails">
      <h3>List of coctails:</h3>
      <div className="grid-coctails">
        <CoctailElement />
      </div>
    </div>
  );
};

export default CoctailList;
