import "./styles/coctails_container.css";
import "./styles/coctails_favourite.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CoctailsFavourite from "./CoctailsFavourite";
const CoctailsContainer = () => {
  return (
    <div className="coctails-container">
      <div className="coctails-main">
        <div className="categories-list">
          <h3>Select category:</h3>
          <ul>
            <li>
              <img alt="#" src={"./img/category_icons/whiskey.png"} />
              <p>Whisky</p>
            </li>
            <li>
              <img alt="#" src="./img/category_icons/bourbon.png" />
              <p>Burbon</p>
            </li>
            <li>
              <img alt="#" src="./img/category_icons/vodka.png" />
              <p>Vodka</p>
              
            </li>
            <li>
              <img alt="#" src="./img/category_icons/gin.png" />
              <p>Gin</p>
            </li>
            <li>
              <img alt="#" src="./img/category_icons/Tequila.png" />
              <p>Tequila</p>
            </li>
            <li>
              <img alt="#" src="./img/category_icons/Rum.png" />
              <p>Rum</p>
            </li>
          </ul>
        </div>
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
