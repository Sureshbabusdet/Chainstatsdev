import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Seo from '../../components/Seo.js';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { ACTION_ROUTES } from '../../constants/constant.js';
import { Spinner } from 'react-bootstrap';

ResetPassword.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ResetPassword() {
    const router = useRouter();
    const { token } = router.query;
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const initialValues = {
        old_password: '',
        password: '',
        password_confirmation: ''
    };

    const metaData = {
        title: 'Login - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Login - ChainStats - Unleash the data',
        url: router.asPath,
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Old Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('token', token);
            formData.append('password', values.password);
            formData.append('password_confirmation', values.password_confirmation);
            
            const response = await axios.post(ACTION_ROUTES.resetPasswordAPI, formData);

            if (response.status === 200) {
                toast.success(response.data.message);
                router.push('/login');
            } else {
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
        <>
            <Seo {...metaData} />

            <section className="header-space pt-60 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="login__wrapper">
                                <div className="sec_heading text-center mb-40">
                                    <h4>Reset Password</h4>
                                </div>
                                <div className="profile__password">
                                    <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                        {({ isSubmitting, errors, touched }) => (
                                            <Form className="needs-validation" noValidate>
                                                <div className="row">
                                                    <div className="col-12">
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
                                                    <div className="col-12">
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
                                                        <button type="submit" className="gradient-text-btn rounded-full mb-0" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Change Password'}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// export async function getServerSideProps(context) {
//     const cookies = parseCookies(context);
//     const token = cookies.token;

//     // If token exists, redirect to dashboard
//     if (token) {
//         return {
//             redirect: {
//                 destination: '/', // Redirect to dashboard
//                 permanent: false,
//             },
//         };
//     }

//     // If token doesn't exist, continue rendering the login page
//     return {
//         props: {}, // No props needed for the login page
//     };
// }