import React from "react";
import { TaskContext } from "./TaskContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TaskProvider = ({ children }) => {
  const InitialTasks = [
    { id: uuidv4(), text: "Workout", completed: false },
    { id: uuidv4(), text: "Book Reading", completed: false },
    { id: uuidv4(), text: "Coding", completed: false },
    { id: uuidv4(), text: "React Router Dom ", completed: false },
  ];
  const [Tasks, setTasks] = useState(InitialTasks);

  const addTask = (task) => {
    let newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
    };
    if (task !== "") {
      setTasks([...Tasks, newTask]);
    } else {
      alert("Input filed can't be empty");
    }
  };
  const deleteTask = (taskid) => {
    const filteredTasks = Tasks.filter((task) => task.id !== taskid);
    setTasks(filteredTasks);
  };

  const EditTask = (taskId, newTask) => {
    setTasks(
      Tasks.map((task) =>
        task.id === taskId ? { ...task, text: newTask } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ Tasks, setTasks, addTask, EditTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
