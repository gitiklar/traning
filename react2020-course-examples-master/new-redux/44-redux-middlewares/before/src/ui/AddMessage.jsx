import { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessage } from "../dl/actions";

export const AddMessage = () => {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  const onInputFromChange = (e) => {
    setFrom(e.target.value);
  };

  const send = () => {
    dispatch(newMessage(from, text));
    clear();
  };

  const clear = () => {
    setFrom("");
    setText("");
  };

  return (
    <div>
      <label>
        from
        <input value={from} onChange={onInputFromChange} />
      </label>
      <label>
        type message...
        <input value={text} onChange={onInputChange} />
      </label>
      <button onClick={send}>Send</button>
    </div>
  );
};
