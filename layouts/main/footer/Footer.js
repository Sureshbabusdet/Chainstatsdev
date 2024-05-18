import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
// import * as FaIcons from "react-icons/fa";
import Image from 'next/future/image'
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ACTION_ROUTES } from "../../../constants/constant";
import { toast } from "react-toastify";

const Footer = ({ data, isonlyTop }) => {
    const [loading, setLoading] = useState(false); // Added loading state
    
    const facebook = process.env.SOCIAL_FACEBOOK;
    const instagram = process.env.SOCIAL_INSTAGRAM;
    const linkdin = process.env.SOCIAL_LINKEDIN;
    const twitter = process.env.SOCIAL_TWITTER;
    const dribbble = process.env.SOCIAL_DRIBBBLE;

    const router = useRouter();
    const locale = router.locale;


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

            const response = await axios.post(ACTION_ROUTES.SubScribeAPI, formData);

            if (response.data.errors && Array.isArray(response.data.errors)) {
                const errorsObject = {};
                response.data.errors.forEach((error) => {
                    errorsObject[error.code] = error.message;
                });
            
                setErrors(errorsObject);
                setLoading(false);
                setSubmitting(false);
                return; // Exit the function to prevent further execution
            }

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

    return (
        <>
            <div className="footer__area footer__style-2">
                {isonlyTop && (
                    <div className="footer__top">
                        <div className="footer__top-border">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__widget mb-50 footer-col-4-1">
                                            <div className="footer__info">
                                                <div className="footer__logo">
                                                    <Link href="#">
                                                        <a> <Image className="logo-white img-fluid mb-4" layout="raw" src="/img/logo.png" alt="logo" width={200} height={70} /></a>
                                                    </Link>
                                                </div>
                                                <p className="paragraph">ChainStats is a cutting edge on-chain data focused company building towards the vision of unlocking the true potential of what blockchain data can bring to our world.</p>

                                                <div className="footer__social footer__social-2">
                                                   {data.facebook && <Link href={data.facebook || facebook}><a target='_blank'><i className="fa-brands fa-facebook-f"></i></a></Link>} 
                                                   {data.twitter &&<Link href={data.twitter || twitter}><a target='_blank'><i className="fa-brands fa-twitter"></i></a></Link>} 
                                                    {data.linkedin &&<Link href={data.linkedin || linkdin}><a target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></Link>} 
                                                    {data.drible &&<Link href={data.drible || dribbble}><a target='_blank'><i className="fa-brands fa-dribbble"></i></a></Link>} 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__widget footer-col-2-2 mb-50">
                                            <h3 className="footer__widget-title">Marketplace</h3>

                                            <ul>
                                                <li><Link href="/about-us"><a>About us</a></Link></li>
                                                <li><Link href="/charts"><a>Charts</a></Link></li>
                                                <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                                <li><Link href="/contact-us"><a>Support</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__widget footer-col-2-3 mb-50">
                                            <h3 className="footer__widget-title">Community</h3>
                                            <ul>
                                                <li><Link href="/about-us"><a>Our Team</a></Link></li>
                                                <li><Link href="/wallet"><a>Wallet</a></Link></li>
                                                <li><Link href="/career"><a>Career</a></Link></li>
                                                <li><Link href="/faq"><a>Support FAQ</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="footer__widget footer-col-2-4 mb-50">
                                            <h3 className="footer__widget-title">Subscribe</h3>
                                            <div className="footer__subscribe footer__subscribe-2">
                                                <p className="paragraph">Signup for our newsletter to get the latest news in your inbox.</p>
                                                <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                                    {({ isSubmitting, errors, touched }) => (
                                                        <Form action="#">
                                                            <div className="footer__subscribe-form position-relative">
                                                                <div className="footer__subscribe-input">
                                                                    <Field type="email" name="email" placeholder="Enter Your Email" className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                                    <i className="fa-light fa-envelopes"></i>
                                                                </div>
                                                                <button type="submit" className="gradient-text-btn footer__subscribe-input-btn" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Wait...</span> : 'Subscribe'}</button>
                                                            </div>
                                                            <ErrorMessage name="email" component="div" className="error-message" />
                                                        </Form>
                                                    )}
                                                </Formik>
                                                <p className="paragraph">Your email is safe with us. We dont spam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`footer__bottom ${!isonlyTop === true && 'withborder'}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__copyright">
                                    <p  className="paragraph">© 2023 <Link href="/"><a>ChainStats Inc.</a></Link> All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__menu text-sm-end">
                                    <Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link>
                                    <Link href="/imprint"><a target="_blank">Imprint</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
