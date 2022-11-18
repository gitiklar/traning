import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello world</h1>

      <h2>Links with a</h2>
      <a href="/home">Home </a>
      <a href="/about">About </a>
      <a href="Contact">Contact </a>

      <h2>Links with Link</h2>

      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="Contact">Contact </Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
