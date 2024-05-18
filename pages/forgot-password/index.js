import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Link from 'next/link';
import Image from 'next/image';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant.js';
import { toast } from 'react-toastify';

ForgotPassword.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false); // Added loading state

    const router = useRouter();

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('email', values.email);

            const response = await axios.post(ACTION_ROUTES.ForgotAPI, formData);
            toast.success(response.data.message);
            resetForm();
            setLoading(false);

        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    // Handle forbidden error
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        // You can set individual error messages for each field here
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                        // Handle other error codes if needed
                    });
                } else {
                    // Handle other errors
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

    const metaData = {
        title: 'Forgot Password - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Forgot Password - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <section className="header-space pt-60 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="login__wrapper">
                                <div className="sec_heading text-center mb-40">
                                    <h4>Reset Password</h4>
                                    <p className='paragraph'>We will send a password reset link</p>
                                </div>
                                <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form action="#">
                                            <div className="ct-form-group">
                                                <label>Email <span>*</span></label>
                                                <div className="position-relative">
                                                    <Field type="email" name="email" placeholder="Enter your email" className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <span className="ct-form-icon">
                                                        <i className="fa-light fa-envelope"></i>
                                                    </span>
                                                </div>
                                                <ErrorMessage name="email" component="div" className="error-message" />
                                            </div>
                                            <button type="submit" className="gradient-text-btn w-100 rounded-full" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Wait...</span> : 'Submit'}</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}