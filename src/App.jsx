import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useEffect } from 'react'
import { TaskProvider, useTask } from './TaskContext'

function App() {
  return (
    <TaskProvider>
      <TaskAppContent />
    </TaskProvider>
  )
}

function TaskAppContent() {
  const { tasks } = useTask();

  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    document.title = `Task Manager (${pendingTasks} pending)`;
    console.log('Document title updated by App component.');
  }, [tasks]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #eee', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App