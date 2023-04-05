import { configureStore } from "@reduxjs/toolkit";

import favouriteListReducer from "../features/favouriteList/favouriteListSlice";

export default configureStore({
    reducer: {
        favouriteList: favouriteListReducer
    }
})