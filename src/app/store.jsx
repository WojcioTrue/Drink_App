import favouriteListReducer from "../features/favouriteList/favouriteListSlice";
import notificationListReducer from "../features/notificationList/notificationListSlice";
import categoryListReducer from "../features/categoryList/categoryListSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";
import drinkDataReducer from "../features/drinkInfo/drinkDataSlice";
import ingredientsButtonsReducer from "../features/ingredientSearch/findByIngredientsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  favouriteList: favouriteListReducer,
  notificationList: notificationListReducer,
  categoryList: categoryListReducer,
  searchBar: searchBarReducer,
  drinkData: drinkDataReducer,
  ingredientsButtons: ingredientsButtonsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
