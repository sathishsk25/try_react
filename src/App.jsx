import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState, useEffect } from 'react'

function App() {

  const [tasks, setNewTask] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      {id: 1, name: "Task 1", completed: false},
      {id: 2, name: "Task 2", completed: true},
      {id: 3, name: "Task 2", completed: true}
    ]
  });

  useEffect(() => {
    console.log('Tasks state changed, saving to local storage');
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const pendingTasks =  tasks.filter(task => !task.completed).length
    document.title = `Task Manager (${pendingTasks} pending)`
  })

  const addTask = (text) => {
        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => (t.id))) + 1 : 1;
        setNewTask([...tasks, {id: newId, name: text, completed: false}])
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
        <TaskForm 
          onAddTask = {addTask}
        />
      </>
  )
}

export default App