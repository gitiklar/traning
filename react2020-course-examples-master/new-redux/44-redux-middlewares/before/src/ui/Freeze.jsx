import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrozen } from "../dl/slices/freeze";

export default () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.freeze.actions.length);

  const onChange = (e) => {
    setIsFrozen(e.target.checked);
    dispatch(setFrozen(e.target.checked));
  };

  return (
    <div>
      <label>Freeze / Not freeze</label>
      <input type="checkbox" checked={isFrozen} onChange={onChange} />
      <div>Count of pendings:{count}</div>
    </div>
  );
};
