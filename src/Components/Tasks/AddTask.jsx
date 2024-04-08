import React from 'react'
import { useState} from 'react'
import UseTask from '../Context/UseTask'

const AddNewTask = () => {
    const { addTask } = UseTask()

    const [inputValue, setinputValue] = useState('');

    const handleChange = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
        addTask(inputValue)
        setinputValue('')
    }

  return (
  <>
    <form onSubmit={handleSubmit}>
     <div className="flex mb-4" >
     <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter task"
        className="w-full rounded border-gray-300 p-2 mr-2"
      />
      <button type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >Add Task
      </button>
     </div>
      
    </form>
  </>
  )
}

export default AddNewTask
