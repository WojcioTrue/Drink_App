import { createSlice } from "@reduxjs/toolkit";

const displayIngredients = {
  display: false,
  disableButtonTest: { toDisable: false, drinks: 0 },
};

const findByIngredientSlice = createSlice({
  name: "ingredientsData",
  initialState: displayIngredients,
  reducers: {
    displayElement(state) {
      state.display = true;
    },
    hideElement(state) {
      state.display = false;
    },
    disableButton(state) {
      state.disableButtonTest = {
        toDisable: true,
        drinks: 0,
      };
    },
    enableButton(state, action) {
      state.disableButtonTest = {
        toDisable: false,
        drinks: action.payload,
      };
    },
  },
});

export const { displayElement, hideElement, disableButton, enableButton } =
  findByIngredientSlice.actions;

export default findByIngredientSlice.reducer;
