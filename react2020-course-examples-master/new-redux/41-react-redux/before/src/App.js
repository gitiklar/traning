import "./App.css";
import Header from "./ui/Header";
import Banner from "./ui/Banner";
import MessagesInputs from "./ui/MessagesInputs";
import MessagesList from "./ui/MessagesList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <MessagesInputs />
        <MessagesList />
      </main>
    </div>
  );
}

export default App;
