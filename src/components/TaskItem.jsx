function TaskItem({task, onToggleComplete, onDelete}) {
    return (
        <li style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
            {task.name} {'  '}
            {task.completed ? (
            <span style={{color: 'green', margin: '0 5px'}}>[Completed]</span>
                ) : (
            <span style={{color: 'orange', margin : '0 5px'}}>[Inprogress]</span>
            )}

        {/* Buttons to toggle completion & delete task */}
        <button onClick={() => onToggleComplete(task.id)}>
            {!task.completed ?  'Undo Complete' : 'Mark As Completed' }
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;