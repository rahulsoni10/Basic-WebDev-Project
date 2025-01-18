import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask refreshTasks={refreshTasks} />
      <TaskList key={refresh} />
    </div>
  );
};

export default App;
