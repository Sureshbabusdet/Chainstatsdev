import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/future/image';
import Link from 'next/link';
import ProgressBox from '../../components/ProgressBox.js';
import { Badge, Button, Form, Modal } from 'react-bootstrap';
import PaymentModel from '../../components/PaymentModel.js';
import { useRouter } from 'next/router.js';
import Seo from '../../components/Seo.js';
import Swal from 'sweetalert2';
import { ACTION_ROUTES } from '../../constants/constant.js';
import axios from 'axios';
import { toast } from 'react-toastify';

Pricing.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

const WalletData = [
    {
        id: 1,
        image: '/img/icons/chainlink.png',
        wallet_id: 'NASDAQ Stock Market',
        name: 'NASDAQ + USA',
        network: 'NASDAQ & USA'
    },
    {
        id: 2,
        image: '/img/icons/polygon.png',
        wallet_id: 'New York Stock Exchange',
        name: 'Polygon',
        network: 'Polygon'
    },
    {
        id: 3,
        image: '/img/icons/Usdicon.png',
        wallet_id: 'NYSE Arca',
        name: 'Polygon',
        network: 'Ethereum'
    }, {
        id: 4,
        image: '/img/icons/binance.png',
        wallet_id: 'Bursa Malaysia Berhad',
        name: 'Polygon',
        network: 'Ethereum + Coin'
    }
]


