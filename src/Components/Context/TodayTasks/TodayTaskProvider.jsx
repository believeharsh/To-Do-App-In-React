import { TodayTaskContext } from "./TodayTaskContext";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useEffect, useState } from "react";
import { addTask, deleteTask, editTask } from "../../../Utils/TaskUtils";
import { useContext } from "react";

const TodayTaskProvider = ({ children }) => {
  const InitialTasks = [
    { id: uuidv4(), text: "Workout", completed: false },
    { id: uuidv4(), text: "Book Reading", completed: false },
    { id: uuidv4(), text: "Coding", completed: false },
    { id: uuidv4(), text: "React Router Dom ", completed: false },
  ];

  // Using a unique key for Missing tasks here ::
  const LOCAL_STORAGE_KEY = "todayTasks";
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
    const filteredTasks = deleteTask(Tasks, taskid);
    setTasks(filteredTasks);
  };

  const handleEditTask = (taskId, newTask) => {
    const EditedTasks = editTask(Tasks, taskId, newTask)
    setTasks(EditedTasks);
  };
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodayTaskContext.Provider
      value={{ Tasks, setTasks, handleAddTask, handleEditTask, handledeleteTask, toggleTaskCompletion }}
    >
      {children}
    </TodayTaskContext.Provider>
  );
};

export default TodayTaskProvider;

export const useTodayTask = () => {
  const {
    Tasks,
    setTasks,
    handleAddTask,
    handleEditTask,
    handledeleteTask,
    toggleTaskCompletion,
  } = useContext(TodayTaskContext);

  return {
    Tasks,
    setTasks,
    handleAddTask,
    handleEditTask,
    handledeleteTask,
    toggleTaskCompletion,
  };
};
