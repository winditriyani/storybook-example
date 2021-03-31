import React from 'react';
import Task from './task';

const defaultProps = {
    loading: false,
  };

const TaskList = ({loading, tasks, onPinTask}) => {


  const events = {
    onPinTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];


  return (
    <div className="list-group list-group-flush">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.defaultProps = defaultProps;

export default TaskList