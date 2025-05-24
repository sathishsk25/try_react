import TaskItem from './TaskItem'

function TaskList({ tasks, onDelete, onToggleComplete }) {
    return (
        <div>
            <h3> Current Tasks: </h3>
                <ul>
                    {
                    tasks.length === 0 ?  "No tasks" : 
                        tasks.map(task => (
                            <TaskItem 
                                key={task.id} 
                                task={task}
                                onDelete={onDelete}
                                onToggleComplete={onToggleComplete}
                            />
                        ))
                    }
                </ul>
        </div>
    )
}

export default TaskList;