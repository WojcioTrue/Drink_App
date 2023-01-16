import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const CoctailElement = ({ drinkData }) => {
  return (
    <>
      {drinkData
        ? drinkData.drinks.map((element) => {
            return (
              <section key={element.idDrink} className="grid-coctails__product">
                <div>
                  <img alt="#" src={element.strDrinkThumb} />
                  <h4>{element.strDrink}</h4>
                  <p>Description of Coctail Description of Coctail Description of Coctail Description of Coctail Description of Coctail</p>
                  
                </div>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="add-favourite"
                  />
              </section>
            );
          })
        : "Loading"}
      {/*  */}
    </>
  );
};

export default CoctailElement;
