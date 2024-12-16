import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../redux/actions';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const handleDarkModeToggle = () => {
    dispatch(setDarkMode(!darkMode));
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <button className="button-85" onClick={handleDarkModeToggle}>
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
