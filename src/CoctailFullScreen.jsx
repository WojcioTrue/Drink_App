import "./styles/coctail_fullscreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const CoctailFull = () => {
  return (
    <div className="coctail-full">
      <div className="relative-wrapper">
        <div className="coctail-full__container">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="coctail-full__close"
          />
          <FontAwesomeIcon icon={faCirclePlus} className="add-favourite" />
          <img alt="#" src={"./img/category.jpg"} />
          <div className="coctail-full__text">
            <h4>Name of Coctail</h4>
            <p>Description of Coctail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoctailFull;
