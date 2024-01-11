import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const IngredientListElement = ({
  listNumber,
  listElement,
  removeIngredient,
  changeSelected,
  onList,
}) => {
  const [removedDuplicates, setRemovedDuplicates] = useState([]);
  const id = listElement.id;
  const { data } = useSelector((state) => state.ingredientsData);

  useEffect(() => {
    const onList = data.selectedIngredients;
    let shallowCopy = [...data.ingredients];
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
  }, [onList, listElement, data.selectedIngredients, data.ingredients]);

  return (
    <>
      <li>
        <label aria-label={`IngredientLabel${listNumber + 1}`}>{`Ingredient ${listNumber + 1} :`}</label>
        <div>
          <select
            onChange={() =>
              changeSelected(id, document.getElementById(id).value)
            }
            name={id}
            id={id}
            value={listElement.value}
            data-testid={`selectField${listNumber + 1}`}
          >
            <option value="default">-- Please choose an option --</option>
            {removedDuplicates.map((element) => (
              <option key={nanoid()} value={element}>
                {element}
              </option>
            ))}
          </select>
          (
          <div
            data-testid={`removeField${listNumber + 1}`}
            className={
              "remove-ingredient" + (data.selectedIngredients.length > 1 ?
               "" : " remove-ingredient--disabled")
            }
            onClick={() =>
              data.selectedIngredients.length > 1 ? removeIngredient(id) : null
            }
          >
            <FontAwesomeIcon
              className="remove-ingredient--icon"
              icon={faTrash}
            />
          </div>
          )
        </div>
      </li>
    </>
  );
};

export default IngredientListElement;
