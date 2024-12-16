import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETE,
  SET_FILTER,
  SET_DARK_MODE,
  SET_CURRENT_TASK,
} from './actions';

const initialState = {
  tasks: [],
  filter: 'All',
  darkMode: false,
  currentTask: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        currentTask: null,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload };
    case SET_CURRENT_TASK:
      return { ...state, currentTask: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
