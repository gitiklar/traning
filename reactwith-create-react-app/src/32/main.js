import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import _ from "lodash";

function CheckableList({ items, render }) {
  const [count, setCount] = useState(0);

  function reset() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={reset}>Unselect All</button>
      <ul key={count}>{items.map((item) => render(item))}</ul>
    </>
  );
}

export const MyApp = () => {
  const [items, setItems] = useState(["one", "two", "three", "four", "five"]);
  const [colors, setColors] = useState([
    "blue",
    "green",
    "yellow",
    "black",
    "white",
  ]);

  function shuffle(arr, fn) {
    fn(_.shuffle(arr));
  }

  return (
    <div>
      <button onClick={() => shuffle(items, setItems)}>Shuffle</button>
      <CheckableList
        items={items}
        render={(item) => (
          <li key={item}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        )}
      />
      <button onClick={() => shuffle(colors, setColors)}>Shuffle</button>
      <CheckableList
        items={colors}
        render={(item) => (
          <div key={item}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </div>
        )}
      />
    </div>
  );
};
