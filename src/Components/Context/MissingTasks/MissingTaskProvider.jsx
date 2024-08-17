import { MissingTaskContext } from "./MissingTaskContext";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState,useCallback } from "react";
import { addTask, deleteTask, editTask } from "../../../Utils/TaskUtils";

const MissingTaskProvider = ({ children }) => {
  const InitialTasks = [
    { id: uuidv4(), text: "Workout", completed: false },
    { id: uuidv4(), text: "Book Reading", completed: false },
    { id: uuidv4(), text: "Coding", completed: false },
    { id: uuidv4(), text: "React Router Dom ", completed: false },
  ];
 // Use a unique key for Missing tasks
 const LOCAL_STORAGE_KEY = "missingTasks";

 const [Tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : InitialTasks;
  } catch (e) {
    console.error("Failed to parse tasks from localStorage", e);
    return InitialTasks;
  }
});

 useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Tasks));
 }, [Tasks]);


  // The use of useCallback will be beneficial if Tasks array is large or your app becomes more complex.
  const handleAddTask = useCallback((task) => {
    setTasks((prevTasks) => addTask(prevTasks, task));
  }, []);

  const handledeleteTask = (taskid) => {
    const filteredTasks = Tasks.filter((task) => task.id !== taskid);
    setTasks(filteredTasks);
  };

  const handleEditTask = (taskId, newTask) => {
    setTasks(
      Tasks.map((task) =>
        task.id === taskId ? { ...task, text: newTask } : task
      )
    );
  };

  return (
    <MissingTaskContext.Provider
      value={{ Tasks, setTasks, handleAddTask, handleEditTask, handledeleteTask }}
    >
      {children}
    </MissingTaskContext.Provider>
  );
};

export default MissingTaskProvider;
