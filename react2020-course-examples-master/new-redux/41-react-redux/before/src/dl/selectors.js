import { createSelector } from "reselect";

export const getAccount = (state) => state.account;
export const getUserName = createSelector(
  getAccount,
  (account) => account.name
);

export const getMessages = (state) => state.messages;
export const getNextId = createSelector(
  getMessages,
  (messages) =>
    messages.messages.reduce((acc, item) => (acc.id > item.id ? acc.id : item.id)) + 1
);
