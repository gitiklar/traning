import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../actions";

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
  extraReducers: {
    [loadFromLocalStorage()]: (state, action) => {
      return action.payload.undo;
    },
  },
});

export const { updateStateArray, undoAction } = slice.actions;
export default slice.reducer;
