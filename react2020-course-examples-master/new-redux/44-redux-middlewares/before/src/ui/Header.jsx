import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../dl/actions";

export default function Header() {
  const name = useSelector((state) => state.account.name);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setUserName(e.target.value, 0));
  }

  return (
    <div className="header">
      <label>
        Username
        <input type="text" value={name} onChange={handleChange} />
      </label>
    </div>
  );
}
