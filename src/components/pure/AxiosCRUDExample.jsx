import React from 'react';
import { getAllUsers, login, getUserByID, createUser, updateUser, deleteUser } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const AxiosCRUDExample = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const initialCredentials = {
        email: '',
        password: ''
    }
    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('login fail');
                }
            })
            .catch((error) => {
                alert(`something is wrong: ${error}}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => {
                console.log('finally');
            });
    }

    const obtainAllUsers = (page) => {
        getAllUsers(page)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('not users')
                }

            })
            .catch((error) => {
                alert(`something is wrong ${error}`)
            })
            .finally(() => {
                console.log('finally');
            })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('not user found')
                }

            })
            .catch((error) => {
                alert(`something is wrong ${error}`)
            })
            .finally(() => {
                console.log('finally');
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('user no created')
                }
            })
            .catch((error) => {
                alert(`something is wrong ${error}`)
            })
            .finally(() => {
                console.log('finally');
            })
    }

    const updateNewUser = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('user no edit')
                }
            })
            .catch((error) => {
                alert(`something is wrong ${error}`)
            })
            .finally(() => {
                console.log('finally');
            })
    }

    const deleteNewUser = (id, name, job) => {
        deleteUser(id, name, job)
            .then((response) => {

                if (response.status && response.status === 204) {
                    alert(JSON.stringify(response.data));
                    alert('User Deleted');
                } else {
                    throw new Error('user no DELET')
                }
            })
            .catch((error) => {
                alert(`something is wrong ${error}`)
            })
            .finally(() => {
                console.log('finally');
            })
    }
    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                initialValues={initialCredentials}
                // yup validation schema
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
                {/* we obtain props from formik */}

                {({ errors, touched, isSubmitting, handleSubmit, handleBlur }) => (

                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="Email" />
                        {
                            errors.email && touched.email && (
                                < ErrorMessage name="email" component="div"></ErrorMessage>

                            )
                        }
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" placeholder="Password" />
                        {
                            errors.password && touched.password && (
                                < ErrorMessage name='password' component="div"></ErrorMessage>
                            )
                        }

                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>

                )
                }



            </Formik>

            {/* buttom to test api */}
            <hr />
            <div>
                <button onClick={() => obtainAllUsers(1)}>all users page 1</button>
                <button onClick={() => obtainAllUsers(2)}>all users page 2</button>
                <hr />
                <button onClick={() => obtainUserByID(2)}>obtain user id 2</button>
                <hr />
                <button onClick={() => createNewUser('jorge', 'programing')}>Create User</button>
                <hr />
                <button onClick={() => updateNewUser(21, 'jorge1', 'programin2')}>Update User</button>
                <hr />
                <button onClick={() => deleteNewUser(21)}>Delete User</button>
            </div>
        </div >
    );
}

export default AxiosCRUDExample;
