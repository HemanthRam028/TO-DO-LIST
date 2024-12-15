import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: [],
  filter: 'All', // 'All', 'Completed', 'Pending'
  darkMode: false,
};


// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
    default:
      return state;
  }
};


// Create store
const store = createStore(rootReducer);
export default store;
