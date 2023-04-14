import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDrinks = createAsyncThunk(
  `categoryList/getDrinks`,
  async (category = "Vodka", {rejectWithValue}) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    );
    try {
      const data = await response.json();
      return data.drinks;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrinks.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    });
    builder.addCase(getDrinks.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
        state.error = null;
      }
    });
    builder.addCase(getDrinks.rejected, (state, action) => {
      state.loading = "rejected"     
      if (state.loading === "rejected") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default categoryListSlice.reducer;
