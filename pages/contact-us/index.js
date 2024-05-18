import MainLayout from '../../layouts/main/nav/MainLayout';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import Select from 'react-select'
import { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import { Country } from 'country-state-city';
import { ACTION_ROUTES } from '../../constants/constant';

ContactUs.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#0f0f0f',
        borderColor: state.isFocused ? '#7b7b7b' : '#0f0f0f',
        borderRadius: '40px',
        padding: '8px 20px',
        '&:hover': {
            borderColor: '#7b7b7b',
        },
    }),
    input: (provided, state) => ({
        ...provided,
        color: 'white',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#0f0f0f' : '#0f0f0f',
        color: state.isSelected ? 'white' : 'inherit',
        '&:hover': {
            backgroundColor: '#2e2e2e',
        },
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'white',
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '0f0f0f', // Change menu background color
        color: 'white',
    }),
};

export default function ContactUs() {
    const [loading, setLoading] = useState(false); // Added loading state

    const [selectedCountry, setSelectedCountry] = useState(null);
    const selectInputRef = useRef();

    const router = useRouter();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    // Function to handle checkbox state change
    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };;

    const metaData = {
        title: 'Contact Us - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Contact Us - ChainStats - Unleash the data',
        url: router.asPath,
    };

    const onClear = () => {
        selectInputRef.current.clearValue();
    };

    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
        checkbox: false,
    };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
        checkbox: Yup.bool().required('Checkbox must be checked'),
        country: Yup.bool(),
    });

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };


    const handleContactSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        setLoading(true);
        try {
            var form_data = new FormData();

            for (var key in values) {
                form_data.append(key, values[key]);
            }
            if (selectedCountry) {
                form_data.append('country', selectedCountry.value);
            }

            const response = await axios.post(ACTION_ROUTES.ContactUsAPI, form_data);

            if (response.status === 200) {
                toast.success(response.data.message);
                resetForm();
                onClear();
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
            <section className="contact__area pb-60 pt-60 header-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10 col-xl-10">
                            <div className="contact__wrapper">
                                <div className="sec_heading text-center mb-40">
                                    <h4>Get in Touch</h4>
                                    <p className='paragraph'>Welcome to our Contact Us page. We value your feedback and inquiries. Please feel free to reach out to us using the contact information provided below</p>
                                </div>
                                <div className="contact__form">
                                    <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleContactSubmit}>
                                        {({ isSubmitting, errors, touched }) => (
                                            <Form >
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        <div className="ct-form-group">
                                                            <label>Name <span>*</span></label>
                                                            <div className="position-relative">
                                                                <Field
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Enter Name"
                                                                    className={'input_design' + (errors.name && touched.name ? ' is-invalid' : '')}
                                                                />
                                                                <span className="ct-form-icon">
                                                                    <i className="fa-light fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <ErrorMessage name="name" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="ct-form-group">
                                                            <label>Email <span>*</span></label>
                                                            <div className="position-relative">
                                                                <Field
                                                                    type="text"
                                                                    name="email"
                                                                    placeholder="Enter Email"
                                                                    className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')}
                                                                />
                                                                <span className="ct-form-icon">
                                                                    <i className="fa-light fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <ErrorMessage name="email" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-md-6">
                                                        <div className="ct-form-group">
                                                            <label>Subject <span>*</span></label>
                                                            <div className="position-relative">
                                                                <Field
                                                                    type="text"
                                                                    name="subject"
                                                                    placeholder="Enter Subject"
                                                                    className={'input_design' + (errors.subject && touched.subject ? ' is-invalid' : '')}
                                                                />
                                                                <span className="ct-form-icon">
                                                                    <i className="fa-regular fa-notes"></i>                                                                </span>
                                                            </div>
                                                            <ErrorMessage name="subject" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-md-6">
                                                        <div className="ct-form-group">
                                                            <label>Country</label>
                                                            <div className="position-relative react-input">
                                                                <span className="ct-form-icon">
                                                                    <i className="fa-solid fa-globe"></i>
                                                                </span>
                                                                <Select
                                                                    ref={selectInputRef}
                                                                    name='country'
                                                                    className="custom-react-select"
                                                                    options={Country.getAllCountries().map((country) => ({
                                                                        label: country.name,
                                                                        value: country.isoCode,
                                                                    }))}
                                                                    isSearchable={true}
                                                                    onChange={handleCountryChange}
                                                                    instanceId={'countrycontact'}
                                                                    value={selectedCountry}
                                                                    styles={customStyles}
                                                                    placeholder={'Select Countries'}
                                                                />
                                                            </div>
                                                            <ErrorMessage name="country" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="ct-form-group">
                                                            <label>Message <span>*</span></label>
                                                            <div className="position-relative">
                                                                <Field
                                                                    as="textarea"
                                                                    name="message"
                                                                    placeholder="Enter Your Message"
                                                                    className={(errors.message && touched.message ? ' is-invalid' : '')}
                                                                />
                                                                <span className="ct-form-icon">
                                                                    <i className="fa-light fa-envelope"></i>
                                                                </span>
                                                            </div>
                                                            <ErrorMessage name="message" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="contact__bottom d-flex flex-column flex-md-row align-items-center justify-content-between">
                                                            <div className="contact__agree d-flex flex-column ">
                                                                <label className="custom-checkbox d-block">
                                                                    <Field
                                                                        className="m-check-input"
                                                                        type="checkbox"
                                                                        name="checkbox"
                                                                        id="m-lock"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={(e) => handleCheckboxChange(e)}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                    <span className="label-text">Allow to all <Link href={'/privacy-policy'}><a target='_blank'>terms &amp; condition</a></Link></span>
                                                                </label>
                                                                {touched.checkbox && !isCheckboxChecked && <div className="error-message">Checkbox must be checked</div>}
                                                            </div>
                                                            <button type="SUBMIT" className="gradient-text-btn mt-4 mt-md-0 rounded-full mb-0" >
                                                                {loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Send Message'}</button>

                                                        </div>
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