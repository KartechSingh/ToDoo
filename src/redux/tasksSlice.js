import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    }
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
