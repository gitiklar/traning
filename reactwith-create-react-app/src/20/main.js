import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";

export const MyApp = () => {
  const [words, setWords] = useState(new Array(5).fill(""));
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const refContainer = useRef(null);

  useEffect(() => {
    if (!refContainer.current) return;
    refContainer.current.children[currentFocusIndex].focus();
  }, [currentFocusIndex]);

  const onKeyPress = (val) => {
    words[currentFocusIndex] += val;
    setWords([...words]);
    setCurrentFocusIndex((v) => (v < 4 ? v + 1 : 0));
  };

  return (
    <div style={{ display: "flex" }} ref={refContainer}>
      {new Array(5).fill().map((_, i) => (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
            margin: "20px",
          }}
          key={i}
          tabIndex={1}
          onFocus={() => currentFocusIndex !== i && setCurrentFocusIndex(i)}
          onKeyPress={(e) => onKeyPress(e.key)}
        >
          {words[i]}
        </div>
      ))}
    </div>
  );
};
