import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

function SelectableList({ items }) {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const onChange = (isChecked, item) => {
    isChecked ? selectedItems.add(item) : selectedItems.delete(item);
    setSelectedItems(new Set(selectedItems));
  };

  return (
    <>
      <p>Selected Items: {Array.from(selectedItems).join(", ")}</p>
      <ul>
        {items.map((item) => (
          <li key={item} style={{ direction: "rtl" }}>
            <label>
              {item}
              <input
                type="checkbox"
                onChange={(e) => onChange(e.target.checked, item)}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export const MyApp = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div>
      <SelectableList items={days} />
    </div>
  );
};
