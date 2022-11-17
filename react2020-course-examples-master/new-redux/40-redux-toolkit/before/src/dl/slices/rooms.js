import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    { id: 0, name: "Loby" },
    { id: 1, name: "JavaScript Chats" },
  ],
  activeRoomId: 0,
};

const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    createRoom(state, action) {
      state.rooms.push({ id: action.payload.id, name: action.payload.name });
    },
    setActiveRoom(state, action) {
      state.activeRoomId = action.payload;
    },
    receivedRooms(state, action) {
      state.rooms = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
