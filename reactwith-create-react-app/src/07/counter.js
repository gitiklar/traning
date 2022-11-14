import React from "react";
import { useState } from "react";
const tinycolor = require("tinycolor2");

export default function Counter(props) {
  const [value, setValue] = useState("#ff0000");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="color" value={value} onChange={onChange} />
      </div>
      <div style={{ display: "flex" }}>
        {new Array(10).fill().map((_, i) => (
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor:
                i === 4
                  ? value
                  : i < 4
                  ? tinycolor(value)
                      .lighten(50 - (10 * (i + 1)))
                      .toString()
                  : tinycolor(value)
                      .darken( 10*(i-5 + 1))
                      .toString(),
            }}
            key={i}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
