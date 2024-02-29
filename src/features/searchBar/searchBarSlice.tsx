import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const searchDrinks = createAsyncThunk(
  "searchBar/searchDrinks",
  async (drinkName: string = "") => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );
    if (drinkName.length > 0) {
      return response.data;
    }
  }
);

const initialState: SearchBarType = {
  searchDrinkData: { drinks: [] },
  loading: "idle",
  error: null,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchDrinks.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(searchDrinks.fulfilled, (state, action: PayloadAction<{ drinks: GlobalDrinkType[]; }>) => {
      state.searchDrinkData = action.payload
      state.loading = 'idle'
    }
    );
  },
});

export default searchBarSlice.reducer;
