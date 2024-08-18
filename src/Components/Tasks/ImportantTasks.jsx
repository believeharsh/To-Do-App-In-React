import React from "react";
import ImpUseTask from "../Context/ImportantTasks/ImpUseTask";
import TaskList from "./Tasklist";

const ImpTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = ImpUseTask();

  return (
    <TaskList
      tasks={Tasks}
      handleEditTask={handleEditTask}
      handleDeleteTask={handledeleteTask}
      toggleTaskCompletion={toggleTaskCompletion}
    />
  );
};

export default ImpTasklist;