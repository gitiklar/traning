import React from "react";
import { useState } from "react";

export default function Counter(props) {
  const [delta, setDelta] = useState(1);
  const [count, setCount] = useState(delta);

  const onClick = () => {
    setCount((c) => c + delta);
  };

  const onInput = (e) => {
    setDelta(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Increase By:
        <input type="number" onInput={onInput} value={delta} />
      </label>
      <p>
        I was clicked {count} times
        <button onClick={onClick}>Click Me</button>
      </p>
    </div>
  );
}
