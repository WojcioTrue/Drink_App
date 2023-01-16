import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const CoctailElement = ({ drinkData, initFavourite }) => {
  return (
    <>
      {drinkData
        ? drinkData.drinks.map((element) => {
            return (
              <section key={element.idDrink} className="grid-coctails__product">
                <div>
                  <img alt="#" src={element.strDrinkThumb} />
                  <h4>{element.strDrink}</h4>
                  <p>Description of Coctail</p>
                  
                </div>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="add-favourite"
                    onClick={() => initFavourite(`${element.strDrink} ${element.idDrink}`)}
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
