import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import _ from "lodash";
const style = {
  width: "80px",
  height: "40px",
};

const getSortedData = (data, index) => {
  const sorted = data.slice(1).sort((r1, r2) => {
    const upperCase1 = r1[index].toUpperCase();
    const upperCase2 = r2[index].toUpperCase();

    if (upperCase1 < upperCase2) {
      return -1;
    }
    if (upperCase1 > upperCase2) {
      return 1;
    }
    return 0;
  });
  sorted.unshift(data[0]);
  debugger;
  return sorted;
};

function SortableTable({ data }) {
  const [sortedData, setSortedData] = useState(data);

  const onClick = (item, index) => {
    setSortedData(getSortedData(sortedData, index));
  };

  return (
    <table>
      {sortedData.map((row, i) => (
        <tr>
          {row.map((item, j) => (
            <td
              {...(i === 0 ? { onClick: () => onClick(item, j) } : {})}
              style={style}
            >
              {item}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export const MyApp = () => {
  const data = [
    ["id", "Name", "Country", "Email"],
    [0, "dan", "Israel", "dan@gmail.com"],
    [1, "dana", "Israel", "dana@gmail.com"],
    [2, "anna", "Israel", "anna@gmail.com"],
    [3, "zina", "UK", "zina@gmail.com"],
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <SortableTable data={data} />
    </div>
  );
};
