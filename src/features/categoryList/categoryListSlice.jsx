import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "Vodka",
}

const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {

    }
})

export default categoryListSlice.reducer