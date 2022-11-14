import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import _ from "lodash";

function CheckableList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <label>
            <input type="checkbox" />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
}

export const MyApp = () => {
  const [items, setItems] = useState(["one", "two", "three", "four", "five"]);

  return (
    <div>
      <button onClick={() => setItems(_.shuffle(items))}>Shuffle</button>
      <CheckableList items={items} />
    </div>
  );
};
