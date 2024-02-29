import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
// getting localstore for favourite Drinks



interface ToRemove {
  idDrink: string
}

const getLocalStorage = localStorage.getItem("favouriteList")

const initialState: GlobalDrinkType[] = getLocalStorage ? JSON.parse(getLocalStorage)
  : [];

const favouriteListSlice = createSlice({
  name: "favouriteList",
  initialState,
  reducers: {
    addToFavourite: {
      reducer(state, action: PayloadAction<GlobalDrinkType>) {
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
      reducer(state, action: PayloadAction<ToRemove>) {
        return (state = state.filter(
          (element) => element.idDrink !== action.payload.idDrink
        ));
      },
      prepare(id: string) {
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
