import TaskItem from './TaskItem'
import {useTask} from '../TaskContext'

function TaskList() {
    const { tasks, deleteTask, toggleComplete } = useTask()
    return (
        <div>
            <ul>
                {
                tasks.length === 0 ?  "No tasks" : 
                    tasks.map((task) => (
                        <TaskItem 
                            key={task.id} 
                            task={task}
                            onDelete={deleteTask}
                            onToggleComplete={toggleComplete}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList;