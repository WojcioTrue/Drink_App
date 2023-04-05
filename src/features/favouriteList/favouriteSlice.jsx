import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
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
    reducers:{}
})

export default favouriteListSlice.reducer