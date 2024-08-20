import React from "react";
import TaskList from "./Tasklist";
import { useTodayTask } from "../Context/TodayTasks/TodayTaskProvider";

const TodayTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = useTodayTask();

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