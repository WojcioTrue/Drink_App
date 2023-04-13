import { configureStore } from "@reduxjs/toolkit";

import favouriteListReducer from "../features/favouriteList/favouriteListSlice";
import notificationListReducer from "../features/notificationList/notificationListSlice"
import categoryListReducer from "../features/categoryList/categoryListSlice";


export default configureStore({
    reducer: {
        favouriteList: favouriteListReducer,
        notificationList: notificationListReducer,
        categoryList: categoryListReducer
    }
})