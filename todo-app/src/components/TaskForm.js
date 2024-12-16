import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, setTasks } from '../redux/actions';
import "./TaskForm.css";

const TaskForm = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.currentTask);
  const tasks = useSelector((state) => state.tasks);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errorMessage, setErrorMessage] = useState('');

  // Load tasks from localStorage when the component first loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(savedTasks)); // Set tasks to Redux store
  }, [dispatch]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Populate form if editing an existing task
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

    let updatedTasks = [];

    if (currentTask) {
      // Update existing task
      const updatedTask = { ...currentTask, title, description, dueDate, priority };
      dispatch(editTask(updatedTask));
      updatedTasks = tasks.map((task) =>
        task.id === currentTask.id ? updatedTask : task
      );
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
      };
      dispatch(addTask(newTask));
      updatedTasks = [...tasks, newTask];
    }

    // Save tasks to localStorage after every change
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Reset form fields
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
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
