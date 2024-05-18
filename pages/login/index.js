import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Link from 'next/link';
import Image from 'next/image';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '../../constants/constant.js';
import { parseCookies, setCookie } from 'nookies';
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';
import RenderResult from 'next/dist/server/render-result.js';
import { Spinner } from 'react-bootstrap';

Login.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function Login() {
    const router = useRouter();
    const supportChainIds = [1, 4, 137];

    const { address, chainId, connectWallet, disconnectWallet, getNetworkMetadata } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const initialValues = {
        email: '',
        password: ''
    };

    const metaData = {
        title: 'Login - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Login - ChainStats - Unleash the data',
        url: router.asPath,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const walletLogin = async (address) => {
        try {
            const formData = new FormData();
            formData.append('wallet_id', address);
            const response = await axios.post(ACTION_ROUTES.WalletLoginAPI, formData);
            const { token } = response.data;

            if (response.data.errors && Array.isArray(response.data.errors)) {
                const errorsObject = {};
                response.data.errors.forEach((error) => {
                    errorsObject[error.code] = error.message;
                });
            
                setErrors(errorsObject);
                setSubmitting(false);
                return; // Exit the function to prevent further execution
            }
            
            localStorage.setItem('token', token);
            setCookie(null, 'token', token, { path: '/' });
            setCookie(null, 'currentuser', response.data?.user.id, { path: '/' });
            localStorage.setItem('islogin', '1');
            localStorage.setItem('f_name', response.data.user.f_name);

            toast.success('Login Successfull Done!');
            router.push('/');

        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                    });

                } else {
                    console.error('Something Went Wrong:', error);
                }
            } else {
                console.error('Something Went Wrong:', error);
            }
        }
    };
    useEffect(() => {
        if (address && isLoginClicked === true) {
            walletLogin(address);
        }
    }, [address,isLoginClicked]);

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const formData = new FormData();
            formData.append('email', values.email);
            formData.append('password', values.password);
    
            const response = await axios.post(ACTION_ROUTES.LoginAPI, formData);
            const { token } = response.data;
    
            // Handle validation errors if any
            if (response.data.errors && Array.isArray(response.data.errors)) {
                const errorsObject = {};
                response.data.errors.forEach((error) => {
                    errorsObject[error.code] = error.message;
                });
    
                setErrors(errorsObject);
                setSubmitting(false);
                return; // Exit the function to prevent further execution
            }
    
            // If no validation errors, proceed with login
            const now = new Date();
            const expiresIn = 3600; // Expiration time in seconds (1 hour)
            now.setTime(now.getTime() + expiresIn * 1000);
    
            // Set the cookie with expiration time
            setCookie(null, 'token', token, {
                maxAge: expiresIn,
                path: '/',
                expires: now,
                secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
                sameSite: 'strict', // Prevents the cookie from being sent in cross-origin requests
            });
            setCookie(null, 'currentuser', response.data?.user.id, { path: '/' });
    
            localStorage.setItem('token', token);
            localStorage.setItem('islogin', '1');
            localStorage.setItem('f_name', response.data?.user.f_name);
            toast.success('Login Successful!');
    
            router.push('/');
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'email') {
                            setErrors({ [error.code]: error.message });
                        }
                        
                        if (error.code === 'password') {
                            setErrors({ password: error.message });
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
        }
        setSubmitting(false);
    };
    

    return (
        <>
            <Seo {...metaData} />
            <section className="header-space pt-60 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="login__wrapper">
                                <div className="sec_heading text-center">
                                    <h4>Login</h4>
                                    <p className='paragraph'>{"Don't have an account yet?"} <Link href="/register">Register </Link></p>
                                </div>
                                <div className="login__form">
                                    <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                        {({ isSubmitting, errors, touched }) => (
                                            <Form className="needs-validation" noValidate>
                                                <div className="ct-form-group">
                                                    <label>Email <span>*</span></label>
                                                    <div className='position-relative'>
                                                        <Field type="text" name="email" placeholder="Enter your email" className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')} autoComplete="off" />
                                                        <span className="ct-form-icon">
                                                            <i className="fa-light fa-envelope"></i>
                                                        </span>
                                                    </div>
                                                    <ErrorMessage name="email" component="div" className="error-message" />
                                                </div>
                                                <div className="ct-form-group">
                                                    <div className="d-flex align-items-center justify-content-between mb-10">
                                                        <label className='mb-0'>Password <span>*</span></label>
                                                        <Link href="/forgot-password">Forgot Password?</Link>
                                                    </div>
                                                    <div className="position-relative">
                                                        <div className='position-relative'>
                                                            <Field type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className={'input_design' + (errors.password && touched.password ? ' is-invalid' : '')} autoComplete="off" />
                                                            <span className="ct-form-icon">
                                                                <i className="fa-light fa-lock"></i>
                                                            </span>
                                                            <span className="login__input-password-visible" onClick={() => setShowPassword(!showPassword)}>
                                                                <i className={showPassword ? "fa-light fa-eye-slash" : "fa-light fa-eye"}></i>
                                                            </span>
                                                        </div>
                                                        <ErrorMessage name="password" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                                <button type="submit" className="gradient-text-btn w-100 rounded-full mb-20" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Sign In'}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <div className="login__signup text-center">
                                        <p>Or <Link href="/register">Sign In</Link> with Metamask</p>
                                    </div>
                                    {/* Address: {address}
                                    <br />
                                    Chain ID: {chainId}
                                    <br />

                                    {address && (
                                        <button onClick={disconnectWallet}>
                                            Disconnect
                                        </button>
                                    )} */}
                                    <button className='gradient-text-btn w-100 rounded-full' onClick={() => { connectWallet("injected"); setIsLoginClicked(true); }}>
                                        <Image width={21} height={22} src="/img/metamask.png" alt="" />
                                        <span className='d-inline-block ms-2'>Metamask</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const token = cookies.token;

    // If token exists, redirect to dashboard
    if (token) {
        return {
            redirect: {
                destination: '/', // Redirect to dashboard
                permanent: false,
            },
        };
    }

    // If token doesn't exist, continue rendering the login page
    return {
        props: {}, // No props needed for the login page
    };
}