import { createSlice } from "@reduxjs/toolkit";

// getting localstore for favourite Drinks
const initialState = 
  localStorage.getItem("favouriteList") !== null
  ? JSON.parse(localStorage.getItem("favouriteList"))
  : [];

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
        const afterRemove = state.filter(element => element.idDrink !== action.payload.idDrink);
        localFavouriteList(afterRemove);
        return state = afterRemove;
      }
    }
})

export const { addToFavourite, removeFromFavourite } = favouriteListSlice.actions

export default favouriteListSlice.reducer