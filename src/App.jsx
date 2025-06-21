import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import AboutPage from './AboutPage'
import { useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { loadTasks } from './store/tasksSlice'
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <TaskAppContent />
      </BrowserRouter>
    </Provider>
  )
}

function TaskAppContent() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    document.title = `Task Manager (${pendingTasks} pending)`;
    console.log('Document title updated by App component.');
  }, [tasks]);
  
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if(savedTasks) {
        dispatch(loadTasks(JSON.parse(savedTasks)));
      }
    } catch(e) {
      console.warn("Could not load tasks from LocalStorage: ", e);
    }
  }, [dispatch]);

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