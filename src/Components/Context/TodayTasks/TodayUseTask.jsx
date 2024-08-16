
import {useContext} from 'react'
import { TodayTaskContext } from './TodayTaskContext'
const TodayUseTask = () => {
    const {Tasks, setTasks, addTask , EditTask , deleteTask} = useContext(TodayTaskContext)
  return {Tasks, setTasks, addTask , EditTask , deleteTask}
}

export default TodayUseTask ; 
