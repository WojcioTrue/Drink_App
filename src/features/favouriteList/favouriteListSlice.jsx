import { createSlice } from "@reduxjs/toolkit";

// getting localstore for favourite Drinks
const initialState =
  localStorage.getItem("favouriteList") !== null
    ? JSON.parse(localStorage.getItem("favouriteList"))
    : [];

const favouriteListSlice = createSlice({
  name: "favouriteList",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      return (state = [action.payload, ...state]);
    },
    removeFromFavourite: (state, action) => {
      return (state = state.filter(
        (element) => element.idDrink !== action.payload.idDrink
      ));
    },
  },
});

export const { addToFavourite, removeFromFavourite } =
  favouriteListSlice.actions;

export default favouriteListSlice.reducer;
