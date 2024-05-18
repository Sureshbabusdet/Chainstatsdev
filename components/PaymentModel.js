import axios from 'axios';
import Image from 'next/future/image';
import { useEffect, useState, useRef } from 'react';
import { Badge, Form, Modal, Spinner } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, validateForm } from 'formik';
import { Country, City, State } from 'country-state-city';
import * as Yup from 'yup';
import Select from 'react-select'
import Link from 'next/link';
import PaypalCheckoutButton from './PaypalCheckoutButton';


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
    const validateRef = useRef();
    const [checkedtotalPrice, setcheckedTotalPrice] = useState(0);
    const [checkedItems, setcheckedItems] = useState([]);
    const [Totalamount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [HandlePlanType, setHandlePlanType] = useState(props.planData?.type);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState('');
    const [formErrors, setFormErrors] = useState({ email: 'test' });
    const [isValidated, setisValidated] = useState(false);

    const [step, setStep] = useState(1);

    const product = {
        planid: props.planData.id,
        description: "Designcode react hooks course",
        price: Totalamount ? Totalamount : HandlePlanType ? props.planData.Annuallyprice : props.planData.Monthlyprice,
        plan_id: HandlePlanType ?  props.planData.plan_id_yearly: props.planData.plan_id,
    }

    const CheckhandlePlanType = (type) => {
        setHandlePlanType(type);
    }

    const handletermCheckboxChange = (e) => {
        setIsChecked(!isChecked);
    };;

    const handleCheckboxChange = (wallet) => {
        setcheckedItems((prevSelectedWallets) => {
            const updatedSelectedWallets = [...prevSelectedWallets];

            const index = updatedSelectedWallets.findIndex(item => item.id === wallet.id);

            if (index !== -1) {
                // If the wallet is already selected, remove it
                updatedSelectedWallets.splice(index, 1);
            } else {
                // If the wallet is not selected, add it
                updatedSelectedWallets.push(wallet);
            }

            return updatedSelectedWallets;
        });
    };

    const calculateTotalPrice = (items) => {
        const pricesArray = items.map(item => parseFloat(item.price.replace(',', '')));
        const totalPrice = pricesArray.reduce((acc, price) => acc + price, 0);
        return totalPrice;
    };

    useEffect(() => {
        setcheckedItems([])
        setHandlePlanType(props.planData?.type);
    }, [props.show]);



    useEffect(() => {
        const getTotalPaybleamound = HandlePlanType ? props.planData.Annuallyprice : props.planData.Monthlyprice;
        setTotalAmount(checkedtotalPrice + Number(getTotalPaybleamound));

    }, [checkedtotalPrice, HandlePlanType]);

    const initialValues = {
        name: '',
        // country: selectedCountry?.value,
        city: '',
        // state: selectedState?.value,
        street: '',
        zipcode: '',
        taxnumber: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        // country: Yup.string().required('Country is required'),
        // state: Yup.string().required('State/Region is required'),
        city: Yup.string().required('City is required'),
        street: Yup.string().required('Street is required'),
        zipcode: Yup.string().required('Zip/Postal code is required'),
        taxnumber: Yup.string().required('Tax Identification Number is required'),
    });

    const handleCountryChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedCountry(selectedOption);
            validateRef.current.setFieldError('country', '');
        } else {
            // setSelectedCountry(null);
        }
    };


    const handleStateChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedState(selectedOption);
            validateRef.current.setFieldError('state', '');
        } else {
            // setSelectedState('');
        }
    };

    const handleSubmit = async (values) => {
        // console.log('Updated Validated Forms',values);
        // Trigger form validation
        validateRef.current.validateForm().then((errors) => {
            if (Object.keys(errors).length === 0) {
                // If no validation errors, proceed with form submission
                setLoading(true);
                // Submit form data to your backend or process it accordingly
                setisValidated(true)
            } else {
                // Set form errors if validation fails
                setisValidated(false)
                setFormErrors(errors);
                // console.log('handle submit ', errors)
            }
        });
    };


    useEffect(() => {
        setStep(1)
    }, [props.show])

    useEffect(() => {
        // Call the function to calculate total price using map
        const calculatedTotalPrice = calculateTotalPrice(checkedItems);
        // Set the total price to the state
        setcheckedTotalPrice(calculatedTotalPrice);
    }, [checkedItems, Totalamount]);


    const CheckPaypalValidation = async () => {
        // Check if the checkbox is checked
        if (isChecked) {
            // If checked, proceed with form submission
            await validateRef.current.submitForm();
            handleSubmit();
        } else {
            // If not checked, display an error or perform any other action
            // console.log('Please agree to the terms and conditions');
            // You can display an error message or handle the situation as needed
        }
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSuccess = (details) => {
        // Handle successful payment
        console.log("Payment successful:", details);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen={true}
        >
            <Modal.Header className='justify-content-center border-0'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Image src="/img/logo.png" alt="logo" placeholder="empty" layout="raw" width={200} height={40} />
                </Modal.Title>
                <button className='btn-close' onClick={props.onHide} ><i className='fa-solid fa-close text-white fs-3'></i></button>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-md-8'>

                        {step !== 1 && <button className={`bg-transparent text-white border-0 mb-3 ${step === 3 || step === 2 ? 'ps-md-5' : ''}`} onClick={handlePrevStep}><i className='fa-solid fa-chevron-left me-2'></i> Back</button>}


                        {step === 1 && (
                            <div className='step-1'>
                                <h4 className='mb-3'>{props.planData?.planname}</h4>
                                <label className="billing-cycle-item mb-4">
                                    <label className="radio-wrap">
                                        <span className="wrapper-main">
                                            <input className="input-radio-pl" type="radio" name="billing_cycle" onChange={() => CheckhandlePlanType(true)} checked={HandlePlanType} value="y" />
                                            <span className="box-span"></span>
                                        </span>
                                    </label>
                                    <div className="box-spbilling-cycle-container">
                                        <p className="billing-cycle-pl">annually</p>
                                        {/* <span className="badge-box size-medium-PlSmolIm discount-badge">
                                            <span className="content-Pl"><span>SAVE 17%</span></span>
                                        </span> */}
                                    </div>
                                    <p className="description-Pl">{props.planData?.innerAnnually}</p>
                                    <div className="price-Pls"> {props.currency?.symbol}{Number(props.planData?.Annuallyprice)}/ year</div>
                                </label>
                                <label className="billing-cycle-item mb-4">
                                    <label className="radio-wrap">
                                        <span className="wrapper-main">
                                            <input className="input-radio-pl" type="radio" name="billing_cycle" onChange={() => CheckhandlePlanType(false)} checked={!HandlePlanType} value="y" />
                                            <span className="box-span"></span>
                                        </span>
                                    </label>
                                    <div className="box-spbilling-cycle-container">
                                        <p className="billing-cycle-pl">Monthly</p>
                                        <span className="badge-box size-medium-PlSmolIm">
                                            <span className="content-Pl"><span></span></span>
                                        </span>
                                    </div>
                                    <p className="description-Pl">{props.planData?.innerMonthly}</p>
                                    <div className="price-Pls">{props.currency?.symbol}{props.planData?.Monthlyprice}/month</div>
                                </label>
                            </div>
                        )}
                        {/* {step === 2 && (

                            <div className='step-2 ps-md-5'>
                                <h4>Real-time market data subscriptions</h4>
                                <p>{"Our paid plans don't give access to official real-time data directly from the exchanges unless this data is free by default. Most exchanges charge fees for the real-time data and you'll need to purchase that separately."} </p>
                                <ul className='market-filter mb-4 mt-4'>
                                    <li>Popular <span>8</span></li>
                                    <li>Stocks & Indices <span>46</span></li>
                                    <li>Futures <span>22</span></li>
                                </ul>
                                <div className='wallet-box checkwaller mb-4'>
                                    {WalletData.map((item, index) => (
                                        <label className='waller-list flex-column flex-md-row checklist' key={'wallet' + index} htmlFor={'wallet' + index}>
                                            <div className='d-flex align-items-center'>
                                                <Form.Check
                                                    type="checkbox"
                                                    id={'wallet' + index}
                                                    className='d-flex align-items-center me-3'
                                                    onChange={() => handleCheckboxChange(item)}
                                                    checked={checkedItems.some(checkedItem => checkedItem.id === item.id)}
                                                />
                                                <Image src={item.image} layout='raw' width={50} height={50} alt='image' />
                                                <div className='d-flex flex-column ms-3'>
                                                    <span id={`wallet-id-${index}`} className='wallet-id'>{item.wallet_id} <Badge bg="dark">Stocks</Badge></span>
                                                    <span className='label'>{item.name}</span>
                                                </div>
                                            </div>
                                            <h6 className=' mt-3 mt-md-0'>{props.currency?.symbol}{item.price}/ year</h6>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )} */}
                        {step === 2 && (
                            <div className='step-3 ps-md-5'>
                                <h4>PayPal</h4>
                                <p className='mt-3 mb-2'>{"We'll guide you to PayPal to complete this step. Please be patient and do not skip or interrupt this process."}</p>
                                <p className='mb-4'>After verifying your details, PayPal will automatically redirect you back to TradingView. At this point, your payment method will be confirmed.
                                </p>

                                <Formik
                                    validateOnBlur={true}
                                    validateOnChange={true}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                    innerRef={validateRef}
                                >
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
                                                                name='country'
                                                                className={`custom-react-select ${errors.country && touched.country ? 'is-invalid' : ''}`}
                                                                options={Country.getAllCountries().map(country => ({ label: country.name, value: country.isoCode }))}
                                                                isSearchable={true}
                                                                onChange={handleCountryChange}
                                                                value={selectedCountry}
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
                                                                className={`custom-react-select ${errors.state && 'is-invalid'}`}
                                                                options={
                                                                    selectedCountry
                                                                        ? State.getStatesOfCountry(selectedCountry.value).map((city) => ({
                                                                            label: city.name,
                                                                            value: city.name,
                                                                        }))
                                                                        : []
                                                                } isSearchable={true}
                                                                onChange={handleStateChange}
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
                                                        <label>Tax Identification Number <span>*</span></label>
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
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        )}

                    </div>
                    <div className='col-md-4'>
                        <div className='pricetable-view'>
                            <div className="d-flex justify-content-between bd-bottom py-2">
                                <div>{props.planData?.planname}</div>
                                <div>{props.currency?.symbol}{HandlePlanType ? props.planData.Annuallyprice : props.planData.Monthlyprice}</div>
                            </div>

                            {checkedItems.map((item, index) => (
                                <div className='d-flex justify-content-between bd-bottom list-of-items' key={'item' + index}>
                                    <div>
                                        <div>{item.wallet_id}</div>
                                        <div className='pl-sub-title'>
                                            <span>{item.network}</span>
                                        </div>
                                    </div>
                                    <div>{props.currency?.symbol}{item.price}</div>
                                </div>
                            ))}

                            <div className="d-flex justify-content-between  Total-Items">
                                <div>
                                    <div>Total</div>
                                    <div className='pl-sub-title'>
                                        <span>Billed every year.</span>
                                    </div>
                                </div>
                                <div>{props.currency?.symbol}{Totalamount ? Totalamount : HandlePlanType ? props.planData.Annuallyprice : props.planData.Monthlyprice}</div>
                            </div>
                            {step === 2 ? (
                                <>
                                    <div className="col-xxl-12">
                                        <div className="contact__bottom d-sm-flex flex-column align-items-start justify-content-between">
                                            <div className="contact__agree d-flex ">
                                                <label className="custom-checkbox">
                                                    <input
                                                        className="m-check-input"
                                                        type="checkbox"
                                                        id="m-lock"
                                                        checked={isChecked}
                                                        onChange={(e) => handletermCheckboxChange(e)}
                                                    />
                                                    <span className="checkmark"></span>
                                                    <span className="label-text">Allow to all <Link href={'/privacy-policy'} passHref><a target='_blank'>terms &amp; condition</a></Link></span>
                                                </label>
                                            </div>
                                            {!isChecked && <div className="error-message">Checkbox must be checked</div>}
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        {isValidated ? <PaypalCheckoutButton product={product} handleModel={props.onHide} /> : <button className='gradient-text-btn w-100' onClick={CheckPaypalValidation}>Procceed To Pay</button>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <button className='gradient-text-btn w-100' onClick={handleNextStep}>Next</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}
