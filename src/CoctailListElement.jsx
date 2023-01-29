import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const CoctailElement = ({
  id,
  name,
  imgSrc,
  addToFav,
  removeFav,
  listOfFav,
}) => {
  const [inFavourite, setInFavourite] = useState(false);

  const checkOnList = () => {
    return listOfFav.some((drink) => drink.id === id);
  };

  useEffect(() => {
    const isOnList = checkOnList();
    setInFavourite(isOnList);
  },[listOfFav]);

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
          onClick={() => {
            removeFav(id);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="add-favourite"
          onClick={() => {
            addToFav({ name: name, id: id });
          }}
        />
      )}
    </section>
  );
};

export default CoctailElement;
