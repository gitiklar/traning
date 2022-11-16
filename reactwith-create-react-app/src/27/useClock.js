import { useState, useEffect, useRef } from "react";

const useInterval = (callback, ms) => {
  const refCallback = useRef();
  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timer = setInterval(() => {
      refCallback.current();
    }, ms);
    return () => {
      clearInterval(timer);
    };
  }, []);
};

export default () => {
  const [ticks, setTicks] = useState(0);

  useInterval(() => {
    setTicks(ticks + 1);
  }, 1000);

  return ticks;
};
