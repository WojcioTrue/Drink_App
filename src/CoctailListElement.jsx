import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import { Link } from "react-router-dom";
import Button from "./sharedComponents/Button";

const CoctailElement = ({ id, name, imgSrc }) => {
  const [inFavourite, setInFavourite] = useState(false);
  const { addToFav, removeFav, listOfFav } = useContext(MyContext);
  useEffect(() => {
    function isOnList() {
      return listOfFav.some((drink) => drink.id === id);
    }
    setInFavourite(isOnList);
  }, [listOfFav, id]);

  return (
    <section className="grid-coctails__product">
      <div>
        <img alt="#" src={imgSrc} />
        <h4>{name}</h4>
      </div>
      <Link to={`/${id}`}>
        <Button />
      </Link>
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
