import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom';


const LoginFormik = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }


    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                initialValues={initialCredentials}
                // yup validation schema
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                    navigate('/profile');
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
        </div >
    );
}

export default LoginFormik;
