import React, { useState } from 'react';
import Image from 'next/image';
import { ACTION_ROUTES } from '../constants/constant';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const ChangePassword = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const initialValues = {
        old_password: '',
        password: '',
        password_confirmation: ''
    };

    const validationSchema = Yup.object().shape({
        old_password: Yup.string().required('Old Password is required'),
        password: Yup.string().required('Old Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    const handleSubmit = async (values, { setSubmitting, setErrors,resetForm  }) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage

            const formData = new FormData();
            formData.append('old_password', values.old_password);
            formData.append('password', values.password);
            formData.append('password_confirmation', values.password_confirmation);
            
            const response = await axios.post(ACTION_ROUTES.ChangePasswordAPI, formData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            if (response.status === 200) {
                // Display response message
                toast.success(response.data.message);
                resetForm();

                // router.push('/');
            } else {
                // Handle other status codes if needed
                // e.g., toast.error(response.data.error);
                toast.error('Something went wrong. Please try again later.');
            }
            setLoading(false);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'password') {
                            setErrors({ old_password: error.message });
                        }
                    });
                } else {
                    console.error('Something Went Wrong:', error);
                    toast.error('Please try again later.');
                }
            } else {
                console.error('Something Went Wrong:', error);
                toast.error('Please try again later.');
            }
            setSubmitting(false);
            setLoading(false);
        }
    };
    
    return (
        <div className="profile__password">
            <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, errors, touched }) => (
                    <Form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="ct-form-group">
                                    <label>Old Password</label>
                                    <div className='position-relative'>
                                        <Field type={showPassword ? "text" : "password"} name="old_password" placeholder="Enter old password" className={'input_design' + (errors.old_password && touched.old_password ? ' is-invalid' : '')} autoComplete="off" />                                        
                                        <span className="ct-form-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="old_password" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-6">
                                <div className="ct-form-group">
                                    <label>New Password</label>
                                    <div className='position-relative'>
                                        <Field type={showPassword ? "text" : "password"} name="password" placeholder="Enter New password" className={'input_design' + (errors.password && touched.password ? ' is-invalid' : '')} autoComplete="off" />                                        <span className="ct-form-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="password" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-6">
                                <div className="ct-form-group">
                                    <label>Confirm Password</label>
                                    <div className='position-relative'>
                                        <Field type={showPassword ? "text" : "password"} name="password_confirmation" placeholder="Enter password" className={'input_design' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : '')} autoComplete="off" />                                        
                                        <span className="ct-form-icon">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="password_confirmation" component="div" className="error-message" />
                                </div>
                            </div>
                            <div className="col-xxl-12 col-md-12 text-center">
                                <button type="submit" className="gradient-text-btn rounded-full mb-20" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Change Password'}</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePassword;