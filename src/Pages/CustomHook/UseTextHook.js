import { useState } from "react";

export const useText = () => {
  const [task, setTask] = useState();
  const [newTask, setNewTask] = useState([]);

  const inputTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    const inputTask = {
      id: newTask.length === 0 ? 1 : newTask[newTask.length - 1].id + 1,
      taskName: task,
      checked: false,
    };

    const addedTask = [...newTask, inputTask];
    setNewTask(addedTask);
  };

  const deleteTask = (id) => {
    const deleted = newTask.filter((taskN) => taskN.id !== id);
    setNewTask(deleted);
  };

  const completedTask = (id) => {
    const completed = newTask.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setNewTask(completed);
  };

  const handleCheck = (id) => {
    const tarGet = newTask.map((tar) =>
      tar.id === id
        ? console.log(true)
          ? tar.id === id
          : { ...tar, checked: tar.checked }
        : { ...tar, checked: !tar.checked }
    );
    setNewTask(tarGet);
  };

  return {
    task,
    newTask,
    inputTask,
    addTask,
    deleteTask,
    completedTask,
    handleCheck,
  };
};
