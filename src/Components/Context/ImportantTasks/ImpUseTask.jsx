
import {useContext} from 'react'
import { ImpTaskContext } from './ImpTaskContext'
const ImpUseTask = () => {
    const {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask} = useContext(ImpTaskContext)
  return {Tasks, setTasks, handleAddTask , handleEditTask , handledeleteTask}
}

export default ImpUseTask ; 
 