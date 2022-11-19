import { useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  orderBy,
} from "firebase/firestore";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { updateMessages } from "../dl/slices/messages";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const db = getFirestore(app);
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { id, text, from } = data;
        messages.push({ id, text, from });
      });
      dispatch(updateMessages(messages));
    });
  }, []);
  return <></>;
};
