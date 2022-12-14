import { loadFromLocalStorage } from "./actions";
import { addActionToList, clear } from "./slices/freeze";
import { updateStateArray } from "./slices/undo";

export const freezeMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === "freeze/setFrozen") {
      next(action);
      if (getState().freeze.isFrozen === false) {
        for (let action of getState().freeze.actions) {
          dispatch(action);
        }
        dispatch(clear());
      }
    } else if (
      action.type === "freeze/addActionToList" ||
      action.type === "freeze/clear"
    ) {
      next(action);
    } else {
      const isFrozen = getState().freeze.isFrozen;
      if (!isFrozen) {
        next(action);
      } else {
        dispatch(addActionToList(action));
      }
    }
  };

export const delayMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (!action.meta) return next(action);
    const ms = action.meta.delay;
    setTimeout(() => {
      next(action);
    }, ms);
  };

export const undoMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === loadFromLocalStorage().toString()) return next(action);
    if (!action.type.startsWith("undo")) {
      const lastState = { ...getState() };
      delete lastState.undo;
      dispatch(updateStateArray(lastState));
    }
    return next(action);
  };

export const localStorageSaving =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== loadFromLocalStorage().toString()) {
      next(action);
      localStorage.setItem("state", JSON.stringify(getState()));
    } else {
      return next(action);
    }
  };