export default function Pricing({PricingData}) {
    const router = useRouter();
    const [activePlanData, setActivePlanData] = useState([]); // Added loading state
    const [modalShow, setModalShow] = useState(false);
    const [planData, setplanData] = useState(
        {
            id: '',
            Monthlyprice: '',
            Annuallyprice: '',
            innerMonthly: '',
            innerAnnually: '',
            planname: '',
            type: false,
            plan_id: '',
            plan_id_yearly: '',
        }
    );

    const [toggalPlanModa, setToggalPlanModa] = useState(false);
    const [currency, setCurrency] = useState();

    const handleSwitchChange = () => {
        setToggalPlanModa(!toggalPlanModa);
    };

    const handleModelShow = () => {
        const islogin = localStorage.getItem("islogin");
        if (islogin) {
            setModalShow(true);
        } else {
            Swal.fire({
                title: 'Login Required!',
                text: 'To proceed with purchasing plans and accessing more information, please log in to your account. If you require further assistance, feel free to contact us.',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Login Now',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            });
        }
    };

    const getCurrency = async () => {
        try {
            const response = await axios.get(ACTION_ROUTES.currencyAPI);
            setCurrency(response.data.currency);
            localStorage.setItem('currency',response.data.currency.symbol);
            
        } catch (error) {
            if (error.response) {
                // console.log(error.response)
            } else {
                console.error('Currency Something Went Wrong:', error);
            }
        }
    };

    const getActivePlan = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await axios.get(ACTION_ROUTES.CheckActivePlanAPI, {
            headers: {
                Authorization: `Bearer ${token}` // Include token in authorization header
            }
        });
        setActivePlanData(response.data)
    };

    useEffect(() => {
        getCurrency();
        getActivePlan();
    }, []);

    const metaData = {
        title: `Pricing - ChainStats - Unleash the data`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };

    console.log('PricingData',PricingData)
    console.log('current plan',activePlanData,toggalPlanModa)

    return (
        <>
            <Seo {...metaData} />
            <section className="pt-60 pb-60 header-space position-relative">
                <Image src="/img/pricing-bg.png" alt='background image' className='img-fluid pricing-bg-image' layout="raw" width={1920} height={700} priority />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-12">
                            <div className="mb-20">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-10 col-lg-12">
                                        <div className="sec_heading mb-3 "><h4>Pricing - Make OnChain Data Available For Everyone!</h4></div>
                                        <div className="profile__notification-item  mb-20">
                                            <div className="form-check justify-content-center p-0 form-switch d-flex align-items-center">
                                                <label className="form-check-label me-5" for="sale">Monthly</label>
                                                <input className="form-check-input" type="checkbox" role="switch" id="sale" checked={toggalPlanModa}
                                                    onChange={() => handleSwitchChange()} />
                                                <label className="form-check-label ms-2" for="sale">Annually</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {PricingData && (
                                <div className="row g-0 pricing-card-wrapper">
                                    {PricingData?.map((item, index) => (
                                        <div className="col-lg-4" key={'plans' + index}>
                                            <div className='pricecard seller__item mb-lg-0'>
                                                <div className='plan-details'>
                                                    <h3>{item.name}</h3>
                                                    <p className='pricevalue'>{item.price === 0 ? "Free" : (<>{currency?.symbol}{toggalPlanModa ? item.yearly_price : item.monthly_price}<span>{!toggalPlanModa ? '/ month' : '/year'} </span></>)}</p>

                                                    <p className='pr-sub-text'>{toggalPlanModa ? item.discount_text_yearly : item.discount_text_monthly}</p>
                                                    <Link href='/contact-us' passHref><p className='pr-label-bordered'>Join Our Community <i className="fa-solid text-primary ms-1 fa-circle-info"></i></p></Link>

                                                    <button className='gradient-text-btn w-100 rounded-full'
                                                        disabled={item.id === 1}
                                                        onClick={() => {
                                                            handleModelShow();
                                                            setplanData(
                                                                {
                                                                    id: item.id,
                                                                    Monthlyprice: item.monthly_price,
                                                                    Annuallyprice: item.yearly_price,
                                                                    planname: item.name,
                                                                    type: toggalPlanModa,
                                                                    innerMonthly: item.inner_page_text_monthly,
                                                                    innerAnnually: item.inner_page_text_yearly,
                                                                    plan_id: item.plan_id,
                                                                    plan_id_yearly: item.plan_id_yearly,
                                                                }
                                                            )
                                                        }}
                                                    >{toggalPlanModa === false && activePlanData.plan_data?.type === 'monthly' && item.id !== 1 && activePlanData.active_plan === true ? `Current Plan` : `Try For ${item.trial_days} Days`} </button>
{/* activePlanData.plan_data */}
                                                    {/* {activePlanData !== true ? `Current Plan` : activePlanData.plan_data.type === 'monthly' && toggalPlanModa === false ?  'Try For ${item.trial_days} Days' : } */}


                                                    <p className={`summry-text ${item.id === 1 ? 'mb-5' : ''}`}>
                                                        {item.id !== 1 ? (<> or skip trial and
                                                            <a
                                                                className='cursorPointer ms-2'
                                                                onClick={() => {
                                                                    handleModelShow();
                                                                    setplanData(
                                                                        {
                                                                            id: item.id,
                                                                            Monthlyprice: item.monthly_price,
                                                                            Annuallyprice: item.yearly_price,
                                                                            planname: item.name,
                                                                            type: toggalPlanModa,
                                                                            innerMonthly: item.inner_page_text_monthly,
                                                                            innerAnnually: item.inner_page_text_yearly,
                                                                            plan_id: item.plan_id,
                                                                            plan_id_yearly: item.plan_id_yearly,
                                                                        }
                                                                    )
                                                                }}
                                                            >pay now</a>
                                                        </>
                                                        ) : ''}
                                                    </p>
                                                </div>
                                                <ul className='pricingoptionlist'>
                                                    {item.points.map((point, index) => (
                                                        <li key={'points' + index}>
                                                            {point.is_true ? <i className='fa fa-check'></i> : <i className='fa fa-close text-danger'></i>}
                                                            <span>
                                                                <p>{point.name}</p>
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="col-lg-4">
                                        <div className='pricecard seller__item mb-lg-0'>
                                            <div className='plan-details'>
                                                <h3>Enterprise</h3>
                                                <p className='pricevalue mt-4'>Please Contact us</p>
                                                <p className='pr-label-bordered mt-3'>Explore Our Platform <i className="fa-solid text-primary ms-1 fa-circle-info"></i></p>
                                                <Link href={"/contact-us"} passHref><button className='gradient-text-btn w-100 rounded-full' >Contact Us</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <PaymentModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                planData={planData}
                className={'my-price-model'}
                currency={currency}
            />
        </>
    )
}


export async function getServerSideProps(context) {
    try {
        const response = await axios.get(ACTION_ROUTES.PricingAPI);

        if (response.status === 200) {
            const PricingData = response.data.plans; // Extract profile data from response
            return {
                props: {
                    PricingData
                }
            };
        } else {
            // Handle other status codes if needed
            // e.g., display an error page
            return {
                notFound: true,
            };
        }
    } catch (error) {
        // Handle errors
        console.error('Error fetching profile data:', error);
        return {
            props: {
                error: 'Something went wrong. Please try again later.'
            }
        };
    }
}