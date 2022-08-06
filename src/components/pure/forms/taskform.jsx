import React from 'react'
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Taskform({ add, length }) {




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

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskShema = Yup.object().shape({
        name: Yup.string()
            .required(),
        description: Yup.string()
            .required(),
        level: Yup.string()
            .required()
    })

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        );
        add(newTask);
    }

    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={taskShema}
                onSubmit={async (values) => {
                    console.log('aka');
                    await new Promise((r) => setTimeout(r, 1000));
                    // alert(JSON.stringify(values, null, 2));
                    addTask(values)
                }}
            >

                {({ values, errors, touched, isSubmitting, handleSubmit, handleBlur }) =>
                (
                    <Form>
                        <label htmlFor="name">name</label>
                        <Field type="text" id="name" name="name" placeholder="Name" className='form-control form-control-lg mb-2' />
                        {
                            errors.name && touched.name && (
                                < ErrorMessage name="name" component="div"></ErrorMessage>

                            )
                        }
                        <label htmlFor="description">Description</label>
                        <Field type="text" id="description" name="description" placeholder="Description" className='form-control form-control-lg mb-2' />
                        {
                            errors.description && touched.description && (
                                < ErrorMessage name="description" component="div"></ErrorMessage>

                            )
                        }
                        <label htmlFor="level">Level</label>
                        <Field name="level" label="Level" as="select" className='form-control form-control-lg mb-2'>
                            <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                            <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                            <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>

                        {
                            errors.level && touched.level && (
                                < ErrorMessage name="level" component="div"></ErrorMessage>

                            )
                        }

                        <button type='submit' className='btn btn-success btn-lg m-2'>
                            {length === 0 ? 'Create Task' : 'Add Task'}
                        </button>

                        {isSubmitting ? (<p>Sending...</p>) : null}

                    </Form>
                )

                }

            </Formik>

        </div>

        // <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        //     <div className='form-outline flex-fill'>
        //         <input ref={nameRef} id="inputName" type='text' placeholder='Name' className='form-control form-control-lg mb-2' required autoFocus />
        //         <input ref={descriptionRef} id="inputDescription" type='text' placeholder='Description' className='form-control form-control-lg mb-2' required />
        //         <label htmlFor='selectLevel' className=' sr-only'>Priority</label>
        //         <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
        //             <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
        //             <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
        //             <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
        //         </select>
        //         <button type='submit' className='btn btn-success btn-lg m-2'>
        //             {length === 0 ? 'Create Task' : 'Add Task'}
        //         </button>
        //     </div>


        // </form>
    )
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};
