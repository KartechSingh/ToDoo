import React from 'react';
import './TaskList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEditTask = (id, newText) => {
    dispatch(editTask({ id, text: newText }));
  };

  return (
    <div className="tasks">
      <ul className="tasklist">
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </span>
            <div className="btns">
              <button
                onClick={() => {
                  const newText = prompt('Edit task', task.text);
                  if (newText) {
                    handleEditTask(task.id, newText);
                  }
                }}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
