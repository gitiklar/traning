import { createSlice } from "@reduxjs/toolkit";

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
});

export const actions = slice.actions;
window.actions = actions;
export default slice.reducer;
