import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => dispatch(toggleComplete(task.id));
  const handleDeleteTask = () => dispatch(deleteTask(task.id));

  return (
    <div className={`task ${task.completed ? 'completed' : ''} priority-${task.priority.toLowerCase()}`}>
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
      </div>

      <div className="task-actions">
        <button onClick={handleToggleComplete} className="button-88">
          {task.completed ? 'Completed' : 'Complete'}
        </button>

        <button onClick={handleDeleteTask} className="button-88">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
