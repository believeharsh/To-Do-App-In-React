import { useContext } from "react";
import { MissingTaskContext } from "./MissingTaskContext";
const MissingUseTask = () => {
  const { 
    Tasks, 
    setTasks, 
    handleAddTask, 
    handleEditTask, 
    handledeleteTask,
    toggleTaskCompletion
  } = useContext(MissingTaskContext);

  return { 
    Tasks, 
    setTasks, 
    handleAddTask, 
    handleEditTask, 
    handledeleteTask,
    toggleTaskCompletion };
};

export default MissingUseTask;
