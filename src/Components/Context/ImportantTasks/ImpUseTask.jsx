
import {useContext} from 'react'
import { ImpTaskContext } from './ImpTaskContext'
const ImpUseTask = () => {
    const {Tasks, setTasks, addTask , EditTask , deleteTask} = useContext(ImpTaskContext)
  return {Tasks, setTasks, addTask , EditTask , deleteTask}
}

export default ImpUseTask ; 
 