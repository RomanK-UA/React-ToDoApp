import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tags, setTags] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      onAddTask({ title: taskTitle, tags: tags.split(',') });
      setTaskTitle('');
      setTags('');
    }
  };

  return (
    <div className='taskForm'>
      <Input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="input"
      />
      <Input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input"
      />
      <Button onClick={handleAddTask} disabled={!taskTitle.trim()} className="addTaskBtn">
        Add Task
      </Button>
    </div>
  );
};

export default TaskForm;