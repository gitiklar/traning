import { createSlice } from "@reduxjs/toolkit";

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
});

// Action creators are generated for each case reducer function
export const { updateMessages } = slice.actions;
export default slice.reducer;
