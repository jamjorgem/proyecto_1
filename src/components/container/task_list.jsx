import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import Taskform from '../pure/forms/taskform';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.URGENT);
    const defaultTask2 = new Task('Example2', 'Default description 2', true, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Default description 3', false, LEVELS.NORMAL);

    //ESTADO DEL COMPONENTE
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida
    useEffect(() => {
        console.log('modificacion de tareas');
        setLoading(false);
        return () => {
            console.log('cuando componente desaparece');
        };
    }, [tasks]);

    function completeTask(task) {
        const index = tasks.indexOf(task); //OBTENER EL INDEX
        const tempTasks = [...tasks]; // OBTENER TODAS LAS TAREAS
        tempTasks[index].completed = !tempTasks[index].completed;

        //actualizar todo el listado de tareas
        setTasks(
            tempTasks
        )
    }

    function deletetask(task) {
        const index = tasks.indexOf(task); //OBTENER EL INDEX
        const tempTasks = [...tasks]; // OBTENER TODAS LAS TAREAS
        tempTasks.splice(index, 1);
        //actualizar todo el listado de tareas
        setTasks(
            tempTasks
        )
    }

    function addTask(task) {
        const index = tasks.indexOf(task); //OBTENER EL INDEX
        const tempTasks = [...tasks]; // OBTENER TODAS LAS TAREAS

        tempTasks.push(task);
        //actualizar todo el listado de tareas
        setTasks(
            tempTasks
        )
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    Title
                                </th>
                                <th scope='col'>
                                    Description
                                </th>
                                <th scope='col'>
                                    Priority
                                </th>
                                <th scope='col'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {tasks.map((tasks, index) => {
                                return (
                                    <TaskComponent
                                        key={index}
                                        task={tasks}
                                        complete={completeTask}
                                        remove={deletetask}

                                    >
                                    </TaskComponent>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
                <Taskform
                    add={addTask}
                ></Taskform>
            </div>

        </div >
    );
};

export default TaskListComponent;
