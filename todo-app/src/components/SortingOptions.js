import React from 'react';
import "./SortingOptions.css"

const SortingOptions = ({ setSortBy }) => {
  return (
    <div className="sorting-options">
      <button className="button-87" onClick={() => setSortBy('Priority')}>Sort by Priority</button>
      <button className="button-87" onClick={() => setSortBy('Date')}>Sort by Date</button>
    </div>
  );
};

export default SortingOptions;
