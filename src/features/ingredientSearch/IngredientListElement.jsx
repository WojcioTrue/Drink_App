import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const IngredientListElement = ({
  ingredientList,
  listNumber,
  listElement,
  removeIngredient,
  changeSelected,
  onList,
}) => {
  const [removedDuplicates, setRemovedDuplicates] = useState([]);
  const id = listElement.id;

  useEffect(() => {
    let shallowCopy = [...ingredientList];
    for (let element of onList) {
      // make selected element visible on list
      if (element.value === listElement.value) {
        continue;
      } else {
        // remove duplicate of ingredient
        const index = shallowCopy.indexOf(element.value);
        shallowCopy.splice(index, 1);
      }
    }
    setRemovedDuplicates(shallowCopy);
  }, [onList, ingredientList, listElement]);

  return (
    <li>
      <label>Ingredient {listNumber + 1} : </label>
      <div>
        <select
          onChange={() => changeSelected(id, document.getElementById(id).value)}
          name={id}
          id={id}
          value={listElement.value}
        >
          <option value="">-- Please choose an option --</option>
          {removedDuplicates.map((element) => (
            <option key={nanoid()} value={element}>
              {element}
            </option>
          ))}
        </select>
        <div
          className="remove-ingredient"
          onClick={() => {
            removeIngredient(id);
          }}
        >
          <FontAwesomeIcon className="remove-ingredient--icon" icon={faTrash} />
        </div>
      </div>
    </li>
  );
};

export default IngredientListElement;
