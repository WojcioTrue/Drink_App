import "./styles/coctails_container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

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
                <i className="fa-solid fa-circle-plus add-favourite"></i>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <i className="fa-solid fa-circle-plus add-favourite"></i>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <i className="fa-solid fa-circle-plus add-favourite"></i>
              </div>
            </section>
            <section className="grid-coctails__product">
              <div>
                <img alt="#" src="./img/category.jpg" />
                <h4>Name of Coctail</h4>
                <p>Description of Coctail</p>
                <i className="fa-solid fa-circle-plus add-favourite"></i>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="coctails-favourite">
        <h3>Favourite drinks:</h3>
        <ul>
          <li>
            <h4>favourite 1</h4>
            <FontAwesomeIcon icon={faMinus} />
          </li>
          <li>
            <h4>favourite 2</h4>
            <FontAwesomeIcon icon={faMinus} />
          </li>
          <li>
            <h4>favourite 3</h4>
            <FontAwesomeIcon icon={faMinus} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CoctailsContainer;
