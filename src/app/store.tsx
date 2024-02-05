import favouriteListReducer from "../features/favouriteList/favouriteListSlice";
import notificationListReducer from "../features/notificationList/notificationListSlice";
import categoryListReducer from "../features/categoryList/categoryListSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";
import drinkDataReducer from "../features/drinkInfo/drinkDataSlice";
import ingredientsButtonsReducer from "../features/ingredientSearch/ingredientsButtonsSlice";
import ingredientsDataReducer from "../features/ingredientSearch/ingredientsDataSlice";
import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit";

import { StateFromReducersMapObject } from "@reduxjs/toolkit";

export type RootState = StateFromReducersMapObject<typeof rootReducer>


const rootReducer = combineReducers({
  favouriteList: favouriteListReducer,
  notificationList: notificationListReducer,
  categoryList: categoryListReducer,
  searchBar: searchBarReducer,
  drinkData: drinkDataReducer,
  ingredientsButtons: ingredientsButtonsReducer,
  ingredientsData : ingredientsDataReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

type Store = ReturnType<typeof setupStore>
export type AppDispatch = Store['dispatch']