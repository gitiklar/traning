import { createSlice } from "@reduxjs/toolkit";
import { newMessage } from "../actions";

const initialState = {
  messages: [{ id: 0, from: "ynon", text: "Hello Everyone" }],
};

export const slice = createSlice({
  name: "messages",
  initialState,
  extraReducers: {
    [newMessage]: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function

export default slice.reducer;
