import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const CoctailElement = () => {
  return (
    <section className="grid-coctails__product">
          <div>
            <img alt="#" src="./img/category.jpg" />
            <h4>Name of Coctail</h4>
            <p>Description of Coctail</p>
            <FontAwesomeIcon icon={faPlusCircle} className="add-favourite" />
          </div>
        </section>
  )
}

export default CoctailElement