import { createSlice } from "@reduxjs/toolkit";
import { undoAction } from "./undo";

const initialState = {
  name: "guest",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  extraReducers: {
    "account/setUserName": (state, action) => {
      state.name = action.payload;
    },
    [undoAction]: (state, action) => {
      return action.payload.account;
    },
  },
});

export default accountSlice.reducer;
