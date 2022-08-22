import React from 'react';
import { useParams } from 'react-router-dom'

const TaskDetailPage = ({ task }) => {
    const taskId = useParams();
    console.log(task);
    return (
        <div>
            <h1>Task Detail - {taskId.taskId}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
