import { configureStore } from "@reduxjs/toolkit";

import favouriteListReducer from "../features/favouriteList/favouriteListSlice";
import notificationListReducer from "../features/notificationList/notificationListSlice";
import categoryListReducer from "../features/categoryList/categoryListSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";

const reducer = {
  favouriteList: favouriteListReducer,
  notificationList: notificationListReducer,
  categoryList: categoryListReducer,
  searchBar: searchBarReducer,
};

export const store = configureStore({
  reducer: reducer,
});

export function setupStore(preloadedState) {
    return configureStore({ reducer, preloadedState });
  }