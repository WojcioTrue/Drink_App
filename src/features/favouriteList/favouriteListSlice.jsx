import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: "15300",
    imgSrc:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    name: "3-Mile Long Island Iced Tea",
  },
  {
    id: "15300",
    imgSrc:
      "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    name: "3-Mile Long Island Iced Tea",
  },
];

export const favouriteListSlice = createSlice({
    name: "favouriteList",
    initialState,
    reducers:{
      addToFavourite: (state,action) => {
        console.log(action.payload);
        return state = [...state, action.payload]
      }
    }
})

export const { addToFavourite } = favouriteListSlice.actions

export default favouriteListSlice.reducer