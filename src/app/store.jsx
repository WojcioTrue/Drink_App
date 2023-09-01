import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteListReducer from "../features/favouriteList/favouriteListSlice";
import notificationListReducer from "../features/notificationList/notificationListSlice";
import categoryListReducer from "../features/categoryList/categoryListSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";

const rootReducer = combineReducers({
  favouriteList: favouriteListReducer,
  notificationList: notificationListReducer,
  categoryList: categoryListReducer,
  searchBar: searchBarReducer,
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
