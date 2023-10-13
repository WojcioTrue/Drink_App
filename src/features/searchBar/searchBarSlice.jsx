import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchDrinks = createAsyncThunk(
  "searchBar/searchDrinks",
  async (drinkName = "") => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );
    if (drinkName.length > 0) {
      return response.data;
    }
  }
);

const initialState = {
  searchDrinkData: [],
  loading: "idle",
  error: null,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchDrinks.pending, (state, action) => {
        if(state.loading === 'idle'){
            state.loading = 'pending'
        }
    })
    builder.addCase(searchDrinks.fulfilled, (state, action) => {
        if(state.loading === 'pending'){
            state.searchDrinkData = action.payload
            state.loading = 'idle'
        }
    });
  },
});

export default searchBarSlice.reducer;
