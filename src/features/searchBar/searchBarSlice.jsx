import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getDrinks = createAsyncThunk('searchBar/getDrinks', async (drinkName = "") => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    return response.data
  })

const initialState = {
    searchDrinkData: [],
    loading: 'idle',
    error: null
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrinks.pending, (state, action) => {
        if(state.loading === 'idle'){
            state.loading = 'pending'
        }
    })
    builder.addCase(getDrinks.fulfilled, (state, action) => {
        if(state.loading === 'pending'){
            state.searchDrinkData = action.payload
            state.loading = 'idle'
        }
    })
    builder.addCase(getDrinks.rejected, (state, action) => {
        if(state.loading === 'pending'){
            state.loading = 'idle'
            state.error = 'Error occured'
        }
    })
  }
});

export default searchBarSlice.reducer;
