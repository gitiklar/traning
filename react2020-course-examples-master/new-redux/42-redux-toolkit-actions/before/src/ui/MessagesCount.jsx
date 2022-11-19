import { useSelector } from "react-redux";

export default () => {
  const count = useSelector((state) => state.messages.messages.length);
  return <div>Count: {count}</div>;
};
