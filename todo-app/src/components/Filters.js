import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import "./Filters.css"

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button className="button-90" onClick={() => dispatch(setFilter('All'))}>All</button>
      <button className="button-90" onClick={() => dispatch(setFilter('Completed'))}>Completed</button>
      <button className="button-90" onClick={() => dispatch(setFilter('Pending'))}>Pending</button>
    </div>
  );
};

export default Filters;
