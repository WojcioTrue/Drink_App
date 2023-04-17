import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [

]

const notificationListSlice = createSlice({
    name: 'notificationList',
    initialState,
    reducers:{
        addNotification: {
            reducer(state,action) {
                return state = [...state, action.payload]
            },
            prepare(isAdded){
                return {
                    payload: {
                        id: nanoid(),
                        isAdded,
                    }
                }
            }
        }
    },
        clearNotification: state => state = [],
    })


export const { addNotification, clearNotification } = notificationListSlice.actions

export default notificationListSlice.reducer