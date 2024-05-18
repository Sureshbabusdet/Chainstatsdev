import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Select from 'react-select'
import { Country, City } from 'country-state-city';
import Link from 'next/link';


const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 0.01%, rgba(255, 255, 255, 0.03) 100%)',
        color: '#fff',
        fontWeight: '600',
        borderColor: state.isFocused ? '#7b7b7b' : '#0f0f0f',
        borderRadius: '40px',
        padding: '8px 20px 8px 18px',
        '&:hover': {
            borderColor: '#7b7b7b',
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        textAlign: 'left',
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

export default function Guardiansform() {
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleCheckboxChange2 = () => {
        setIsCheckboxChecked2(!isCheckboxChecked2);
    };

    const initialValues = {
        name: '',
        email: '',
        discordusername: '',
        numberOfNFTs: '',
        transactionHash: '',
        walletAddress: '',
    };

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const handleNextStep = (isValid, setSubmitting) => {
        if (isValid && isCheckboxChecked) {
            setCurrentStep(currentStep + 1);
        }
        setSubmitting(false);
    };


    const validationSchemaStep1 = Yup.object().shape({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        discordusername: Yup.string().required('Discord Handle is required'),
        checkbox: Yup.boolean().oneOf([true], 'Checkbox must be checked'),
    });

    const validationSchemaStep2 = Yup.object().shape({
        numberOfNFTs: Yup.string().required('Please select at least 1 NFT'),
        transactionHash: Yup.string().required('Transaction Hash is required'),
        walletAddress: Yup.string().required('Wallet address is required'),
        checkBox2: Yup.boolean().oneOf([true], 'You must agree to GDPR Agreement'),
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true);
        const country = selectedCountry?.value;
        // console.log('Form submitted:', values, country);
    };

    return (
        <>
            <Formik
                validateOnBlur={true}
                validateOnChange={true}
                initialValues={{ ...initialValues, country: selectedCountry?.value }}
                validationSchema={currentStep === 1 ? validationSchemaStep1 : validationSchemaStep2}
                validateOnMount={true}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched, values, isValid, setSubmitting }) => (
                    <Form className='chaingardian-form'>
                        {currentStep === 1 ? (
                            <div className="row align-items-center">
                                <div className="col-xxl-12">
                                    <div className="ct-form-group guardian mt-2">
                                        <label>Full Name <span>*</span></label>
                                        <div className="position-relative mt-4">
                                            <Field
                                                type="text"
                                                name="name"
                                                placeholder="Enter the Full name"
                                                className={'input_design' + (errors.name && touched.name ? ' is-invalid' : '')}
                                            />
                                        </div>
                                        <ErrorMessage name="name" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="ct-form-group guardian mt-2">
                                    <label>Email <span>*</span></label>
                                    <div className="col-xxl-12">
                                        <div className="position-relative  mt-4">
                                            <Field
                                                type="text"
                                                name="email"
                                                placeholder="email"
                                                className={'input_design' + (errors.email && touched.email ? ' is-invalid' : '')}
                                            />
                                        </div>
                                        <ErrorMessage name="email" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="col-xxl-12 mt-2">
                                    <div className="ct-form-group guardian">
                                        <label>Discord Handle <span>*</span></label>
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="position-relative mt-4">
                                                    <Field
                                                        type="text"
                                                        name="discordusername"
                                                        placeholder="Discord Handle"
                                                        className={'input_design' + (errors.discordusername && touched.discordusername ? ' is-invalid' : '')}
                                                    />
                                                </div>
                                                <ErrorMessage name="discordusername" component="div" className="error-message" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xxl-12 mt-3">
                                    <div className="contact__bottom d-flex flex-column flex-md-row align-items-center justify-content-between">
                                        <div className="contact__agree d-flex flex-column ">
                                            <label className="custom-checkbox d-block">
                                                <Field
                                                    className="m-check-input"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    id="m-lock"
                                                    checked={isCheckboxChecked} // Use your component's state for the checked state
                                                    onChange={handleCheckboxChange} // Use your handleCheckboxChange function directly
                                                />
                                                <span className="checkmark"></span>
                                                <span className="label-text">I have read and understood the <Link href={'/privacy-policy'} passHref><a target='_blank'>Terms of Service</a></Link> above</span>
                                            </label>
                                            {!isCheckboxChecked && <div className="error-message">Checkbox must be checked</div>}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='col-xxl-12 mt-4'>
                                    <div className='form_btn'>
                                        <button type="submit" onClick={() => setFormStep(1)}>Next</button>
                                        <button className='border-0' type="reset">Clear form</button>
                                    </div>
                                </div> */}
                            </div>
                        ) : (
                            <div className="row align-items-center">
                                <div className="col-xxl-12">
                                    <div className="ct-form-group guardian mt-3">

                                        <table className="roundedTable">
                                            <tbody>
                                                <tr>
                                                    <td className='p-0 pb-3'> NFTs - You understand that buying a Chain Guardian will NOT</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}> <i className="fa-solid fa-arrows-turn-right"></i>  Guarantee a return on investment or any profits</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}><i className="fa-solid fa-arrows-turn-right"></i>  Represent any equity or investment or any profits</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}><i className="fa-solid fa-arrows-turn-right"></i>  Grat users rights to corporate decision and information</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}><i className="fa-solid fa-arrows-turn-right"></i>  An investment into any common enterprise, network or ecosystem</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}><i className="fa-solid fa-arrows-turn-right"></i>  That the Tokens attached to the NFTs have a vesting period (released in Whitpaper)</td>
                                                </tr>
                                                <tr>
                                                    <td style={{paddingLeft:'20px'}}>But instead specifically serves as a digital access pass to reserve a validator role in the ChainStats ecosystem.
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>


                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="ct-form-group guardian mt-3">
                                        <label>How many NFTs do you want to purchase ? <span>*</span></label>
                                        <div className={`form_content ${touched.numberOfNFTs && !values.numberOfNFTs ? 'is-invalid' : ''}`}>
                                            <p className='form_content_p'>{"Priced at 2,500 USDC each for the first 30, max mint per wallet 3. The next tiers don't have a max mint per wallet. As soon as all 30 are sold a new form will appear. Do not send more/less funds than the amount of NFTs you selected"}</p>

                                            <div className='radio'>
                                                <Field className='radio_btn' name="numberOfNFTs" type='radio' value="One" />
                                                <span className='mx-2'>1</span>
                                            </div>
                                            <div className='radio mt-2'>
                                                <Field className='radio_btn' name="numberOfNFTs" type='radio' value="Two" />
                                                <span className='mx-2'>2</span>
                                            </div>
                                            <div className='radio mt-2'>
                                                <Field className='radio_btn' name="numberOfNFTs" type='radio' value="Three" />
                                                <span className='mx-2'>3</span>
                                            </div>
                                            <ErrorMessage name="numberOfNFTs" component="div" className="error-message" />
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="ct-form-group">
                                        <label>Where are you located ? (Country) <span>*</span></label>
                                        <div className={`position-relative react-input ${touched.country && !selectedCountry ? 'is-invalid' : ''}`}>
                                            <Select
                                                name='country'
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
                                        <ErrorMessage name="country" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="ct-form-group guardian mt-3">
                                        <label>Transaction Hash of USDC sent as ERC-20 to 0xaEfe72764C0bB3666f7f6A68239a0A77B3BADe9F <span>*</span></label>
                                        <div className="position-relative">
                                            <Field
                                                type="text"
                                                name="transactionHash"
                                                placeholder="Enter the NFT's Transaction"
                                                className={'input_design' + (errors.transactionHash && touched.transactionHash ? ' is-invalid' : '')}
                                            />
                                        </div>
                                        <ErrorMessage name="transactionHash" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="ct-form-group guardian mt-3">
                                        <label>Your Eth wallet address for NFT distribution<span>*</span></label>
                                        <div className="position-relative">
                                            <Field
                                                type="text"
                                                name="walletAddress"
                                                placeholder="Enter the NFT's distribution"
                                                className={'input_design' + (errors.walletAddress && touched.walletAddress ? ' is-invalid' : '')}
                                            />
                                        </div>
                                        <ErrorMessage name="walletAddress" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="col-xxl-12 mt-3">
                                    <label>GDPR Agreement<span>*</span></label>
                                    <label className="custom-checkbox d-block">
                                        <Field
                                            className="m-check-input"
                                            type="checkbox"
                                            name="checkBox2"
                                            id="m-lock"
                                            checked={isCheckboxChecked2}
                                            onChange={(e) => handleCheckboxChange2(e)}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="label-text">I agree to ChainStats Inc. and its subsidiaries storing my information for the purpose stated in this form</span>
                                    </label>
                                    {touched.checkBox2 && !isCheckboxChecked2 && <div className="error-message">Checkbox must be checked</div>}
                                </div>

                                {/* <div className='col-xxl-12 mt-4'>
                                    <div className='form_btn'>
                                        <div>
                                            <button onClick={() => setFormStep(0)} className='mx-3'>Back</button>
                                            <button type='submit'>Submit</button>
                                        </div>
                                        <button type='reset' className='border-0'>Clear form</button>
                                    </div>
                                </div> */}
                            </div>
                        )}
                        {Object.keys(errors).length > 0 && (
                            <div className="error-message">Please Fill The All Details</div>
                        )}
                        {/* Next and Back buttons */}
                        {currentStep === 1 && (
                            <button
                                type="button"
                                className='gradient-text-btn rounded-full mt-3'
                                onClick={() => handleNextStep(isValid, setSubmitting)}
                            // disabled={!isValid}
                            >
                                Next
                            </button>
                        )}
                        <div className='d-flex justify-content-between mt-3'>
                            {currentStep === 2 && (
                                <button type="button" className='gradient-text-btn rounded-full ' onClick={() => setCurrentStep(1)}>
                                    Back
                                </button>
                            )}

                            {/* Submit button */}
                            {currentStep === 2 && (
                                <button type="submit" className='gradient-text-btn rounded-full ' disabled={isSubmitting}>
                                    Submit
                                </button>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}