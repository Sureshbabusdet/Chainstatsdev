import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ACTION_ROUTES } from '../constants/constant';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import Select from 'react-select'
import { Country, City } from 'country-state-city';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 0.01%, rgba(255, 255, 255, 0.03) 100%)',
        color: '#fff',
        fontWeight: '600',
        borderColor: state.isFocused ? '#7b7b7b' : '#0f0f0f',
        borderRadius: '40px',
        padding: '8px 20px 8px 45px',
        '&:hover': {
            borderColor: '#7b7b7b',
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        textAlign: 'left'
    }),
    input: (provided, state) => ({
        ...provided,
        color: 'white',
        textAlign: 'left',
        // gridArea: 'unset',
        // display: 'none',
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

const UpdateProfile = ({ data }) => {   
    const router = useRouter();
    const [loading, setLoading] = useState(false); // Added loading state
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [citiesLoading, setCitiesLoading] = useState(false); // State for city loading
    console.log('data',data)
    useEffect(() => {
        // Set selected country and city based on data from API
        if (data.country && data.country !== 'null') {
            const country = Country.getAllCountries().find(
                (country) => country.isoCode === data.country
            );
            // console.log(country);
            setSelectedCountry({ label: country.name, value: country.isoCode });
        }
        if (data.city && data.country !== 'null') {
            const city = City.getCitiesOfCountry(data.country).find(
                (city) => city.name === data.city
            );
            setSelectedCity({ label: city.name, value: city.name });
        }
    }, [data.country, data.city]);

    const initialValues = {
        username: data.username,
        f_name: data.f_name,
        l_name: data.l_name,
        email: data.email,
        bio: data.bio,
        twitter: data.twitter,
        youtube: data.youtube,
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        f_name: Yup.string().required('First Name is required'),
        l_name: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        bio: Yup.string().required('Bio is required'),
        twitter: Yup.string(),
        youtube: Yup.string(),
    });

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedCity(null); // Reset city when country changes
    };


    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };


    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setLoading(true);
        var form_data = new FormData();
        for (var key in values) {
            form_data.append(key, values[key]);
        }
        if (selectedCountry) {
            form_data.append('country', selectedCountry.value);
        }
        if (selectedCity) {
            form_data.append('city', selectedCity.value);
        }
    
        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage

            const response = await axios.post(ACTION_ROUTES.UpdateProfileAPI, form_data, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            if (response.status === 200) {
                // Display response message
                toast.success(response.data.message);
                router.push('/profile');
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
        <Formik validateOnBlur={true} validateOnChange={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, errors, touched }) => (
                <Form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="ct-form-group">
                                <label>Username <span>*</span></label>
                                <div className="position-relative">
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Choose Username"
                                        className={'input_design' + (errors.username && touched.username ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-light fa-user"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-md-6">
                            <div className="ct-form-group">
                                <label>First Name <span>*</span></label>
                                <div className="position-relative">
                                    <Field
                                        type="text"
                                        name="f_name"
                                        placeholder="Enter First Name"
                                        className={'input_design' + (errors.f_name && touched.f_name ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-light fa-user"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="f_name" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-md-6">
                            <div className="ct-form-group">
                                <label>Last Name <span>*</span></label>
                                <div className="position-relative">
                                    <Field
                                        type="text"
                                        name="l_name"
                                        placeholder="Enter Last Name"
                                        className={'input_design' + (errors.l_name && touched.l_name ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-light fa-user"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="l_name" component="div" className="error-message" />
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
                                        <i className="fa-light fa-envelope"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                        </div>

                        <div className="col-xxl-12">
                            <div className="ct-form-group">
                                <label>Your Bio <span>*</span></label>
                                <div className="position-relative">
                                    <Field
                                        as="textarea"
                                        name="bio"
                                        placeholder="Enter Your bio"
                                        className={(errors.bio && touched.bio ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-light fa-info-circle"></i>
                                    </span>
                                </div>
                                <ErrorMessage name="bio" component="div" className="error-message" />
                            </div>
                        </div>

                        <div className="col-xxl-6 col-md-6">
                            <div className="ct-form-group">
                                <label>Twitter</label>
                                <div className="position-relative">
                                    <Field
                                        type="text"
                                        name="twitter"
                                        placeholder="twitter username"
                                        className={'input_design' + (errors.twitter && touched.twitter ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-brands fa-x"></i>
                                    </span>
                                    <div className='blue_tick_icon_form'>
                                        <Image width={18} height={18} src="/img/bluetick-img.png" alt="" />
                                        {/* <Image width={18} height={18} src="/img/close_icon.png" alt="" /> */}
                                    </div>
                                </div>
                                <ErrorMessage name="twitter" component="div" className="error-message" />
                            </div>
                        </div>

                        <div className="col-xxl-6 col-md-6">
                            <div className="ct-form-group">
                                <label>Youtube</label>
                                <div className="position-relative">
                                    <Field
                                        type="text"
                                        name="youtube"
                                        placeholder="youtube username"
                                        className={'input_design' + (errors.youtube && touched.youtube ? ' is-invalid' : '')}
                                    />
                                    <span className="ct-form-icon">
                                        <i className="fa-brands fa-youtube"></i>
                                    </span>
                                    <div className='blue_tick_icon_form'>
                                        <Image width={18} height={18} src="/img/bluetick-img.png" alt="" />
                                        {/* <Image width={18} height={18} src="/img/close_icon.png" alt="" /> */}
                                    </div>
                                </div>
                                <ErrorMessage name="youtube" component="div" className="error-message" />
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
                                        className="custom-react-select"
                                        options={Country.getAllCountries().map((country) => ({
                                            label: country.name,
                                            value: country.isoCode,
                                        }))}
                                        isSearchable={true}
                                        onChange={handleCountryChange}
                                        value={selectedCountry}
                                        styles={customStyles}
                                        placeholder={'Select Countries'}
                                    />
                                </div>
                                {/* Remove ErrorMessage for country */}
                            </div>
                        </div>
                        <div className={`col-xxl-6 col-md-6 ${!selectedCountry && 'd-none'}`}>
                            <div className="ct-form-group">
                                <label>City</label>
                                <div className="position-relative react-input">
                                    <span className="ct-form-icon">
                                        <i className="fa-light fa-city"></i>
                                    </span>
                                    {citiesLoading ? (
                                        <Spinner animation="border" role="status" />
                                    ) : (
                                        <Select
                                            className="custom-react-select"
                                            options={
                                                selectedCountry
                                                    ? City.getCitiesOfCountry(selectedCountry.value).map((city) => ({
                                                        label: city.name,
                                                        value: city.name,
                                                    }))
                                                    : []
                                            }
                                            isSearchable={true}
                                            onChange={handleCityChange}
                                            value={selectedCity}
                                            styles={customStyles}
                                            placeholder={'Select Cities'}
                                            isLoading={citiesLoading}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-12 text-center">
                            <button type="submit" className="gradient-text-btn rounded-full mb-20" disabled={isSubmitting || loading}>{loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Update'}</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UpdateProfile;