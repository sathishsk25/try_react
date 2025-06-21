import TaskItem from './TaskItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleComplete } from '../store/tasksSlice';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id)); 
  };

    const handleDelete = (id) => {
        dispatch(deleteTask(id)); 
    };

    return (
        <div>
            <ul>
                {
                tasks.length === 0 ?  "No tasks" : 
                    tasks.map((task) => (
                        <TaskItem 
                            key={task.id} 
                            task={task}
                            onDelete={handleDelete}
                            onToggleComplete={handleToggleComplete}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList;