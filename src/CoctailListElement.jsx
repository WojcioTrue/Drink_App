import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CoctailElement = ({ id, name, imgSrc, addToFav }) => {
  const [inFavourite, setInFavourite] = useState(false);
  return (
    <section className="grid-coctails__product">
      <div>
        <img alt="#" src={imgSrc} />
        <h4>{name}</h4>
        <p>Description of Coctail</p>
      </div>
      {inFavourite ? (
        <FontAwesomeIcon
          icon={faMinusCircle}
          className="add-favourite remove-color"
          onClick={() => setInFavourite((prev) => !prev)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="add-favourite"
          onClick={() =>
            addToFav(
              { name: name, id: id },
              setInFavourite((prev) => !prev)
            )
          }
        />
      )}
    </section>
  );
};

export default CoctailElement;
