// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, toggleComplete, deleteTask, setFilter, setDarkMode, editTask } from './redux/actions';
// import './App.css';

// function App() {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks);
//   const filter = useSelector((state) => state.filter);
//   const darkMode = useSelector((state) => state.darkMode);

//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const [editMode, setEditMode] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [sortBy, setSortBy] = useState('Priority');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) ?? false;

//     savedTasks.forEach((task) => dispatch(addTask(task)));
//     dispatch(setDarkMode(savedDarkMode));
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [tasks, darkMode]);

//   const handleAddTask = () => {
//     if (!title || !description || !dueDate || !priority) {
//       setErrorMessage('All fields must be filled');
//       return;
//     }

//     const taskExists = tasks.some((task) => task.title === title && task.dueDate === dueDate);

//     if (taskExists) {
//       setErrorMessage('Task already exists');
//       return;
//     }

//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       dueDate,
//       priority,
//       completed: false,
//     };

//     dispatch(addTask(newTask));
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setErrorMessage('');
//   };

//   const handleEditTask = () => {
//     if (!title || !description || !dueDate || !priority) {
//       setErrorMessage('All fields must be filled');
//       return;
//     }

//     const updatedTask = {
//       ...currentTask,
//       title,
//       description,
//       dueDate,
//       priority,
//     };
//     dispatch(editTask(updatedTask));
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setErrorMessage('');
//     setEditMode(false);
//   };

//   const handleToggleComplete = (id) => dispatch(toggleComplete(id));
//   const handleDeleteTask = (id) => {
//     dispatch(deleteTask(id));
//     localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.id !== id)));
//   };

//   const handleFilterChange = (filter) => dispatch(setFilter(filter));
//   const handleDarkModeToggle = () => {
//     const newDarkMode = !darkMode;
//     dispatch(setDarkMode(newDarkMode));
//     localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === 'All') return true;
//     return filter === 'Completed' ? task.completed : !task.completed;
//   });

//   const sortedTasks = filteredTasks.sort((a, b) => {
//     if (sortBy === 'Priority') {
//       const priorityOrder = ['High', 'Medium', 'Low'];
//       return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
//     } else if (sortBy === 'Date') {
//       return new Date(a.dueDate) - new Date(b.dueDate);
//     }
//     return 0;
//   });

//   return (
//     <div className={`app ${darkMode ? 'dark' : ''}`}>
//       <h1 className="glowing-text">To-Do App</h1>
//       <button className="button-85" role="button" onClick={handleDarkModeToggle}>
//         {darkMode ? '🌞' : '🌙'}
//       </button>

//       <div className="task-form">
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Task Title"
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Task Description"
//         />
//         <input
//           type="date"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//         />
//         <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>
//         <div className="button-container">
//           {editMode ? (
//             <button className="button-86" onClick={handleEditTask}>Update Task</button>
//           ) : (
//             <button className="button-86" onClick={handleAddTask}>Add Task</button>
//           )}
//         </div>
//       </div>

//       <div className="filters">
//         <button className="button-87" onClick={() => handleFilterChange('All')}>All</button>
//         <button className="button-87" onClick={() => handleFilterChange('Completed')}>Completed</button>
//         <button className="button-87" onClick={() => handleFilterChange('Pending')}>Pending</button>
//       </div>

//     <div className="sorting-options">
//       <button className="button-87" onClick={() => setSortBy('Priority')}>Sort by Priority</button>
//       <button className="button-87" onClick={() => setSortBy('Date')}>Sort by Date</button>
//     </div>


//       <div className="task-list">
//         {sortedTasks.map((task) => (
//           <div
//             key={task.id}
//             className={`task ${task.completed ? 'completed' : ''} priority-${task.priority.toLowerCase()}`}
//           >
//             <div>
//               <h2>{task.title}</h2>
//               <p>{task.description}</p>
//               <p>Due: {task.dueDate}</p>
//               <p>Priority: {task.priority}</p>
//             </div>

//             <div className="task-actions">
//               <button onClick={() => handleToggleComplete(task.id)} className="button-88">
//                 <span className="material-icons">
//                   {task.completed ? 'check_circle' : 'check_circle_outline'}
//                 </span>
//                 {task.completed ? 'Completed' : 'Complete'}
//               </button>

//               <button onClick={() => handleDeleteTask(task.id)}className="button-88">
//                 <span className="material-icons">delete</span>
//               </button>

//               <button
//                 onClick={() => {
//                   setEditMode(true);
//                   setCurrentTask(task);
//                   setTitle(task.title);
//                   setDescription(task.description);
//                   setDueDate(task.dueDate);
//                   setPriority(task.priority);
//                 }}
//                 className="button-88"
//               >
//                 <span className="material-icons">edit</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filters';
import Sorting from './components/SortingOptions';
import { setDarkMode, setTasks } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const [sortBy, setSortBy] = useState('Priority');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode));
    }
    setLoading(false);

    // Load tasks from localStorage and add them to Redux state
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(savedTasks));

  }, [dispatch]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  if (loading) {
    return null;
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <h1 className="glowing-text">To-Do App</h1>
      <button className="button-85" role="button" onClick={handleDarkModeToggle}>
        {darkMode ? '🌞' : '🌙'}
      </button>

      <TaskForm />
      <Filter />
      <Sorting setSortBy={setSortBy} />
      <TaskList sortBy={sortBy} />
    </div>
  );
}

export default App;
