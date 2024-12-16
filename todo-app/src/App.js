
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filters';
import Sorting from './components/SortingOptions';
import { setDarkMode, setTasks } from './redux/actions'; // Import setTasks
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const [sortBy, setSortBy] = useState('Priority');
  const [loading, setLoading] = useState(true);

  // Load dark mode and tasks on first render
  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode));
    }

    // Load tasks from localStorage and add them to Redux store
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(savedTasks));

    setLoading(false);
  }, [dispatch]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  if (loading) {
    return null; // Prevent rendering before tasks and dark mode are loaded
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
