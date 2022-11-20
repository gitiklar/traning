import "./App.css";
import Header from "./ui/Header";
import Banner from "./ui/Banner";
import MessagesList from "./ui/MessagesList";
import { AddMessage } from "./ui/AddMessage";
import MessagesCount from "./ui/MessagesCount";
import Freeze from "./ui/Freeze";
import FirebaseListener from "./ui/FirebaseListener";
import Undo from "./ui/Undo";
import LoadLocalStorage from "./ui/LoadLocalStorage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoadLocalStorage />
        <Undo />
        <FirebaseListener />
        <Freeze />
        <Banner />
        <AddMessage />
        <MessagesCount />
        <MessagesList />
      </main>
    </div>
  );
}

export default App;
