import { useState } from "react";
import "./App.css";
import logo from "./react.svg";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface App {
  title?: string;
}

function App({ title }: App) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);
  const getCurrentTimestamp = ():number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed:false}]);
  };

  const deleteATask = (id: number) => setTasks( tasks.filter(task => task.id !== id));


  return (
    <div className="bg-dark text-white" style={{ height: "auto" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand d-flex">
            <img src={logo} alt="imagen logo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
