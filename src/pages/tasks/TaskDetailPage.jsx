import React from 'react';
import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {
    const taskId = useParams();
    console.log(taskId);
    return (
        <div>
            <h1>Task Detail - {taskId.taskId}</h1>
        </div>
    );
}

export default TaskDetailPage;
