import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

function TaskForm() {

    const [ newTaskText, setnewTaskText ] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTaskText.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        dispatch(addTask(newTaskText));
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