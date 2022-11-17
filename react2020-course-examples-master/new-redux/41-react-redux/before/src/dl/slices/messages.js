import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: [
    { id: 0, from: 'ynon', text: 'Hello Everyone' },
    { id: 1, from: 'user1', text: 'Hello World' },
    { id: 2, from: 'user2', text: 'Nice to see you' },
  ],
}

export const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    newMessage(state, action) {
      state.messages.push(action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { newMessage } = slice.actions

export default slice.reducer;

