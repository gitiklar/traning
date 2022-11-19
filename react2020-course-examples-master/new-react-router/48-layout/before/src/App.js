import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NewTask, TasksPage, ViewTask } from "./Tasks";

// tasks      => Show only a list of tasks
// tasks/new  => Show a list of tasks on the left side,
//               and a form to create new task to the right
//
// tasks/4    => Show a list of tasks on the left side
//               and the details of task #4 on the right

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome To React Router</h1>
      <nav>
        <h2>Navigation with &lt;Link/&gt; Component</h2>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/contact">Contact Page</Link>
        <Link to="/tasks">Tasks Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<TasksPage />}>
          <Route index element={<p>My My My</p>} />
          <Route path="new" element={<NewTask />} />
          <Route path=":id" element={<ViewTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <p>Home Page</p>;
}

function About() {
  return <p>About Page</p>;
}

function Contact() {
  return <p>Contact Page</p>;
}

export default App;
