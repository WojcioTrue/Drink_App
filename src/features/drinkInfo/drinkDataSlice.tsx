import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


export const getDrinkData = createAsyncThunk(
  "drinkInfo/getDrinks",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const response = await data.json();
      return response.drinks[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState:InitialDrinkDataType = {
  data: {},
  loading: "idle",
  error: null,
};

const drinkDataSlice = createSlice({
  name: "drinkData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrinkData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getDrinkData.fulfilled, (state, action: PayloadAction<Record<string, string | null>>) => {
      state.data = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getDrinkData.rejected, (state) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
  },
});

export default drinkDataSlice.reducer;