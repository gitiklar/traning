import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../actions";
import { undoAction } from "./undo";

const initialState = {
  messages: [],
};

export const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    updateMessages(state, action) {
      state.messages = action.payload;
    },
  },
  extraReducers: {
    [undoAction]: (state, action) => {
      return action.payload.messages;
    },
    [loadFromLocalStorage()]: (state, action) => {
      return action.payload.messages;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessages } = slice.actions;
export default slice.reducer;
