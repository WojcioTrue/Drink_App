import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const findByIngredients = createAsyncThunk(
  "ingredientSearch/findByIngredients",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      const data = await response.json();
      const removeObj = data.drinks.map((element) => element.strIngredient1);
      return removeObj;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const displayIngredients = {
  display: false,
  disableButtonTest: { toDisable: false, drinks: 0 },
};

const initialIngredientsData = {
  data: [],
  loading: "idle",
  error: null,
}

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

const ingredientsData = createSlice({
  name: 'ingredientData',
  initialState: initialIngredientsData,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findByIngredients.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(findByIngredients.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(findByIngredients.rejected, (state, action) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
  },
});

export const { displayElement, hideElement, disableButton, enableButton } = ingredientsButtonsSlice.actions;

export default ingredientsButtonsSlice.reducer;
