
import {useContext} from 'react'
import { ImpTaskContext } from './ImpTaskContext'
const ImpUseTask = () => {
    const {
      Tasks, 
      setTasks, 
      handleAddTask , 
      handleEditTask , 
      handledeleteTask,
      toggleTaskCompletion
    } = useContext(ImpTaskContext) ; 
  return {
    Tasks, 
    setTasks, 
    handleAddTask , 
    handleEditTask , 
    handledeleteTask,
    toggleTaskCompletion}
}

export default ImpUseTask ; 
 