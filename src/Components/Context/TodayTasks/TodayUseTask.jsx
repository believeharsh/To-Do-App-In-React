import { useContext } from "react";
import { TodayTaskContext } from "./TodayTaskContext";
const TodayUseTask = () => {
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

export default TodayUseTask;
