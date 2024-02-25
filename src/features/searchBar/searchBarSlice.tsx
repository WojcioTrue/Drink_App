import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

type DrinkType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

type InitialStateType = {
  searchDrinkData: { drinks: DrinkType[] },
  loading: string,
  error: null | string,
}

const initialState: InitialStateType = {
  searchDrinkData: { drinks: [] },
  loading: "idle",
  error: null,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchDrinks.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(searchDrinks.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.searchDrinkData = action.payload
        state.loading = 'idle'
      }
    });
  },
});

export default searchBarSlice.reducer;
