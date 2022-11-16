import React from "react";

export default React.memo(
  function Fiver(props) {
    console.log("Fiver");
    const { ticks } = props;

    return <p>{Math.floor(ticks / 5)}</p>;
  },
  (preProps, nextProps) => Math.floor(preProps.ticks / 5) === Math.floor(nextProps.ticks / 5)
);
