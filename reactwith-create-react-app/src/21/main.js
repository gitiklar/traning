import React from "react";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";

export const MyApp = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const el = useRef(null);
  const word2Ref = useRef(null);

  function showMyThing(e) {
    alert(el.current.dataset.myStuff);
  }

  function setFirstWord(val) {
    if (val.endsWith(" ")) word2Ref.current.focus();
    else setWord1(val);
  }

  function setSecondWord(val) {
    setWord2(val);
  }

  return (
    <div data-my-stuff="hello" ref={el}>
      <button onClick={showMyThing}>Show My Thing</button>
      <input
        type="text"
        value={word1}
        onChange={(e) => setFirstWord(e.target.value)}
      />
      <input
        type="text"
        value={word2}
        onChange={(e) => setSecondWord(e.target.value)}
        ref={word2Ref}
      />
    </div>
  );
};
