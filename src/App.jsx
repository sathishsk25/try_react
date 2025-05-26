import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import AboutPage from './AboutPage'
import { useEffect } from 'react'
import { TaskProvider, useTask } from './TaskContext'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <TaskAppContent />
      </TaskProvider>
    </BrowserRouter>
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
      <h1>Task Manager</h1>
      
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element= {
          <>          
            <TaskList />
            <TaskForm />
          </>
        }/>
        <Route path='/about' element={<AboutPage />} />
      </Routes>

      
    </div>
  );
}

export default App