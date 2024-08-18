import React from "react";
import MissingUseTask from "../Context/MissingTasks/MissingUseTask";
import TaskList from "./Tasklist";

const MissingTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = MissingUseTask();

  return (
    <TaskList
      tasks={Tasks}
      handleEditTask={handleEditTask}
      handleDeleteTask={handledeleteTask}
      toggleTaskCompletion={toggleTaskCompletion}
    />
  );
};

export default MissingTasklist;