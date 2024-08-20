import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AddNewTask from "../Tasks/AddNewTask";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import MissingTasklist from "../Tasks/Missingtask";
import ImportantTasklist from "../Tasks/ImportantTasks";
import TodayTasklist from "../Tasks/TodayTasklist";
import { useTodayTask } from "../Context/TodayTasks/TodayTaskProvider";
import { useMissingTask } from "../Context/MissingTasks/MissingTaskProvider";
import { useImpTask } from "../Context/ImportantTasks/ImpTaskProvider";

const GetTasks = () => {


  const location = useLocation();
  const { handleAddTask: handleAddTodayTask } = useTodayTask();
  const { handleAddTask: handleAddImportantTask } = useImpTask();
  const { handleAddTask: handleAddMissingTask } = useMissingTask();

  const getAddTaskFunction = () => {
    switch (location.pathname) {
      case "/important":
        return handleAddImportantTask;
      case "/missing":
        return handleAddMissingTask;
      case "/today":
      default:
        return handleAddTodayTask;
    }
  };
  return (
    <div className=" fixed left-0 right-0 bottom-0 top-0 overflow-auto">
      <Navbar />
      <div className="max-w-md mx-auto p-4">
        <div className="everything-card border-1 rounded-xl px-2 py-2">
          <Header />
          <AddNewTask  handleAddTask={getAddTaskFunction()} />

          {/* Define Routes for different task lists */}
          <Routes>
            <Route path="/" element={<TodayTasklist />} /> /* Default Task List */
            <Route path="/important" element={<ImportantTasklist />} />
            <Route path="/today" element={<TodayTasklist />} />
            <Route path="/missing" element={<MissingTasklist />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default GetTasks;
