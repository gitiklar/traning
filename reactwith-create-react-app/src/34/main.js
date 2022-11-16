import React from "react";
import ReactDOM from "react-dom";
import tinycolor from "tinycolor2";
import { useState } from "react";

function ColorBox(props) {
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();
  console.log("ColorBox");

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: "100px",
        height: "100px",
        background: color,

        display: "inline-block",
        margin: "5px",
      }}
    >
      {id}
    </div>
  );
}

function ColorPalette({ start }) {
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());
  console.log("ColorPalette");

  function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setDeletedBoxes(new Set(deletedBoxes));
  }

  const colors = [];
  for (let i = -360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(<ColorBox start={start} spin={i} onClick={removeBox} id={i} />);
  }
  return colors;
}

const Button = () => {
  console.log("Button");
  const [ticks, setTicks] = useState(0);
  return (
    <button onClick={() => setTicks((v) => v + 1)}>Click Me ... {ticks}</button>
  );
};

function ColorSelector(props) {
  const [color, setColor] = useState("#000000");
  console.log("ColorSelector");

  return (
    <div>
      <Button />
      <div>
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
