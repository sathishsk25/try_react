import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState, useEffect } from 'react'
import { TaskProvider } from './TaskContext'

function App() {
  return (
    <TaskProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #eee', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
        <TaskList />
        <TaskForm />
      </div>
    </TaskProvider>
  )
}

export default App