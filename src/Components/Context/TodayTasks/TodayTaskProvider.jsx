import { TodayTaskContext } from "./TodayTaskContext";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const TodayTaskProvider = ({ children }) => {
  const InitialTasks = [
    { id: uuidv4(), text: "Workout", completed: false },
    { id: uuidv4(), text: "Book Reading", completed: false },
    { id: uuidv4(), text: "Coding", completed: false },
    { id: uuidv4(), text: "React Router Dom ", completed: false },
  ];
  const [Tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return !savedTasks || JSON.parse(savedTasks).length === 0
      ? InitialTasks
      : JSON.parse(savedTasks);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  const addTask = (task) => {
    const Inlowercase = task.toLowerCase();
    // let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (task.trim() !== "") {
      // Check if the task already exists in the state
      const alreadyExists = Tasks.some(
        (existingTask) => existingTask.text.toLowerCase() === Inlowercase
      );
      if (!alreadyExists) {
        // Create a new task object
        const newTask = {
          id: uuidv4(),
          text: task,
          completed: false,
        };

        // Add the new task to the state
        setTasks([...Tasks, newTask]);
      } else {
        alert("Task already exists!");
      }
    } else {
      alert("Input field can't be empty");
    }
    // console.log(Tasks)
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
    <TodayTaskContext.Provider
      value={{ Tasks, setTasks, addTask, EditTask, deleteTask }}
    >
      {children}
    </TodayTaskContext.Provider>
  );
};

export default TodayTaskProvider;
