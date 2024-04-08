import React from "react";
import UseTask from "../Context/UseTask";
import Tasklist from "./Tasklist";
import AddNewTask from "./AddTask";

const MainContainer = () => {
  return (
    <>
         <div className="">
            <AddNewTask/>
            <Tasklist/>
         </div>
       
    </>
  )
};

export default MainContainer;
