import { actions } from "./slices/freeze";

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
        dispatch(actions.clear());
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
        dispatch(actions.addActionToList(action));
      }
    }
  };
