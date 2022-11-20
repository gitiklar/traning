import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../actions";
import { undoAction } from "./undo";

const initialState = {
  isFrozen: false,
  actions: [],
};

const slice = createSlice({
  name: "freeze",
  initialState,
  reducers: {
    setFrozen(state, action) {
      state.isFrozen = action.payload;
    },
    addActionToList(state, action) {
      state.actions.push(action.payload);
    },
    clear(state, action) {
      state.actions = [];
    },
  },
  extraReducers: {
    [undoAction]: (state, action) => {
      return action.payload.freeze;
    },
    [loadFromLocalStorage()]: (state, action) => {
      return action.payload.freeze;
    },
  },
});

export const { setFrozen, addActionToList, clear } = slice.actions;
export default slice.reducer;
