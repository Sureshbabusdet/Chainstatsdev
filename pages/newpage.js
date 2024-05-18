import axios from 'axios';
import Image from 'next/future/image';
import { useEffect, useState, useRef } from 'react';
import { Badge, Form, Modal, Spinner } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, validateForm } from 'formik';
import { Country, City } from 'country-state-city';
import * as Yup from 'yup';
import Select from 'react-select'
import Link from 'next/link';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';


const WalletData = [
    {
        id: 1,
        image: '/img/icons/chainlink.png',
        wallet_id: 'NASDAQ Stock Market',
        name: 'NASDAQ + USA',
        network: 'NASDAQ & USA',
        price: '34,599'
    },
    {
        id: 2,
        image: '/img/icons/polygon.png',
        wallet_id: 'New York Stock Exchange',
        name: 'Polygon',
        network: 'Polygon',
        price: '22,955'
    },
    {
        id: 3,
        image: '/img/icons/Usdicon.png',
        wallet_id: 'NYSE Arca',
        name: 'Polygon',
        network: 'Ethereum',
        price: '55,234'
    }, {
        id: 4,
        image: '/img/icons/binance.png',
        wallet_id: 'Bursa Malaysia Berhad',
        name: 'Polygon',
        network: 'Ethereum + Coin',
        price: '42,878'
    }
]

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

export default function PaymentModel(props) {
    const selectInputRef = useRef();
    const validateRef = useRef();

    const [checkedtotalPrice, setcheckedTotalPrice] = useState(0);

    const [checkedItems, setcheckedItems] = useState([]);
    const [Totalamount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [HandlePlanType, setHandlePlanType] = useState(props.planData?.type);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const product = {
        description: "Designcode react hooks course",
        price: 19
    }

    const initialValues = {
        name: '',
        country: '',
        city: '',
        state: '',
        street: '',
        zipcode: '',
        taxnumber: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        street: Yup.string().required('Street is required'),
        zipcode: Yup.string().required('Zip/Postal code is required'),
        taxnumber: Yup.string(),
    });

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        setLoading(true);
        var form_data = new FormData();

        for (var key in values) {
            form_data.append(key, values[key]);
        }
        form_data.append('country', selectedCountry.value);

    };

    const handleNextButtonClick = () => {
        // Trigger form submission and validation
        validateRef.current.submitForm();
    };

    return (
        <div className='row'>
            <div className='col-md-8'>

                <div className='step-3'>
                    <h4>PayPal</h4>
                    <p className='mt-3 mb-2'>{"We'll guide you to PayPal to complete this step. Please be patient and do not skip or interrupt this process."}</p>
                    <p className='mb-4'>After verifying your details, PayPal will automatically redirect you back to TradingView. At this point, your payment method will be confirmed.
                    </p>

                    <Formik
                        innerRef={validateRef}
                        validateOnBlur={true}
                        validateOnChange={true}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="ct-form-group mt-3">
                                            <label>Your name <span>*</span></label>
                                            <div className="position-relative">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className={'input_design ps-4' + (errors.name && touched.name ? ' is-invalid' : '')}
                                                />
                                            </div>
                                            <ErrorMessage name="name" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <h4 className='mt-4 mb-3'>Address</h4>

                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>Country <span>*</span></label>
                                            <div className="position-relative react-input">
                                                <span className="ct-form-icon">
                                                    <i className="fa-solid fa-globe"></i>
                                                </span>
                                                <Select
                                                    className={`custom-react-select ${errors.country && 'is-invalid'}`}
                                                    options={Country.getAllCountries().map(country => ({ label: country.name, value: country.isoCode }))}
                                                    isSearchable={true}
                                                    onChange={handleCountryChange}
                                                    styles={customStyles}
                                                    placeholder={'Select Countries'}
                                                />
                                            </div>
                                            <ErrorMessage name="country" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>State/Region <span>*</span></label>
                                            <div className="position-relative react-input">
                                                <span className="ct-form-icon">
                                                    <i className="fa-solid fa-globe"></i>
                                                </span>
                                                <Select
                                                    name='state'
                                                    className={`custom-react-select ${errors.country && 'is-invalid'}`}
                                                    options={Country.getAllCountries().map(country => ({ label: country.name, value: country.isoCode }))}
                                                    isSearchable={true}
                                                    onChange={handleCountryChange}
                                                    styles={customStyles}
                                                    placeholder={'Select state/region'}
                                                />
                                            </div>
                                            <ErrorMessage name="state" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>City <span>*</span></label>
                                            <div className="position-relative">
                                                <Field
                                                    type="text"
                                                    name="city"
                                                    className={'input_design ps-4' + (errors.city && touched.city ? ' is-invalid' : '')}
                                                />
                                            </div>
                                            <ErrorMessage name="city" component="div" className="error-message" />
                                        </div>
                                    </div>


                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>Street <span>*</span></label>
                                            <div className="position-relative">
                                                <Field
                                                    type="text"
                                                    name="street"
                                                    className={'input_design ps-4' + (errors.street && touched.street ? ' is-invalid' : '')}
                                                />
                                            </div>
                                            <ErrorMessage name="street" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>Zip/Postal code <span>*</span></label>
                                            <div className="position-relative">
                                                <Field
                                                    type="text"
                                                    name="zipcode"
                                                    className={'input_design ps-4' + (errors.zipcode && touched.zipcode ? ' is-invalid' : '')}
                                                />
                                            </div>
                                            <ErrorMessage name="zipcode" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <div className="col-xxl-6 col-md-6">
                                        <div className="ct-form-group">
                                            <label>Tax Identification Number</label>
                                            <div className="position-relative">
                                                <Field
                                                    type="text"
                                                    name="taxnumber"
                                                    className={'input_design ps-4' + (errors.taxnumber && touched.taxnumber ? ' is-invalid' : '')}
                                                />
                                            </div>
                                            <ErrorMessage name="taxnumber" component="div" className="error-message" />
                                        </div>
                                    </div>

                                    <div className="col-xxl-12">
                                        <div className="contact__bottom d-sm-flex align-items-center justify-content-between">
                                            <div className="contact__agree d-flex align-items-center">
                                                <label className="custom-checkbox">
                                                    <input
                                                        className="m-check-input"
                                                        type="checkbox"
                                                        id="m-lock"
                                                        checked={isChecked}
                                                    />
                                                    <span className="checkmark"></span>
                                                    <span className="label-text">Allow to all <Link href={'/privacy-policy'}>terms &amp; condition</Link></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
            <div className='col-md-4'>
                <div className='pricetable-view'>
                    <button className='gradient-text-btn w-100' onClick={handleNextButtonClick}>Next</button>
                    <PaypalCheckoutButton product={product} />
                </div>
            </div>
        </div>
    );
}
