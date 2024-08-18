import React, { useState, useRef, useEffect } from "react";
import ImpUseTask from "../Context/ImportantTasks/ImpUseTask";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit, CiMedicalCross } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const ImpTasklist = () => {
  const { Tasks, handleEditTask, handledeleteTask, toggleTaskCompletion } = ImpUseTask();
  const [EditTaskId, setEditTaskId] = useState(null);
  const [EditedTaskText, setEditedTaskText] = useState("");
  const [panelOpenId, setPanelOpenId] = useState(null);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleEditInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleEditSubmit = (taskid) => {
    if (EditedTaskText !== "") {
      handleEditTask(taskid, EditedTaskText);
      setEditTaskId(null);
      setEditedTaskText("");
    } else {
      alert("Task can't be empty");
    }
  };

  const handleKeyPress = (e, taskid) => {
    if (e.key === "Enter") {
      handleEditSubmit(taskid);
    }
  };

  const togglePanel = (taskid) => {
    setPanelOpenId(panelOpenId === taskid ? null : taskid); // Toggle open/close for the same task
  };

  const openEditPanel = (taskId) => {
    setEditTaskId(taskId);
    const taskToEdit = Tasks.find((task) => task.id === taskId);
    setEditedTaskText(taskToEdit.text);
   
  };

  const handleClickOutside = (e) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setPanelOpenId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="">
        <ul>
          {Tasks.map((task) => {
            const isEditing = task.id === EditTaskId;
            const isPanelOpen = panelOpenId === task.id;

            return (
              <li
                key={task.id}
                className={`border border-b-[1px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-3 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 ${
                  task.completed ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex justify-between">
                  {isEditing ? (
                    <div className="flex w-full">
                      <input
                        type="text"
                        value={EditedTaskText}
                        onChange={handleEditInputChange}
                        onKeyDown={(event) => handleKeyPress(event, task.id)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                      />
                      <button
                        className="text-green-500 hover:text-green-600 mx-2"
                        onClick={() => handleEditSubmit(task.id)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`cursor-pointer ${
                        task.completed ? "line-through text-gray-500" : ""
                      } line-clamp-2`}
                      onClick={() => toggleTaskCompletion(task.id)}
                    >
                      {task.text}
                    </span>
                  )}

                  <div className="relative">
                    {!isEditing && (
                      <>
                        <button
                          className="text-blue-500 hover:text-blue-600 mr-2"
                          onClick={() => togglePanel(task.id)}   ref={buttonRef}
                        >
                          <BsThreeDotsVertical />
                        </button>
                        {isPanelOpen && (
                          <div
                            ref={panelRef}
                            className="absolute flex justify-center items-center right-0 mt-2 bg-black text-white font-thin shadow-lg rounded-md text-sm z-10 px-2 py-2 border-white border-[1px] transition-transform duration-200"
                          >
                            <button
                              className="block px-1 py-1"
                              onClick={() => openEditPanel(task.id)}
                            >
                              <CiEdit />
                            </button>
                            <button
                              className="block w-full px-1 py-1"
                              onClick={() => toggleTaskCompletion(task.id)}
                            >
                              <CiMedicalCross />
                            </button>
                            <button
                              className="block px-1 py-1"
                              onClick={() => handledeleteTask(task.id)}
                            >
                              <MdDeleteOutline />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ImpTasklist;