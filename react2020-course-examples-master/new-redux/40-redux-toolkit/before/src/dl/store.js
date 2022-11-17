import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account";
import messagesReducer from "./slices/messages";
import roomsReducer from "./slices/rooms";

window.store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
  },
});
