import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TasksPage, { CurrentTask, NewTask } from "./Tasks";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello world</h1>

      <h2>NavLinks with a</h2>
      <a href="/home">Home </a>
      <a href="/about">About </a>
      <a href="/contact">Contact </a>

      <h2>NavLinks with NavLink</h2>

      <NavLink to="/home">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      <NavLink to="/tasks">Tasks </NavLink>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<TasksPage />} >
          <Route index element={<p>index</p>}/>
          <Route path="new" element={<NewTask/>}/>
          <Route path=":id" element={<CurrentTask/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return <div>Home page</div>;
};

const About = () => {
  return <div>About page</div>;
};

const Contact = () => {
  return <div>Contact page</div>;
};

export default App;
