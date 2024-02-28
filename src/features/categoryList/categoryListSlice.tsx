import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getDrinks = createAsyncThunk(
  `categoryList/getDrinks`,
  async (category: string = "Vodka", { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );
      const data = await response.json();
      return data.drinks;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: InitialStateProps = {
  data: [],
  loading: "idle",
  error: null,
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrinks.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getDrinks.fulfilled, (state, action: PayloadAction<CategoryDrinkType[]>) => {
      state.data = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getDrinks.rejected, (state, action) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
  },
});

export default categoryListSlice.reducer;
