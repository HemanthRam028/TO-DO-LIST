// src/redux/actions.js

export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    payload: tasks,
  });
  
  export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const updateTask = (task) => ({
    type: 'UPDATE_TASK',
    payload: task,
  });
  
  export const toggleComplete = (id) => ({
    type: 'TOGGLE_COMPLETE',
    payload: id,
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  
  export const setDarkMode = (darkMode) => ({
    type: 'SET_DARK_MODE',
    payload: darkMode,
  });
  export const editTask = (task) => {
    return {
      type: 'EDIT_TASK',
      payload: task
    };
  };
  
  