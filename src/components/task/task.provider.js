import React, { useState,createContext } from 'react';

export const TaskContext = createContext({
    tasks: [],
    onPinTask: () => null,
    // closeLoading: () => {},
  });

export const TaskProvider = props => {
  const { children } = props;

  const onPinTask = (id,param) => anu(id,param)

  const anu =(id,param)=> {
      
    const a = loadingState.tasks.findIndex(m => m.id === id)

toggleLoading({...loading, ...loadingState.tasks[a].state = param})
};

  const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_ARCHIVED' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];


  const loadingState = {
    tasks:defaultTasks ,
    onPinTask,
    // hideLoading,
  };

  const [loading, toggleLoading] = useState(loadingState);

  return (
    <TaskContext.Provider value={loading}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
