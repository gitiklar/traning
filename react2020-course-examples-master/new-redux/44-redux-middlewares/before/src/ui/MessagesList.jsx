import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../dl/slices/messages";

export default function MessagesList() {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const deleteMessageHandler = (id) => {
    dispatch(deleteMessage(id));
  };

  return (
    <ul>
      {messages.map((m) => (
        <div key={m.id}>
          <li>
            <b>{m.from}</b> {m.text}
          </li>
          <button onClick={() => deleteMessageHandler(m.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
}
