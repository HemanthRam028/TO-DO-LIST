import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/actions';
import "./TaskForm.css"

const TaskForm = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.currentTask);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDueDate(currentTask.dueDate);
      setPriority(currentTask.priority);
    }
  }, [currentTask]);

  const handleAddOrUpdateTask = () => {
    if (!title || !description || !dueDate || !priority) {
      setErrorMessage('All fields must be filled');
      return;
    }

    if (currentTask) {
      const updatedTask = { ...currentTask, title, description, dueDate, priority };
      dispatch(editTask(updatedTask));
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
      };
      dispatch(addTask(newTask));
    }
    setTitle('');
    setDescription('');
    setDueDate('');
    setErrorMessage('');
  };

  return (
    <div className="task-form">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="button-86" onClick={handleAddOrUpdateTask}>
        {currentTask ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskForm;
