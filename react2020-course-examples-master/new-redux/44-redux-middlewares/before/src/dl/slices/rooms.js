import { createSlice } from "@reduxjs/toolkit";
import { joinRoom, loadFromLocalStorage, setUserName } from "../actions";
import { undoAction } from "./undo";

const initialState = {
  activeRoomId: 5,
  rooms: [
    { id: 0, name: "Loby" },
    { id: 1, name: "JavaScript Chats" },
  ],
};

export const slice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    createRoom(state, action) {
      state.rooms.push(action.payload);
    },
    enterRoom(state, action) {
      state.activeRoomId = action.payload;
    },
    leaveRoom(state) {
      state.activeRoomId = 0;
    },
  },
  extraReducers: {
    "account/setUserName": (state) => {
      state.activeRoomId = 0;
    },
    ["rooms/joinRoom/fulfilled"]: (state, action) => {
      console.log("full", action);
    },
    [undoAction]: (state, action) => {
      return action.payload.rooms;
    },
    [loadFromLocalStorage()]: (state, action) => {
      return action.payload.messages;
    },
  },
});

// Action creators are generated for each case reducer function
export const { enterRoom, leaveRoom, createRoom } = slice.actions;
window.enterRoom = enterRoom;
export default slice.reducer;
