import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextId } from "../dl/selectors";
import { newMessage } from "../dl/slices/messages";

export default function MessagesInputs() {
  const [message, setMessage] = useState("");
  const name = useSelector((state) => state.account.name);
  const nextId = useSelector(getNextId);
  const dispatch = useDispatch();

  const onSend = (e) => {
    if (e.key !== "Enter") return;
    dispatch(
      newMessage({
        id: nextId,
        from: name,
        text: e.target.value,
      })
    );
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type a message"
        onKeyDown={onSend}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
