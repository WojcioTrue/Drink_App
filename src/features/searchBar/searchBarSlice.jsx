import { createSlice } from "@reduxjs/toolkit";

const inistialState = {
    drinkToSearch: ''
}


 const searchBarSlice = createSlice({
    name: "searchBar",
    inistialState,
    reducers: {
    }
})

export default searchBarSlice.reducer