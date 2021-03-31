import React, {useContext} from 'react';
import TaskList from './components/task/task-list'
import { TaskContext } from './components/task/task.provider'

const Home = () => {
const props = useContext(TaskContext);
  return  <TaskList {...props} />
}

export default Home;
