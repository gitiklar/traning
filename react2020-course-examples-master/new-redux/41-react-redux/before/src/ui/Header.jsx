import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../dl/slices/account";

export default function Header() {
  const name = useSelector((state) => state.account.name);
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
