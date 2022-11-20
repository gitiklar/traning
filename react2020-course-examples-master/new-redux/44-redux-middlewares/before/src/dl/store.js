import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account";
import messagesReducer from "./slices/messages";
import roomsReducer from "./slices/rooms";
import freezeReducer from "./slices/freeze";
import undoReducer from "./slices/undo";
import {
  delayMiddleware,
  freezeMiddleware,
  localStorageSaving,
  undoMiddleware,
} from "./middlewares";
import * as all from "./actions";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    freeze: freezeReducer,
    undo: undoReducer,
  },
  middleware: (allDefault) =>
    allDefault().concat(
      freezeMiddleware,
      delayMiddleware,
      undoMiddleware,
      localStorageSaving
    ),
});

window.store = store;
