import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


export const fetchDrinksByIngredient = createAsyncThunk(
  "categoryList/fetchDrinksByIngredient",
  async (searchParams: string, { rejectWithValue }) => {
    try {
      let url =
        "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";
      if (searchParams !== "") {
        url += searchParams;
      } else {
        return [];
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.drinks === "None Found") {
        return [];
      } else {
        return data.drinks;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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

type initialStateType = {
  data: {
    ingredients: string[];
    selectedIngredients: {
      id: string;
      value: string;
    }[];
    searchParams: string;
    drinkList: GlobalDrinkType[];
  };
  loading: globalLoadingType;
  error: globalErrorType;
}

const initialState: initialStateType = {
  data: {
    ingredients: [],
    selectedIngredients: [{ id: nanoid(), value: "" }],
    searchParams: "",
    drinkList: [],
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
    removeIngredientField(state, action: PayloadAction<string>) {
      state.data.selectedIngredients = state.data.selectedIngredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    changeSelectedField(state, action: PayloadAction<{
      id: string;
      value: string;
    }>) {
      state.data.selectedIngredients = state.data.selectedIngredients.map(
        (listElement) =>
          listElement.id === action.payload.id
            ? { id: action.payload.id, value: action.payload.value }
            : listElement
      );
    },
    changeSearchParams(state) {
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
    },
    clearSelectedIngredients(state) {
      state.data = {
        ingredients: [],
        selectedIngredients: [{ id: nanoid(), value: "" }],
        searchParams: "",
        drinkList: [],
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngrediendsData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchIngrediendsData.fulfilled, (state, action: PayloadAction<IngredientPromptDataType>) => {
      const data = action.payload;
      state.data.ingredients = data.drinks.map(
        (element: { strIngredient1: string }) => element.strIngredient1
      );
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(fetchIngrediendsData.rejected, (state) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    builder.addCase(fetchDrinksByIngredient.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchDrinksByIngredient.fulfilled, (state, action: PayloadAction<GlobalDrinkType[]>) => {
      state.data.drinkList = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(fetchDrinksByIngredient.rejected, (state) => {
      state.loading = "idle";
      state.error = "Error occured";
    });
  },
});

export const {
  addIngredientField,
  removeIngredientField,
  changeSelectedField,
  changeSearchParams,
  clearSelectedIngredients
} = ingredientsDataSlice.actions;

export default ingredientsDataSlice.reducer;
