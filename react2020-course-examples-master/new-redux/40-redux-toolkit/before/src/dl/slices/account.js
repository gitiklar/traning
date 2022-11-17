import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "guest",
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.username = action.payload;
    },
  },
});

window.slice = slice;
export const actions = slice.actions;
export default slice.reducer;
