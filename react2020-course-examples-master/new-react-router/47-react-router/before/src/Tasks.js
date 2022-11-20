import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { addTask } from "./dl/store";

export default () => {
  const location = useLocation();
  return (
    <>
      <p>{location.state}</p>
      <div className="tasks-page">
        <div className="left">
          <TasksLists />
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

const TasksLists = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="new">Create New</NavLink>
        </li>
        {tasks.map((task) => (
          <li key={task.id}>
            <NavLink to={`${task.id}`}>{task.text}</NavLink>
            <input type="checkbox" checked={task.done} onChange={() => {}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NewTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);

  const addTaskH = () => {
    const lastId = tasks.reduce((acc, item) =>
      acc.id > item.id ? acc.id : item.id
    );
    const id = lastId + 1;
    dispatch(addTask({ id, text, done: false }));
    setText("");
    navigate(`../${id}`);
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTaskH}>Add</button>
    </div>
  );
};

export const CurrentTask = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks.tasks);
  const currentTask = tasks.find((task) => task.id === Number(id));
  if (!currentTask) {
    return <Navigate to="../new" state="id not fount" />;
  }
  const { text, done } = currentTask;

  return (
    <div>
      Current task:
      <p>id: {id}</p>
      <p>text: {text}</p>
      <p>done: {String(done)}</p>
    </div>
  );
};
