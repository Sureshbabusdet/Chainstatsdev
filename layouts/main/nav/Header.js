import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/future/image';
import Swal from 'sweetalert2';
import { parseCookies, setCookie } from 'nookies';
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';
import { ACTION_ROUTES } from '../../../constants/constant';
import axios from 'axios';
import { toast } from 'react-toastify';
import RenderResult from 'next/dist/server/render-result.js';
import SimpleBarReact from "simplebar-react";
import EthereumAddress from '../../../components/EthereumAddress';
import { Spinner } from 'react-bootstrap';

const Header = ({ data }) => {
    const cookies = parseCookies();
    const token = cookies.token;
    const [copied, setCopied] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleUnauthorizedAccess = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('f_name', '');
        localStorage.setItem('islogin', '');
        setCookie(null, 'token', '', { path: '/' });
        router.push('/login');
    };

    // Axios interceptor to handle unauthorized access
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                // Handle unauthorized access
                handleUnauthorizedAccess();
            }
            return Promise.reject(error);
        }
    );
    const [islogin, setIsLogin] = useState(null);
    const [isClassToggled, setClassToggled] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [profileData, setProfileData] = useState(false);
    const [NotificationData, setNotificationData] = useState(false);

    const supportChainIds = [1, 4, 137];

    const { address, chainId, connectWallet, disconnectWallet, getNetworkMetadata } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem('islogin');
        setIsLogin(loginStatus);
    }, []);

    const copyToClipboard = (text) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);

        if (!isFullScreen) {
            // Enter full screen
            document.documentElement.requestFullscreen();
        } else {
            // Exit full screen
            document.exitFullscreen();
        }
    };
    const toggleClass = () => {
        setClassToggled(!isClassToggled);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure you want to logout?',
            text: 'You will be logged out of your account.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('token', '');
                localStorage.setItem('f_name', '');
                localStorage.setItem('islogin', '');
                setCookie(null, 'token', '', { path: '/' });
                router.push('/login');
            }
        });
    };

    const walletLogin = async (address) => {
        try {
            const formData = new FormData();
            formData.append('wallet_id', address);
            const response = await axios.post(ACTION_ROUTES.WalletLoginAPI, formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setCookie(null, 'token', token, { path: '/' });
            localStorage.setItem('islogin', '1');
            localStorage.setItem('f_name', response.data.user.f_name);
            toast.success('Login Successfull Done!');
            router.push('/');

        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        setErrors({ email: error.message });
                        if (error.code === 'email') {
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
    };


    const GetProfile = async (address) => {
        try {
            const response = await axios.get(ACTION_ROUTES.GetProfileInfoAPI, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setProfileData(response.data.user)

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
                }
            } else {
                console.error('Something Went Wrong:', error);
            }
        }
    };

    const GetNotification = async () => {
        try {
            const response = await axios.get(ACTION_ROUTES.NotificationAPI, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNotificationData(response.data.notifications)

        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Notification Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                    });
                } else {
                    console.error('Notification  Something Went Wrong:', error);
                }
            } else {
                console.error('Something Went Wrong:', error);
            }
        }
    };

    const ClearNotification = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(ACTION_ROUTES.clearNotificationAPI, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success(response.data.message);
            GetNotification();
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };


    function calculateTimeAgo(notificationTime) {
        const currentTime = new Date();
        const notificationDate = new Date(notificationTime);
        const timeDifference = currentTime - notificationDate;

        // Convert time difference to seconds
        const seconds = Math.floor(timeDifference / 1000);

        // Define time intervals in seconds
        const intervals = {
            year: 31536000,
            month: 2592000,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        let timeAgo = '';

        // Iterate through intervals
        for (const [interval, secondsInterval] of Object.entries(intervals)) {
            const intervalCount = Math.floor(seconds / secondsInterval);
            if (intervalCount > 0) {
                timeAgo = `${intervalCount} ${interval}${intervalCount !== 1 ? 's' : ''} ago`;
                break;
            }
        }

        // If time difference is less than a minute
        if (timeAgo === '') {
            timeAgo = 'Just now';
        }

        return timeAgo;
    }

    useEffect(() => {
        if (address && isLoginClicked === true) {
            walletLogin(address);
        }
    }, [address, isLoginClicked]);

    useEffect(() => {
        if (islogin === "1") {
            GetProfile();
            GetNotification();
        }
    }, [islogin])

    return (
        <>
            <div id="header-sticky" className="header__area header__border-2 header__padding header__sticky header__transparent">
                <div className="tp-container">
                    <div className="header__wrapper position-relative">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-6 col-9">
                                <div className="logo header__logo">
                                    <Link href="/" passHref>
                                        <a className='logo-white'>
                                            <Image className="" src="/img/logo.png" alt="logo" placeholder="empty" layout="fixed" width={200} height={40} priority />
                                        </a>
                                    </Link>
                                    <Link href="/" passHref>
                                        <a className='logo-black'>
                                            <Image width={130} height={40} priority className=" img-fluid" placeholder="empty" layout="fixed" src="/img/logo.png" alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-5 d-none d-lg-block">
                                <div className="header__menu-wrapper d-flex align-items-center">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link href="/" ><a className={`sub-menu-item ${router.asPath === '/' && 'active'}`}>Dashboard</a></Link></li>
                                                <li><Link href="/charts" ><a className={`sub-menu-item ${router.asPath === '/charts' && 'active'}`}>Charts</a></Link></li>
                                                <li><Link href="/pricing" ><a className={`sub-menu-item ${router.asPath === '/pricing' && 'active'}`}>Pricing</a></Link></li>
                                                <li><Link href="/chainguardians" ><a className={`sub-menu-item ${router.asPath === '/chainguardians' && 'active'}`}>Chain Guardians</a></Link></li>
                                                <li><Link href="/contact-us" ><a className={`sub-menu-item ${router.asPath === '/contact-us' && 'active'}`}>Contact</a></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header__search">
                                        <form action="#">
                                            <div className="header__search-input">
                                                <input type="text" placeholder="Search" />
                                                <button type="submit" className="header__search-btn">
                                                    <i className="fa-regular fa-search"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-2 col-lg-5 col-md-6 col-3">
                                <div className="header__right-wrapper d-flex justify-content-end align-items-center">
                                    <div className="header__right d-none d-sm-flex justify-content-end align-items-center">
                                        <div className="header__notification ml-30">
                                            <button className='me-3 fullscreenlink' onClick={toggleFullScreen}>
                                                <i className={`fa-sharp fa-solid ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                                            </button>
                                        </div>
                                        <div className="header__notification me-3">
                                            <Link href="/chainguardians" className='me-3' passHref>
                                                <a className='d-inline-block'><Image width={23} height={25} layout='raw' src="/img/Imperial-gaurdian.png" alt="Create Chain Guardian" /></a>
                                            </Link>
                                        </div>
                                        {islogin && (
                                            <div className="header__notification me-4">
                                                <div className="header__user ml-10">
                                                    <Link href="#" className='me-4' passHref>
                                                        <a className='d-inline-block'>
                                                            <svg viewBox="0 0 17 18">
                                                                <path
                                                                    d="M13.7081 6.08326C13.7081 4.73509 13.1726 3.44215 12.2193 2.48885C11.266 1.53556 9.97305 1 8.62488 1C7.27672 1 5.98377 1.53556 5.03048 2.48885C4.07718 3.44215 3.54163 4.73509 3.54163 6.08326C3.54163 12.0137 1 13.7081 1 13.7081H16.2498C16.2498 13.7081 13.7081 12.0137 13.7081 6.08326Z"
                                                                    stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                                <path
                                                                    d="M10.0905 16.1558C9.94157 16.4126 9.72778 16.6257 9.47056 16.7739C9.21333 16.922 8.9217 17 8.62485 17C8.32801 17 8.03637 16.922 7.77914 16.7739C7.52192 16.6257 7.30813 16.4126 7.15918 16.1558"
                                                                    stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <span className="notification-count"></span>
                                                        </a>
                                                    </Link>
                                                    <div className="wallet__dropdown tp-wallet-dropdown notification-dropdown">
                                                        <SimpleBarReact style={{ maxHeight: 300 }}>
                                                            <div className="wallet__dropdown-action pb-0">
                                                                <h6 className='ps-3'>Notification</h6>
                                                                <ul>
                                                                    {NotificationData.length > 0 ? NotificationData.map((item, index) => (
                                                                        <li key={'notification' + index}>
                                                                            <Image width={35} className='me-3' height={35} src={item.image_url ? item.image_url : '/img/Imperial-gaurdian.png'} />
                                                                            <span>
                                                                                <span>{item.title}</span>
                                                                                <p>{item.message}</p>
                                                                                <small className="text-white">{calculateTimeAgo(item.time)}</small>
                                                                            </span>
                                                                        </li>
                                                                    )) : (
                                                                        <p className='text-center py-5 mb-0'>No New Notifications Available</p>
                                                                    )}
                                                                    {!NotificationData.length > 0 ? '' : (
                                                                        <button className='clear-notification' onClick={ClearNotification}>{isloading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Clear'}</button>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </SimpleBarReact>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {!islogin && (
                                            <div className="header__notification me-4">
                                                <button onClick={() => { connectWallet("injected"); setIsLoginClicked(true); }} className='header-wallet-icons' >
                                                    <svg width="84" height="72" viewBox="0 0 84 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C3.6026 0 0 3.6026 0 8V65C0 68.8434 3.1566 72 7 72H77C80.8434 72 84 68.8434 84 65V19C84 15.1566 80.8434 12 77 12H72V2C71.9999 0.9528 71.0472 0.0001 70 0H8ZM8 4H68V12H8C5.7494 12 4 10.2506 4 8C4 5.7494 5.7494 4 8 4ZM4 14.9062C5.1789 15.5928 6.5456 16 8 16C30.5241 15.98 57.6406 16 77 16C78.6966 16 80 17.3034 80 19V29H51C48.2646 29 46 31.2646 46 34V50C46 52.7354 48.2646 55 51 55H80V65C80 66.6966 78.6966 68 77 68H7C5.3034 68 4 66.6966 4 65V14.9062ZM51 33H80V51H51C50.4114 51 50 50.5886 50 50V34C50 33.4114 50.4114 33 51 33ZM61 36.9688C58.2623 36.9688 56 39.231 56 41.9688C56 44.7065 58.2623 46.9688 61 46.9688C63.7377 46.9688 66 44.7065 66 41.9688C66 39.231 63.7377 36.9688 61 36.9688ZM61 40.9688C61.576 40.9688 62 41.3928 62 41.9688C62 42.5447 61.576 42.9688 61 42.9688C60.424 42.9688 60 42.5447 60 41.9688C60 41.3928 60.424 40.9688 61 40.9688Z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                        <div className="header__wallet-wrapper" id="header__user">
                                            {!islogin ? (
                                                <ul className='login-menu-list'>
                                                    <li><Link href='/login'>Login</Link></li>
                                                    <li><Link href='/register'>Register</Link></li>
                                                </ul>
                                            ) : (
                                                <>
                                                    <div className="header__wallet ml-30">
                                                        <Link href="#" className="header__wallet-btn header__wallet-btn-2" id="connectbtn1">
                                                            <a><svg viewBox="0 0 19 16">
                                                                <path
                                                                    d="M17.5 5.83333V10.1667C17.5 13.5 15.9 14.5 13.5 14.5H5.5C2.5 14.5 1.5 13 1.5 10.1667V5.83333C1.5 3 2.5 2 4.852 1.552C5.06 1.51733 5.276 1.5 5.5 1.5H13.5C13.708 1.5 13.908 1.50866 14.1 1.54332C16.5 2 17.5 3 17.5 5.83333Z"
                                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                                    strokeLinejoin="round" />
                                                                <path d="M9 5.03314H5" stroke="white" strokeWidth="1.5"
                                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                                <path
                                                                    d="M17.2998 5.75061H14.8998C14.0198 5.75061 13.2998 6.65061 13.2998 7.75061C13.2998 8.85061 14.0198 9.75061 14.8998 9.75061H17.2998"
                                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                                    strokeLinejoin="round" />
                                                            </svg></a>
                                                        </Link>
                                                    </div>

                                                    {profileData && (
                                                        <div className="header__user ml-10">
                                                            <Link href="#">
                                                                <a><Image width={32} height={32} src={`${profileData?.image_url || '/img/user.jpg'}`} alt="" /></a>
                                                            </Link>
                                                            <div className="wallet__dropdown tp-wallet-dropdown">
                                                                <div className="wallet__dropdown-cover">
                                                                    <Image width={218} height={75} src={`${profileData.banner_url || '/img/Twitter-Header.jpg'}`} alt="" />
                                                                </div>
                                                                <div className="wallet__dropdown-top d-flex align-items-end">
                                                                    <div className="wallet__dropdown-user mr-15">
                                                                        <Image width={32} height={32} src={`${profileData?.image_url || '/img/user.jpg'}`} alt="" />
                                                                    </div>
                                                                    <div className="wallet__dropdown-user-content">
                                                                        <h4>{profileData.username && `@${profileData.username}`}</h4>
                                                                    </div>
                                                                </div>
                                                                {profileData.wallet_id && (
                                                                    <>
                                                                        <div className="wallet__dropdown-id">
                                                                            <h5>Wallet:</h5>
                                                                            <p className='mb-0'><span className='dropdown-wallet-id'>{EthereumAddress({ address: profileData?.wallet_id })}</span>
                                                                                <button title="Copy" type="button" className='bg-transparent border-0' onClick={() => copyToClipboard(profileData?.wallet_id)}>
                                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M5.80388 13.2632H3.5941C1.28115 13.2632 0 11.9967 0 9.68638V3.57677C0 1.27497 1.27255 0 3.5941 0H7.52354C9.83649 0 11.1176 1.26642 11.1176 3.57677C11.1176 3.92761 10.8253 4.21854 10.4728 4.21854C10.1202 4.21854 9.8279 3.92761 9.8279 3.57677C9.8279 1.96808 9.14003 1.28353 7.52354 1.28353H3.5941C1.97762 1.28353 1.28975 1.96808 1.28975 3.57677V9.68638C1.28975 11.2951 1.97762 11.9796 3.5941 11.9796H5.80388C6.15641 11.9796 6.44875 12.2706 6.44875 12.6214C6.44875 12.9722 6.15641 13.2632 5.80388 13.2632Z"
                                                                                            fill="#3771FE" />
                                                                                        <path
                                                                                            d="M11.8705 14H9.54195C8.17131 14 7.41211 13.1959 7.41211 11.729V7.84992C7.41211 6.38846 8.16622 5.57895 9.54195 5.57895H11.8705C13.2411 5.57895 14.0003 6.38302 14.0003 7.84992V11.729C14.0003 13.1959 13.2462 14 11.8705 14ZM9.54195 6.39389C8.58403 6.39389 8.17641 6.82852 8.17641 7.84992V11.729C8.17641 12.7504 8.58403 13.1851 9.54195 13.1851H11.8705C12.8284 13.1851 13.236 12.7504 13.236 11.729V7.84992C13.236 6.82852 12.8284 6.39389 11.8705 6.39389H9.54195Z"
                                                                                            fill="#3771FE" stroke="#3771FE" strokeWidth="0.2" />
                                                                                    </svg>
                                                                                </button>
                                                                            </p>
                                                                            <span className="copied text-end">{copied ? 'Copied' : ''}</span>
                                                                        </div>
                                                                        {profileData?.balance ? (
                                                                            <div className="wallet__dropdown-balance  mb-3">
                                                                                <p>Balance: <span>{profileData?.balance}</span></p>
                                                                            </div>
                                                                        ) : ''}
                                                                    </>
                                                                )}


                                                                <div className="wallet__dropdown-action">
                                                                    <ul>
                                                                        <li>
                                                                            <Link href="/profile"><a><i className="fa-regular fa-user"></i> Profile</a></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="#logout"><a onClick={handleLogout}><i className="fa-regular fa-arrow-right-from-bracket"></i> Logout</a></Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        {islogin && (
                                            <div className="header__notification d-sm-none">
                                                <div className="header__user ml-10">
                                                    <a className='d-inline-block '>
                                                        <svg viewBox="0 0 17 18">
                                                            <path
                                                                d="M13.7081 6.08326C13.7081 4.73509 13.1726 3.44215 12.2193 2.48885C11.266 1.53556 9.97305 1 8.62488 1C7.27672 1 5.98377 1.53556 5.03048 2.48885C4.07718 3.44215 3.54163 4.73509 3.54163 6.08326C3.54163 12.0137 1 13.7081 1 13.7081H16.2498C16.2498 13.7081 13.7081 12.0137 13.7081 6.08326Z"
                                                                stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round" />
                                                            <path
                                                                d="M10.0905 16.1558C9.94157 16.4126 9.72778 16.6257 9.47056 16.7739C9.21333 16.922 8.9217 17 8.62485 17C8.32801 17 8.03637 16.922 7.77914 16.7739C7.52192 16.6257 7.30813 16.4126 7.15918 16.1558"
                                                                stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
                                                                strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="notification-count"></span>
                                                    </a>
                                                    <div className="wallet__dropdown tp-wallet-dropdown notification-dropdown">
                                                        <SimpleBarReact style={{ maxHeight: 300 }}>
                                                            <div className="wallet__dropdown-action pb-0">
                                                                <h6 className='ps-3'>Notification</h6>
                                                                <ul>
                                                                    {NotificationData.length > 0 ? NotificationData.map((item, index) => (
                                                                        <li key={'notification' + index}>
                                                                            <Image width={35} className='me-3' height={35} src={item.image_url ? item.image_url : '/img/Imperial-gaurdian.png'} />
                                                                            <span>
                                                                                <span>{item.title}</span>
                                                                                <p>{item.message}</p>
                                                                                <small className="text-white">{calculateTimeAgo(item.time)}</small>
                                                                            </span>
                                                                        </li>
                                                                    )) : (
                                                                        <p className='text-center py-5 mb-0'>No New Notifications Available</p>
                                                                    )}
                                                                    {!NotificationData.length > 0 ? '' : (
                                                                        <button className='clear-notification' onClick={ClearNotification}>{isloading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : 'Clear'}</button>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </SimpleBarReact>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="header__bar ml-10 d-xl-none d-lg-none">
                                            <input type="checkbox" className="check_hamburger" onClick={toggleClass} />
                                            <span className='menu_icon'></span>
                                            <span className='menu_icon'></span>
                                            <span className='menu_icon'></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile__menu d-block d-sm-block d-md-block d-lg-none'>
                <div className={`mobile_responsive_menu ${isClassToggled ? 'active' : ''}`}>
                    {/* <div className="logo header__logo">
                        <Link href="/">
                            <Image className="logo-white img-fluid" src="/img/logo.png" alt="logo" width={130} height={40} />
                            <Image width={130} height={40} className="logo-black img-fluid" src="/img/logo.png" alt="logo" />
                        </Link>
                    </div> */}
                    <div className="header__search">
                        <form action="#">
                            <div className="header__search-input">
                                <input type="text" placeholder="What are you searching for ?" />
                                <button type="submit" className="header__search-btn">
                                    <i className="fa-regular fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="header__menu-wrapper d-flex align-items-center">
                        <div className="main-menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><Link href="/"><a className={`sub-menu-item ${router.asPath === '/' ? 'active':''}`}>Dashboard</a></Link></li>
                                    <li><Link href="/charts"><a className={`sub-menu-item ${router.asPath === '/charts' ? 'active':''}`}>Charts</a></Link></li>
                                    <li><Link href="/pricing"><a className={`sub-menu-item ${router.asPath === '/pricing' ? 'active':''}`}>Pricing</a></Link></li>
                                    <li><Link href="/chainguardians"><a className={`sub-menu-item ${router.asPath === '/chainguardians' ? 'active':''}`}>Chain Guardians</a></Link></li>
                                    <li><Link href="/contact-us"><a className={`sub-menu-item ${router.asPath === '/contact-us' ? 'active':''}`}>Contact</a></Link></li>
                                    <li><Link href="/profile"><a className={`sub-menu-item ${router.asPath === '/profile' ? 'active':''}`}>Profile</a></Link></li>
                                    <li><a onClick={handleLogout} className="sub-menu-item">Logout</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
