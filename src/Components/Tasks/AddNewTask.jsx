import React, { useContext } from "react";
import { useState } from "react";

import { FaPlus } from "react-icons/fa";

const AddNewTask = ({handleAddTask}) => {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(inputValue);
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
        
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter task"
            className="NewTask-input"
          />
          <button type="submit" className="NewTask-Add-btn">
          <FaPlus/>
          </button>
         
        </div>
      </form>
    </>
  );
};

export default AddNewTask;
