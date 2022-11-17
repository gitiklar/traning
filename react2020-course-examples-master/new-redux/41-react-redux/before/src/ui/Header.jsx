import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../dl/selectors";
import { setUserName } from "../dl/slices/account";

export default function Header() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setUserName(e.target.value));
  };

  return (
    <div className="header">
      <label>
        Username
        <input type="text" onChange={onChange} value={name} />
      </label>
    </div>
  );
}
