import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export default accountSlice.reducer;
