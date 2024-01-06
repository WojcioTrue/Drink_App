import { createSlice } from "@reduxjs/toolkit";

const displayIngredients = {
  display: false,
  disableButtonTest: { toDisable: false},
};

// reducers linked to buttons interactions
const ingredientsButtonsSlice = createSlice({
  name: "ingredientsButtons",
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

      };
    },
    enableButton(state, action) {
      state.disableButtonTest = {
        toDisable: false,

      };
    },
  },
});

export const { displayElement, hideElement, disableButton, enableButton } = ingredientsButtonsSlice.actions;

export default ingredientsButtonsSlice.reducer;
