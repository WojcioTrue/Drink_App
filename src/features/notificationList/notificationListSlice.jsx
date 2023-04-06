import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

const notificationListSlice = createSlice({
    name: 'notificationList',
    initialState,
    reducers:{
        addNotification: (state,action) => {
            return state = [...state, action.payload]
        }
    }
})

export const { addNotification } = notificationListSlice.actions

export default notificationListSlice.reducer