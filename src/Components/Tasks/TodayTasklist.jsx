import React from "react";
import TodayUseTask from "../Context/TodayTasks/TodayUseTask"
import TaskList from "./Tasklist";

const TodayTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = TodayUseTask();

  return (
    <TaskList
      tasks={Tasks}
      handleEditTask={handleEditTask}
      handleDeleteTask={handledeleteTask}
      toggleTaskCompletion={toggleTaskCompletion}
    />
  );
};

export default TodayTasklist;