
import {useContext} from 'react'
import { MissingTaskContext } from './MissingTaskContext'
const MissingUseTask = () => {
    const {Tasks, setTasks, addTask , EditTask , deleteTask} = useContext(MissingTaskContext)
  return {Tasks, setTasks, addTask , EditTask , deleteTask}
}

export default MissingUseTask ; 
