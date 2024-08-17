import { v4 as uuidv4 } from "uuid";

export const addTask = (Tasks, task) => {
  const Inlowercase = task.toLowerCase();
  if (task.trim() !== "") {
    const alreadyExists = Tasks.some(
      (existingTask) => existingTask.text.toLowerCase() === Inlowercase
    );
    if (!alreadyExists) {
      return [...Tasks, { id: uuidv4(), text: task, completed: false }];
    } else {
      alert("Task already exists!");
    }
  } else {
    alert("Input field can't be empty");
  }
  return Tasks; // Return the original list if no task is added
};

export const deleteTask = (Tasks, taskId) => {
  return Tasks.filter((task) => task.id !== taskId);
};

export const editTask = (Tasks, taskId, newTask) => {
  return Tasks.map((task) =>
    task.id === taskId ? { ...task, text: newTask } : task
  );
};