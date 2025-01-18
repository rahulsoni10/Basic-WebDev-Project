import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    await axios.post('http://localhost:5000/tasks', { title });
    setTitle('');
    refreshTasks();
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
