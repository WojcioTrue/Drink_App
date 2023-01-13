import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import "./styles/coctail_list.css"

const CoctailList = () => {
  return (
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
  )
}

export default CoctailList