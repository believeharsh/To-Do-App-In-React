import React from "react";
import TaskList from "./Tasklist";
import { useMissingTask } from "../Context/MissingTasks/MissingTaskProvider";

const MissingTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = useMissingTask();

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