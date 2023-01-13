import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const CoctailsFavourite = () => {
  return (
    <section className="coctails-favourite">
        <h3>Favourite drinks:</h3>
        <ul>
          <li>
            <h4>favourite 1</h4>
            <FontAwesomeIcon icon={faMinusCircle} className="remove-favourite"/>
          </li>
          <li>
            <h4>favourite 2</h4>
            <FontAwesomeIcon icon={faMinusCircle} className="remove-favourite"/>
          </li>
          <li>
            <h4>favourite 3</h4>
            <FontAwesomeIcon icon={faMinusCircle} className="remove-favourite"/>
          </li>
        </ul>
      </section>
  )
}

export default CoctailsFavourite