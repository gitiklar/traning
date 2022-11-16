import React from "react";
import useClock from "./useClock";

function NewsTicker({ items }) {
  const ticks = useClock();
  return <p>{items[ticks % items.length]}</p>;
}

function Clock() {
  const ticks = useClock();
  return <div>Ticks... {ticks}</div>;
}

export const MyApp = () => {
  const items = [
    "I lit up from Reno",
    "I was trailed by twenty hounds",
    "Didn't get to sleep that night",
    "Till the morning came around",
  ];

  return (
    <div>
      <Clock />
      <NewsTicker items={items} />
    </div>
  );
};
