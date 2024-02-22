import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type initialStateType = {
  id: string;
  isAdded: boolean;
}

const initialState: initialStateType[] | [] = [];

const notificationListSlice = createSlice({
  name: "notificationList",
  initialState,
  reducers: {
    addNotification: {
      reducer(state, action: PayloadAction<initialStateType>) {
        return state = [...state, action.payload];
      },
      prepare(isAdded: boolean) {
        return {
          payload: {
            id: nanoid(),
            isAdded,
          },
        };
      },
    },
    clearNotification: (state) => (state = []),
  },
});

export const { addNotification, clearNotification } =
  notificationListSlice.actions;

export default notificationListSlice.reducer;
