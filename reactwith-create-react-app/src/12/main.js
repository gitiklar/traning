import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function Display({ score, reset }) {
  return (
    <div
      style={{
        background: "#d2d2d2",
        padding: "10px 2px",
        boxShadow: "0 0 1px 1px rgba(0,0,0,0.6)",
      }}
    >
      You scored:
      <div
        style={{
          display: "inline-block",
          background: "black",
          color: "white",
          padding: "10px",
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        {score}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function Counter({ count, inc, reset }) {
  return (
    <div>
      <pre>Debug: count = {count}</pre>

      <Display score={count} reset={reset} />
      <button onClick={inc}>Click Me</button>
    </div>
  );
}

export const MyApp = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [counts, setCounts] = useState(new Array(5).fill(0));

  const updateCounts = (i, reset = false) => {
    const newArr = [...counts];
    newArr[i] = reset ? 0 : newArr[i] + 1;
    setCounts(newArr);
  };

  useEffect(() => {
    setMaxValue(Math.max(...counts));
  }, [counts]);

  return (
    <div>
      <div>Max value: {maxValue}</div>
      {new Array(4).fill().map((_, i) => (
        <Counter
          isMax={counts[i] === maxValue}
          key={i}
          count={counts[i]}
          inc={() => updateCounts(i)}
          reset={() => updateCounts(i, true)}
        />
      ))}
    </div>
  );
};
