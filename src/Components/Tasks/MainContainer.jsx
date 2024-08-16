import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AddNewTask from "./AddTask";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import MissingTasklist from "./Missingtask";
import ImportantTasklist from "./ImportantTasks";
import Tasklist from './Tasklist';
import ImpUseTask from '../Context/ImportantTasks/ImpUseTask';
import MissingUseTask from '../Context/MissingTasks/MissingUseTask';
import TodayUseTask from '../Context/TodayTasks/TodayUseTask';



const MainContainer = () => {
  const location = useLocation(); // Get current location

  let addTask;
  switch (location.pathname) {
    case '/important':
      addTask = ImpUseTask().addTask;
      break;
    case '/missing':
      addTask = MissingUseTask().addTask;
      break;
    case '/today':
    default:
      addTask = TodayUseTask().addTask;
      break;
  }

  return (
    <div className="MainContainerBg fixed left-0 right-0 bottom-0 top-0 overflow-auto">
      <Navbar />
      <div className="max-w-md mx-auto p-4">
        <div className="bg-slate-900 border-1 rounded-xl px-2 py-2">
          <Header />
          <AddNewTask addTask={addTask}/>

          {/* Define Routes for different task lists */}
          <Routes>
            <Route path="/" element={<Tasklist />} /> {/* Default Task List */}
            <Route path="/important" element={<ImportantTasklist />} />
            <Route path="/today" element={<Tasklist />} />
            <Route path="/missing" element={<MissingTasklist />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;