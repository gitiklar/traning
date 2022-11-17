import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../dl/slices/messages";

export default function MessagesInputs() {
  const [message, setMessage] = useState("");
  const name = useSelector((state) => state.account.name);
  const dispatch = useDispatch();
  const messagesList = useSelector((state) => state.messages.messages);

  const getNextId = (messagesList) => {
    return (
      messagesList.reduce((acc, item) =>
        acc.id > item.id ? acc.id : item.id
      ) + 1
    );
  };

  const onSend = (e) => {
    if (e.key !== "Enter") return;
    dispatch(
      newMessage({
        id: getNextId(messagesList),
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
