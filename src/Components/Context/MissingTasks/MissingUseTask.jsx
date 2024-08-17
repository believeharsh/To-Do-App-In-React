
import {useContext} from 'react'
import { MissingTaskContext } from './MissingTaskContext'
const MissingUseTask = () => {
    const {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask} = useContext(MissingTaskContext)
  return {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask}
}

export default MissingUseTask ; 
