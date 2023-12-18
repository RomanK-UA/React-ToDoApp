import { useState, useEffect } from 'react'
import TaskForm from './Components/Containers/TaskForm';
import TaskList from './Components/UI/TaskList';
import Filter from './Components/Containers/Filter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleAddTask = (newTask) => {
    const taskId = new Date().getTime();
    const taskWithId = { ...newTask, id: taskId };

    setTasks([taskWithId, ...tasks ]);
    setFilteredTasks([taskWithId, ...tasks]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilterByTag = (tag) => {
    if (tag === '') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.tags.includes(tag));
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className='appContainer'>
      <div className="main">
        <TaskForm onAddTask={handleAddTask} />
        <Filter onFilterByTag={handleFilterByTag} />
      </div>

      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};
export default App;