import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account";
import messagesReducer from "./slices/messages";
import roomsReducer from "./slices/rooms";
import freezeReducer from "./slices/freeze";
import { delayMiddleware, freezeMiddleware } from "./middlewares";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    freeze: freezeReducer,
  },
  middleware: (allDefault) =>
    allDefault().concat(freezeMiddleware, delayMiddleware),
});

window.store = store;
