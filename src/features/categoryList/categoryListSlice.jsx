import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDrinks = createAsyncThunk(`categoryList/getDrinks`, async () => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
    return response.data
})



const initialState = {
    category: "Vodka",
    data: [],
    error: null
}

const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {

    }
})

export default categoryListSlice.reducer