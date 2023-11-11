import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const fetchIngrediendsData = createAsyncThunk(
  `categoryList/ingredientsData`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: {
    ingredients: [],
    selectedIngredients: [{ id: nanoid(), value: "" }],
    searchParams: [],
  },
  loading: "idle",
  error: null,
};

const ingredientsDataSlice = createSlice({
  name: "ingrediendsData",
  initialState,
  reducers: {
    addIngredientField(state) {
      state.data.selectedIngredients = [
        ...state.data.selectedIngredients,
        { id: nanoid(), value: "" },
      ];
    },
    removeIngredientField(state, action) {
      state.data.selectedIngredients = state.data.selectedIngredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    changeSelectedField(state, action) {
      state.data.selectedIngredients = state.data.selectedIngredients.map(
        (listElement) =>
          listElement.id === action.payload.id
            ? { id: action.payload.id, value: action.payload.value }
            : listElement
      );
    },
    changeSearchParams(state){
      const arrOfIngredients = [];
      for (let element of state.data.selectedIngredients) {
          if (element.value !== "") {
            const replaceWhiteSpace = element.value.replace(/\s+/g, "_");
            arrOfIngredients.push(replaceWhiteSpace);
          } else {
            continue;
          }
        }
      state.data.searchParams = arrOfIngredients.join(",");
    }
    // const arrOfIngredients = [];
    // for (let element of data.selectedIngredients) {
    //   if (element.value !== "") {
    //     const replaceWhiteSpace = element.value.replace(/\s+/g, "_");
    //     arrOfIngredients.push(replaceWhiteSpace);
    //   } else {
    //     continue;
    //   }
    // }
    // setSearchParams();
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngrediendsData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchIngrediendsData.fulfilled, (state, action) => {
      const data = action.payload;
      state.data.ingredients = data.drinks.map(
        (element) => element.strIngredient1
      );
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(fetchIngrediendsData.rejected, (state, action) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
  },
});

export const {
  addIngredientField,
  removeIngredientField,
  changeSelectedField,
  changeSearchParams
} = ingredientsDataSlice.actions;

export default ingredientsDataSlice.reducer;
