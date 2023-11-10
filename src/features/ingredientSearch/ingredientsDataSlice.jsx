import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const fetchIngrediendsData = createAsyncThunk(
    `categoryList/ingredientsData`,
    async ( _ ,{ rejectWithValue }) => {
      try {
        const response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
          );
          const data = await response.json();
          return data.drinks;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState = {
  data: {
    ingredients: [],
    selectedIngredients: [{ id: nanoid(), value: "" }]
  },
  loading: "idle",
  error: null,
}

const ingredientsDataSlice = createSlice({
    name: 'ingrediendsData',
    initialState,
    reducers: {
        addIngredientField(state) {
            state.data.selectedIngredients = [...state.data.selectedIngredients, { id: nanoid(), value: "" }]
          },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIngrediendsData.pending, (state) => {
          state.loading = "pending";
          state.error = null;
        });
        builder.addCase(fetchIngrediendsData.fulfilled, (state, action) => {
          state.data.ingredients = action.payload;
          state.loading = "idle";
          state.error = null;
        });
        builder.addCase(fetchIngrediendsData.rejected, (state, action) => {
          state.loading = "idle";
          state.error = "Error occured";
        });
      },
  });

  export const { addIngredientField } = ingredientsDataSlice.actions;
  
  export default ingredientsDataSlice.reducer;