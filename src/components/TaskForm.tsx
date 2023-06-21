import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props{
  addANewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
}

export default function TaskForm({addANewTask}: Props) {
  const inputTitle = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value }, 
  }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add Task</h2>
      <form onSubmit={handleNewTask} className="d-flex flex-column">
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="from-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary d-flex justify-content-center align-items-center">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
