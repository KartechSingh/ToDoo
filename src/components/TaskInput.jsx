import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import './TaskInput.css'

const TaskInput = () => {


  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div className='task-input'>
      <h1 className='header'>ToDoo</h1>
      <br/>
      <div className="text-input">
      <input type="text" 
      placeholder='Enter Your Task'
      value={input} 
      onChange={(e) => setInput(e.target.value)}  />
      <button onClick={handleAddTask}> Save </button></div>
    </div>
  )
}

export default TaskInput
