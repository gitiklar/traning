import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, text: "write 50 words", done: false },
    { id: 2, text: "read react code", done: true },
    { id: 3, text: "write", done: true },
    { id: 4, text: "learn react", done: false },
  ],
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = slice.actions;
const store = configureStore({
  reducer: {
    tasks: slice.reducer,
  },
});
export default store;
