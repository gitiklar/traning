import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import app from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";
import { createRoom, enterRoom } from "./slices/rooms";

export const newMessage = (from, text) => {
  const db = getFirestore(app);
  addDoc(collection(db, "messages"), {
    from,
    text,
    id: nanoid(),
    createdAt: serverTimestamp(),
  });
};

const goToServer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export const joinRoom = createAsyncThunk(
  "rooms/joinRoom",
  async (roomId, { dispatch, getState }) => {
    const nextRoom = getState().rooms.rooms.find((r) => r.id === roomId);
    if (nextRoom) {
      dispatch(enterRoom(roomId));
    } else {
      await goToServer();
      dispatch(createRoom({ id: roomId, name: `Room ${roomId}` }));
      dispatch(enterRoom(roomId));
    }
  }
);

window.joinRoom = joinRoom;
