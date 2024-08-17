
import {useContext} from 'react'
import { TodayTaskContext } from './TodayTaskContext'
const TodayUseTask = () => {
    const {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask} = useContext(TodayTaskContext)
  return {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask}
}

export default TodayUseTask ; 
