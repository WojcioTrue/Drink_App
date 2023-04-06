import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  
];

export const favouriteListSlice = createSlice({
    name: "favouriteList",
    initialState,
    reducers:{
      addToFavourite: (state,action) => {
        return state = [...state, action.payload]
      },
      removeFromFavourite: (state, action) => {        
        return state = state.filter(element => element.idDrink !== action.payload.idDrink)
      }
    }
})

export const { addToFavourite, removeFromFavourite } = favouriteListSlice.actions

export default favouriteListSlice.reducer