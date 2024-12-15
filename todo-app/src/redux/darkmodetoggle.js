import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from './actions'; // Make sure you have this action
import './darkmode.css';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode)); // Update the dark mode state in the Redux store
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <h1>To-Do App</h1>
        <div className="wrapper">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <label htmlFor="dark-mode-toggle" className="toggle">
            <div className="toggle-button">
              <div className="crater crater-1"></div>
              <div className="crater crater-2"></div>
              <div className="crater crater-3"></div>
            </div>
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DarkModeToggle;
