import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {"id": 1, "title": "Task 1", "completed": false},
    {"id": 2, "title": "Task 2", "completed": false},
    {"id": 3, "title": "Task 3", "completed": true}
]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        addTask: (state, action) => {
            const newId = state.length > 0 ? Math.max(...state.map(task => task.id)) + 1 : 1;
            state.push({id: newId, text: action.payload, completed: false});
        },

        toggleComplete: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if(task) {
                task.completed = !task.completed;
            }
        },

        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },

        loadTasks: (state, action) => {
            return action.payload;
        }

    }
})

export const { addTask, toggleComplete, deleteTask, loadTasks } = tasksSlice.actions;
export default tasksSlice.reducer;