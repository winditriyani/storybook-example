import React from 'react';
import './App.scss';
import { TaskProvider } from './components/task/task.provider'
import Home from './home'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TaskProvider>
          <Home  />
        </TaskProvider>
      </header>
    </div>
  );
}

export default App;
