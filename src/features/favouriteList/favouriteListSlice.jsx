import { createSlice } from "@reduxjs/toolkit";

// getting localstore for favourite Drinks
const initialState = 
  localStorage.getItem("favouriteList") !== null
  ? JSON.parse(localStorage.getItem("favouriteList"))
  : [];

console.log(initialState);

const localFavouriteList = (favouriteElement) => localStorage.setItem("favouriteList", JSON.stringify(favouriteElement))

const favouriteListSlice = createSlice({
    name: "favouriteList",
    initialState,
    reducers:{
      addToFavourite: (state,action) => {
        localFavouriteList([...state, action.payload])
        return state = [ action.payload, ...state];
      },
      removeFromFavourite: (state, action) => {      
        localFavouriteList(state.filter(element => element.idDrink !== action.payload.idDrink));
        return state = state.filter(element => element.idDrink !== action.payload.idDrink)
      }
    }
})

export const { addToFavourite, removeFromFavourite } = favouriteListSlice.actions

export default favouriteListSlice.reducer