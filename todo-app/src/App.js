

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filters';
import Sorting from './components/SortingOptions';
import { setDarkMode } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const [sortBy, setSortBy] = useState('Priority');

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode));
    }
  }, [dispatch]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

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
