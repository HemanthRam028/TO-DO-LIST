export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const SET_FILTER = 'SET_FILTER';
export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_CURRENT_TASK = 'SET_CURRENT_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setDarkMode = (darkMode) => ({
  type: SET_DARK_MODE,
  payload: darkMode,
});

export const setCurrentTask = (task) => ({
  type: SET_CURRENT_TASK,
  payload: task,
});
