import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";


const IngredientListElement = ({ingredientList}) => {
    const [id, setId] = useState(() => nanoid())

  return (
    <li key={id}>
        <label>Ingredient : </label>
        <select onChange={() => alert(document.getElementById(id).value)} name={id} id={id}>
        {ingredientList.map((element) => 
          <option value={element.strIngredient1}>{element.strIngredient1}</option>
        )}
        </select>
      </li>
  )
}

export default IngredientListElement