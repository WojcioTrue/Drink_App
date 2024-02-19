import { createSlice } from "@reduxjs/toolkit";
// getting localstore for favourite Drinks

const getLocalStorage = localStorage.getItem("favouriteList")

const initialState = getLocalStorage ? JSON.parse(getLocalStorage)
  : [];

const favouriteListSlice = createSlice({
  name: "favouriteList",
  initialState,
  reducers: {
    addToFavourite: {
      reducer(state, action) {
        return (state = [action.payload, ...state]);
      },
      prepare(id, name, img) {
        return {
          payload: {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: img,
          },
        };
      },
    },
    removeFromFavourite: {
      reducer(state, action) {
        return (state = state.filter(
          (element) => element.idDrink !== action.payload.idDrink
        ));
      },
      prepare(id) {
        return {
          payload: {
            idDrink: id,
          },
        };
      },
    },
  },
});

export const { addToFavourite, removeFromFavourite } =
  favouriteListSlice.actions;

export default favouriteListSlice.reducer;
