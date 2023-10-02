import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDrinkData = createAsyncThunk(
    'drinkInfo/getDrinks',
    async( id ,{ rejectWithValue }) => {
          try {
            const data = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
              );
            const response = await data.json();
            return response.drinks[0];
          } catch (error) {
            console.log(
              "Probably can't find drink with this id, check your id and try again.",
              error
            );
    }}
)

const initialState = {
    data: [],
    loading: "idle",
    error: null,
  };

const drinkDataSlice = createSlice({
    name: 'drinkData',
    initialState,
    reducers: {},
    
})