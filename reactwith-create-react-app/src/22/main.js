import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function Timer(props) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTicks((v) => v + 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return <p>Ticks: {ticks}</p>;
}

export const MyApp = () => {
  const [showTimer, setShowTimer] = useState(true);

  function toggleTimer() {
    setShowTimer((val) => !val);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleTimer}>Hide/Show timer</button>
      {showTimer && <Timer />}
    </div>
  );
};
