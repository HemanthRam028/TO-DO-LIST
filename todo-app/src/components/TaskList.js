import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, deleteTask, setCurrentTask } from '../redux/actions';
import './TaskList.css';

const TaskList = ({ sortBy }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return filter === 'Completed' ? task.completed : !task.completed;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'Priority') {
      const priorityOrder = ['High', 'Medium', 'Low'];
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    } else if (sortBy === 'Date') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0;
  });

  const handleEditTask = (task) => {
    dispatch(setCurrentTask(task));
  };

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
          </div>
          <div className="task-actions">
            <button className="button-90" onClick={() => dispatch(toggleComplete(task.id))}>
              <span className="material-icons">
                {task.completed ? 'check_circle' : 'radio_button_unchecked'}
              </span>
            </button>
            <button className="button-90" onClick={() => dispatch(deleteTask(task.id))}>
              <span className="material-icons">delete</span>
            </button>
            <button className="button-90" onClick={() => handleEditTask(task)}>
              <span className="material-icons">edit</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
