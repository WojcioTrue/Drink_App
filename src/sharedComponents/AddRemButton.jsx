import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {useContext}  from "react";
import { MyContext } from "../context/ContextComponent";
import { useParams } from "react-router-dom";
import "../styles/AddRemButton.css"

function AddRemButton() {
    const [inFavourite, setInFavourite] = useState(false);
    const { addToFav, removeFav, listOfFav } = useContext(MyContext);
    const { id } = useParams();

    useEffect(() => {
        function isOnList() {
            return listOfFav.some((drink) => drink.id === id);
        }
        setInFavourite(isOnList);
    }, [listOfFav, id]);
    console.log(inFavourite);
    return (
        <>
            {inFavourite ? (
                <FontAwesomeIcon
                    icon={faMinusCircle}
                    className="add-favourite remove-color"
                    onClick={() => {
                        removeFav(id);
                    } } />
            ) : (
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="add-favourite"
                    onClick={() => {
                        addToFav({ id: id });
                    } } />
            )}
        </>
    );
}

export default AddRemButton;
