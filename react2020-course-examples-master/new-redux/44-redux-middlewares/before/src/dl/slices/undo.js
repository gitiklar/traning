import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statesArray: [],
};

const slice = createSlice({
  name: "undo",
  initialState,
  reducers: {
    updateStateArray: (state, action) => {
      state.statesArray.push(action.payload);
    },
    undoAction: (state, action) => {
      state.statesArray.pop();
    },
  },
});

export const { updateStateArray, undoAction } = slice.actions;
export default slice.reducer;
