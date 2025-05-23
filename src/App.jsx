import './App.css'
import { useState } from 'react'

function App() {
  const [newTaskInput, setNewTaskInput] =  useState('')
  const [tasks, setNewTask] = useState([
    {id: 1, name: "Task 1", completed: true},
    {id: 2, name: "Task 2", completed: true}
  ])

  const addTask = () => {
    if(newTaskInput.trim() === '') {
      return;
    }
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => (t.id))) + 1 : 1;
    setNewTask([...tasks, {id: newId, name: newTaskInput, completed: false}])
    setNewTaskInput("")
   }


  return (
    <>
      <h2>Task List</h2>
      <input onChange={e => setNewTaskInput(e.target.value)} value={newTaskInput}/>
      <button onClick={addTask}>Add Task</button>
      <ul class="task-list">
        {
          tasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))
        }

      </ul>
    </>
  )
}

export default App