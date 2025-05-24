import './App.css'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {
  const [newTaskInput, setNewTaskInput] =  useState('')
  const [tasks, setNewTask] = useState([
    {id: 1, name: "Task 1", completed: false},
    {id: 2, name: "Task 2", completed: true},
    {id: 3, name: "Task 2", completed: true}
  ])

  const addTask = () => {
    if(newTaskInput.trim() === '') {
      return;
    }
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => (t.id))) + 1 : 1;
    setNewTask([...tasks, {id: newId, name: newTaskInput, completed: false}])
    setNewTaskInput("")
   }

   const toggleComplete = (id) => {
    setNewTask(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
   }

   const deleteTask = (id) => {
    setNewTask(tasks.filter(task => (
      task.id !== id
    )))
   }

  return (
      <>
        <TaskList 
          tasks={tasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
        <input 
          type='text'
          onChange={e => setNewTaskInput(e.target.value)} 
          value={newTaskInput}
          placeholder='Add new task'
        />
        <button onClick={addTask}>Add Task</button>
      </>
  )
}

export default App