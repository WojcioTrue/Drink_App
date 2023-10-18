import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
};

const findByIngredientSlice = createSlice({
  name: "ingredientsData",
  initialState,
  reducers: {
    displayElement(state) {
      state.display = true;
    },
    hideElement(state) {
      state.display = false;
    },
  },
});

export const {displayElement, hideElement} = findByIngredientSlice.actions

export default findByIngredientSlice.reducer