import { useState } from "react";
import { useTask } from "../TaskContext";

function TaskForm() {

    const { addTask } = useTask()

    const [ newTaskText, setnewTaskText ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTaskText.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        addTask(newTaskText);
        setnewTaskText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Task: </h3>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setnewTaskText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}
export default TaskForm;