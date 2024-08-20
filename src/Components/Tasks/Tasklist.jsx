import React, { useState, useRef, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit, CiMedicalCross } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const TaskList = ({
  tasks,
  handleEditTask,
  handleDeleteTask,
  toggleTaskCompletion,
}) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");
  const [panelOpenId, setPanelOpenId] = useState(null);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleEditInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleEditSubmit = (taskId) => {
    if (editedTaskText !== "") {
      handleEditTask(taskId, editedTaskText);
      setEditTaskId(null);
      setEditedTaskText("");
    } else {
      alert("Task can't be empty");
    }
  };

  const handleKeyPress = (e, taskId) => {
    if (e.key === "Enter") {
      handleEditSubmit(taskId);
    }
  };

  const togglePanel = (taskId) => {
    setPanelOpenId(panelOpenId === taskId ? null : taskId); // Toggle open/close for the same task
  };

  const openEditPanel = (taskId) => {
    setEditTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
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
    <div>
      <ul>
        {tasks.map((task) => {
          const isEditing = task.id === editTaskId;
          const isPanelOpen = panelOpenId === task.id;

          return (
            <li
              key={task.id}
              className={` Tasklist-li ${
                task.completed ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex justify-between">
                {isEditing ? (
                  <div className="flex w-full">
                    <input
                      type="text"
                      value={editedTaskText}
                      onChange={handleEditInputChange}
                      onKeyDown={(event) => handleKeyPress(event, task.id)}
                      className="Task-input"
                    />
                    <button
                      className=""
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
                        className="three-dot-btn"
                        onClick={() => togglePanel(task.id)}
                        ref={buttonRef}
                      >
                        <BsThreeDotsVertical  className="mx-1 my-1"/>
                      </button>
                      {isPanelOpen && (
                        <div
                          ref={panelRef}
                          className="threedot-panel"
                        >
                          <button
                            className="threedot-panel-btns"
                            onClick={() => openEditPanel(task.id)}
                          >
                            <CiEdit />
                          </button>
                          <button
                            className="threedot-panel-btns"
                            onClick={() => toggleTaskCompletion(task.id)}
                          >
                            <CiMedicalCross />
                          </button>
                          <button
                            className="threedot-panel-btns"
                            onClick={() => handleDeleteTask(task.id)}
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
  );
};

export default TaskList;
