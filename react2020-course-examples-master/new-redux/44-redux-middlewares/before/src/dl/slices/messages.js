import { createSlice } from "@reduxjs/toolkit";
import { newMessage } from "../actions";

const initialState = {
  messages: [{ id: 0, from: "ynon", text: "Hello Everyone" }],
};

export const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    deleteMessage(state, action) {
      state.messages = state.messages.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [newMessage]: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteMessage } = slice.actions;
window.deleteMessage = deleteMessage;
export default slice.reducer;
