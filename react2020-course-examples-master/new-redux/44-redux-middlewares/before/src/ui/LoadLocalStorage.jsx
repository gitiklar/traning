import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadFromLocalStorage } from "../dl/actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromLocalStorage()());
  }, []);
  return <></>;
};
