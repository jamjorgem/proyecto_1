import React from 'react'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

export default function Taskform({ add, length }) {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id="inputName" type='text' placeholder='Name' className='form-control form-control-lg mb-2' required autoFocus />
                <input ref={descriptionRef} id="inputDescription" type='text' placeholder='Description' className='form-control form-control-lg mb-2' required />
                <label htmlFor='selectLevel' className=' sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg m-2'>
                    {length === 0 ? 'Create Task' : 'Add Task'}
                </button>
            </div>


        </form>
    )
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};
