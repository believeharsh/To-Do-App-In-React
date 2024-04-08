import React from 'react'
import UseTask from '../Context/UseTask'



const Tasklist = () => {  
    const { Tasks, setTasks} = UseTask()
  return (
      <>
        <div className="">
            <ul>
                {Tasks.map((task) => {
                    return (
                        <li key={task.id}>{task.text}</li>
                    )
                })}
            </ul>
        </div>
      </>
  )
}

export default Tasklist
