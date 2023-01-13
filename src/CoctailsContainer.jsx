import "./styles/coctails_container.css";
import "./styles/coctails_favourite.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CoctailsFavourite from "./CoctailsFavourite";
import CategoriesList from "./CategoriesList";

const CoctailsContainer = () => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <CategoriesList />
        <div className="list-coctails">
          <h3>List of coctails:</h3>
          <div className="grid-coctails">
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <FontAwesomeIcon icon={faPlusCircle} className="add-favourite"/>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <FontAwesomeIcon icon={faPlusCircle} className="add-favourite"/>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <FontAwesomeIcon icon={faPlusCircle} className="add-favourite"/>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <FontAwesomeIcon icon={faPlusCircle} className="add-favourite"/>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CoctailsFavourite />
    </div>
  );
};

export default CoctailsContainer;
