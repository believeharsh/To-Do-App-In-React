
import {useContext} from 'react'
import { TaskContext } from './TaskContext'
const UseTask = () => {
    const {Tasks, setTasks, addTask} = useContext(TaskContext)
  return {Tasks, setTasks, addTask}
}

export default UseTask
