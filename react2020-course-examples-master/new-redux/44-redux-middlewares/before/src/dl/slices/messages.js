import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
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
    updateMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteMessage, updateMessages } = slice.actions;
window.deleteMessage = deleteMessage;
export default slice.reducer;
