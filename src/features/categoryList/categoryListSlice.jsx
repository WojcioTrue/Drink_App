import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDrinks = createAsyncThunk(`categoryList/getDrinks`, async () => {
    const data = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`
      )
    console.log(data)
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