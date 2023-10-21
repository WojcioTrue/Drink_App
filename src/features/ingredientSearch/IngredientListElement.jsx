import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "@reduxjs/toolkit";

const IngredientListElement = ({
  ingredientList,
  listNumber,
  listElement,
  removeIngredient,
  changeSelected,
}) => {
  const id = listElement.id;


  return (
    <li>
      <label>Ingredient {listNumber + 1} : </label>
      <select
        onChange={() => changeSelected(id, document.getElementById(id).value)}
        name={id}
        id={id}
        value={listElement.value}
      >
        {ingredientList.map((element) =>
          element.strIngredient1 === listElement.value ? (
            <option key={nanoid()} value={listElement.value} >
              {listElement.value}
            </option>
          ) : (
            <option key={nanoid()} value={element.strIngredient1}>
              {element.strIngredient1}
            </option>
          )
        )}
      </select>
      <FontAwesomeIcon
        onClick={() => {
          removeIngredient(id);
        }}
        icon={faXmark}
      />
    </li>
  );
};

export default IngredientListElement;
