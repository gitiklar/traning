import { useDispatch, useSelector } from "react-redux";
import { undoAction } from "../dl/slices/undo";

export default () => {
  const dispatch = useDispatch();
  const statesArray = useSelector((state) => state.undo.statesArray);

  const undoHandler = () => {
    if (statesArray.length)
      dispatch(undoAction(statesArray[statesArray.length - 1]));
  };
  return <button onClick={undoHandler}>Undo</button>;
};
