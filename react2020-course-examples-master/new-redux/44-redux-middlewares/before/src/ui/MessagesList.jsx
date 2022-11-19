import { useSelector } from "react-redux";
import { getFirestore, deleteDoc } from "firebase/firestore";
import app from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

export default function MessagesList() {
  const messages = useSelector((state) => state.messages.messages);

  const deleteMessageHandler = async (id) => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "messages"));
    let docId = "";
    querySnapshot.forEach((doc) => {
      if (doc.data().id === id) docId = doc.id;
    });
    const docRef = doc(db, "messages", docId);
    deleteDoc(docRef);
  };

  return (
    <ul>
      {messages.map((m) => (
        <div key={m.id}>
          <li>
            <b>{m.from}</b> {m.text}
          </li>
          <button onClick={() => deleteMessageHandler(m.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
}
