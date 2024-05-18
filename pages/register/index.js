import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Link from 'next/link';
import Image from 'next/image';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant.js';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';
import { parseCookies, setCookie } from 'nookies';


Register.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function Register() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state
    const { address, chainId, connectWallet, disconnectWallet, getNetworkMetadata } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    const metaData = {
        title: 'Register - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Register - ChainStats - Unleash the data',
        url: router.asPath,
    };


    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .matches(/^[a-z0-9_]+$/, 'Username can only contain lowercase letters, numbers, and underscores'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const walletLogin = async (address) => {
        try {
            const formData = new FormData();
            formData.append('wallet_id', address);
            const response = await axios.post(ACTION_ROUTES.WalletLoginAPI, formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setCookie(null, 'token', token, { path: '/' });
            setCookie(null, 'currentuser', response.data?.user.id, { path: '/' });
            localStorage.setItem('islogin', '1');
            localStorage.setItem('username', response.data.user.username);
            toast.success('Login Successfull Done!');
            router.push('/');
            
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
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
    };

    useEffect(() => {
        if (address && isLoginClicked === true) {
            walletLogin(address);
        }
    }, [address, isLoginClicked]);

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('username', values.username);

        const response = await axios.post(ACTION_ROUTES.RegisterAPI, formData);

        if (response.data.errors && Array.isArray(response.data.errors)) {
            const errorsObject = {};
            response.data.errors.forEach((error) => {
                errorsObject[error.code] = error.message;
            });

            setErrors(errorsObject);
            setSubmitting(false);
            setLoading(false);

            return;
        } else {
            toast.success(response.data.message);
        }

        router.push('/login');
        setLoading(false);
    };


    return (
        <>
            <Seo {...metaData} />
            <section className="header-space pt-60 pb-60    ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="login__wrapper">
                                <div className="sec_heading text-center">
                                    <h4>Register</h4>
                                    <p className='paragraph'>Already have an account? <Link href="/login">Sign in </Link></p>
                                </div>
                                <div className="login__form">
                                    <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                        {({ isSubmitting, errors, touched }) => (
                                            <Form action="#">
                                                <div className="ct-form-group">
                                                    <label>Username <span>*</span></label>
                                                    <div className="position-relative">
                                                        <Field type="text" name="username" placeholder="Enter Username" className={'input_design' + (errors.username && touched.username ? ' is-invalid' : '')} autoComplete="off" />
                                                        <span className="ct-form-icon">
                                                            <i className="fa-solid fa-user"></i>
                                                        </span>
                                                    </div>
                                                    <ErrorMessage name="username" component="div" className="error-message" />
                                                </div>
                                                <div className="ct-form-group">
                                                    <label>Email <span>*</span></label>
                                                    <div className="position-relative">
                                                        <Field type="text" name="email" placeholder="Enter your email" className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')} autoComplete="off" />
                                                        <span className="ct-form-icon">
                                                            <i className="fa-light fa-envelope"></i>
                                                        </span>
                                                    </div>
                                                    <ErrorMessage name="email" component="div" className="error-message" />
                                                </div>
                                                <div className="ct-form-group">
                                                    <div className='d-flex justify-content-between mb-1'>
                                                        <label className='mb-0'>Password <span>*</span></label>
                                                        <Link href="/forgot-password">Forgot Password?</Link>
                                                    </div>
                                                    <div className="position-relative">
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
                                                <button type="submit" className="gradient-text-btn w-100 rounded-full mb-20" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Sign Up'}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <div className="login__signup text-center">
                                        <p>Or <Link href="/login">Sign Up</Link> with Metamask</p>
                                    </div>
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
    return {
        props: {},
    };
}