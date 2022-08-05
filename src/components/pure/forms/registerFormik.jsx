
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {
    let user = new User();
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = yup.object().shape(
        {
            username: yup.string()
                .min(6, 'Name too short')
                .max(12, 'name too long')
                .required(),
            email: yup.string()
                .email('Invalid Email Format')
                .required('Email is required'),
            // role: yup.string()
            //     .oneOf([ROLES.user, ROLES.ADMIN], 'you must select a rol user/admin ')
            //     .required('Rol es required'),
            password: yup.string()
                .min(8, 'password too short')
                .required('Password is required'),
            confirm: yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: yup.string().oneOf(
                        [yup.ref("password"),
                            'passwords must match!'
                        ]
                    )
                })
                .required('you must confirm the password')
        }
    )

    const submit = () => {
        console.log('create user');
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    console.log('aka');
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >


                {({ values, errors, touched, isSubmitting, handleSubmit, handleBlur }) => (

                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field type="text" id="username" name="username" placeholder="Username" />
                        {
                            errors.username && touched.username && (
                                < ErrorMessage name="username" component="div"></ErrorMessage>

                            )
                        }

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

                        <label htmlFor="confirm">Confirm password</label>
                        <Field type="password" id="confirm" name="confirm" placeholder="confirm" />
                        {
                            errors.confirm && touched.confirm && (
                                < ErrorMessage name='confirm' component="div"></ErrorMessage>
                            )
                        }

                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending...</p>) : null}
                    </Form>

                )

                }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
