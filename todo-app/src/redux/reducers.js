// // reducers.js
// const initialState = {
//     tasks: [],
//     filter: 'All',
//     darkMode: false,
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_TASKS':
//         return {
//           ...state,
//           tasks: action.payload,
//         };
//       case 'ADD_TASK':
//         return {
//           ...state,
//           tasks: [...state.tasks, action.payload],
//         };
//       case 'UPDATE_TASK':
//         return {
//           ...state,
//           tasks: state.tasks.map((task) =>
//             task.id === action.payload.id ? action.payload : task
//           ),
//         };
//       case 'TOGGLE_COMPLETE':
//         return {
//           ...state,
//           tasks: state.tasks.map((task) =>
//             task.id === action.payload
//               ? { ...task, completed: !task.completed }
//               : task
//           ),
//         };
//       case 'DELETE_TASK':
//         return {
//           ...state,
//           tasks: state.tasks.filter((task) => task.id !== action.payload),
//         };
//       case 'SET_FILTER':
//         return {
//           ...state,
//           filter: action.payload,
//         };
//       case 'SET_DARK_MODE':
//         return {
//           ...state,
//           darkMode: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
  