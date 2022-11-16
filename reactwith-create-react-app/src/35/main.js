import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Fiver from "./fiver";
import ColorPalette from "./colors";

function ColorSelector(props) {
  console.log("Color Selector");
  const [ticks, setTicks] = useState(0);
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <div>
        <Fiver ticks={ticks} />
        <button onClick={() => setTicks((v) => v + 1)}>
          Click Me ... {ticks}
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

export const MyApp = ColorSelector;
