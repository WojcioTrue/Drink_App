import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  data: [],
  loading: "idle",
  error: null,
}

const ingredientsDataSlice = createSlice({
    name: 'ingrediendsData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIngrediendsData.pending, (state) => {
          state.loading = "pending";
          state.error = null;
        });
        builder.addCase(fetchIngrediendsData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = "idle";
          state.error = null;
        });
        builder.addCase(fetchIngrediendsData.rejected, (state, action) => {
          state.loading = "idle";
          state.error = "Error occured";
        });
      },
  });
  
  export default ingredientsDataSlice.reducer;