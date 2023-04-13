import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDrinks = createAsyncThunk(
  `categoryList/getDrinks`,
  async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`
    );
    return response.data;
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
    builder.addCase(getDrinks.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getDrinks.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getDrinks.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default categoryListSlice.reducer;
