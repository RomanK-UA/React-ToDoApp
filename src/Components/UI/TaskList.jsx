import React from 'react';
import Button from './Button';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-bar">
          <div className="task-title">{task.title}</div>
          <div className="task-tags">Tags: {task.tags.join(',')}</div>
          <Button className="deleteBtn" onClick={() => onDeleteTask(task.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};


export default TaskList;