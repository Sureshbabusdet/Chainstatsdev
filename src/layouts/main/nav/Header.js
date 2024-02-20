import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

const Header = ({ data }) => {
    const router = useRouter();
    
    const [isClassToggled, setClassToggled] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

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
    return (
        <>
            <div id="header-sticky" className="header__area header__border-2 header__padding header__sticky header__transparent">
                <div className="tp-container">
                    <div className="header__wrapper position-relative">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-6 col-4">
                                <div className="logo header__logo">
                                    <Link href="/">
                                        <Image className="logo-white" src="/img/logo.png" alt="logo" width={200} height={40} priority />
                                        <Image width={130} height={40} priority className="logo-black img-fluid" src="/img/logo.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-5 d-none d-lg-block">
                                <div className="header__menu-wrapper d-flex align-items-center">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link href="/" className="sub-menu-item">Dashboard</Link></li>

                                                <li><Link href="/charts" className="sub-menu-item">Charts</Link></li>

                                                <li><Link href="/pricing" className="sub-menu-item">Pricing</Link></li>

                                                <li><Link href="/node-portal" className="sub-menu-item">NodePortal</Link></li>
                                                <li><Link href="/contact-us" className="sub-menu-item">Contact</Link></li>
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
                            <div className="col-xxl-3 col-xl-2 col-lg-5 col-md-6 col-8">
                                <div className="header__right-wrapper d-flex justify-content-end align-items-center">
                                    <div className="header__right d-none d-sm-flex justify-content-end align-items-center">
                                        <div className="header__notification ml-30">
                                            <button className='me-3 fullscreenlink' onClick={toggleFullScreen}>
                                                <i className={`fa-sharp fa-solid ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                                            </button>
                                        </div>
                                        <div className="header__notification ml-30">
                                            <Link href="/chainguardians" className='me-3'>
                                                <Image width={23} height={23} src="/img/Imperial-gaurdian.png" alt="Create Chain Guardian" />
                                            </Link>
                                        </div>
                                        <div className="header__notification">
                                            <Link href="#" className='me-4'>
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
                                                <span className="notification-count">8</span>
                                            </Link>
                                        </div>
                                        <div className="header__wallet-wrapper" id="header__user">
                                            <div className="header__wallet ml-30">
                                                <Link href="#" className="header__wallet-btn header__wallet-btn-2" id="connectbtn1">
                                                    <svg viewBox="0 0 19 16">
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
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="header__user ml-10">
                                                <Link href="#">
                                                    <Image width={32} height={32} src="/img/user.jpg" alt="" />
                                                </Link>
                                                <div className="wallet__dropdown tp-wallet-dropdown">
                                                    <div className="wallet__dropdown-cover">
                                                        <Image width={218} height={90} src="/img/user-cover.png" alt="" />
                                                    </div>
                                                    <div className="wallet__dropdown-top d-flex align-items-end">
                                                        <div className="wallet__dropdown-user mr-15">
                                                            <Image width={32} height={32} src="/img/user.jpg" alt="" />
                                                        </div>
                                                        <div className="wallet__dropdown-user-content">
                                                            <h4>Suresh</h4>
                                                        </div>
                                                    </div>
                                                    <div className="wallet__dropdown-id">
                                                        <h5>Wallet:</h5>
                                                        <p>0xF74d ... 12hf204
                                                            <button type="button" className='bg-transparent border-0'>
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
                                                    </div>
                                                    <div className="wallet__dropdown-balance">
                                                        <p>Balance: <span>0.075ETH</span></p>
                                                    </div>
                                                    <div className="wallet__dropdown-action">
                                                        <ul>
                                                            <li>
                                                                <Link href="/profile"><i className="fa-regular fa-user"></i> Profile</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/edit-profile"><i className="fa-regular fa-gear"></i>
                                                                    Settings</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/login"><i
                                                                    className="fa-regular fa-arrow-right-from-bracket"></i>
                                                                    Logout</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header__user header__user-login ml-30" id="header__user-login">
                                            <Link href="#">
                                                <Image width={32} height={32} src="/img/user-2.jpg" alt="" />
                                            </Link>
                                            <div className="wallet__dropdown">
                                                <div className="wallet__dropdown-cover">
                                                    <Image width={218} height={90} src="/img/user-cover.png" alt="" />
                                                </div>
                                                <div className="wallet__dropdown-top d-flex align-items-end">
                                                    <div className="wallet__dropdown-user mr-15">
                                                        <Image width={32} height={32} src="/img/user-2.jpg" alt="" />
                                                    </div>
                                                    <div className="wallet__dropdown-user-content">
                                                        <h4>Joshua</h4>
                                                    </div>
                                                </div>
                                                <div className="wallet__dropdown-id">
                                                    <h5>Wallet:</h5>
                                                    <p>0xF74d ... 12hf204
                                                        <button type="button" className='bg-transparent border-0'>
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
                                                </div>
                                                <div className="wallet__dropdown-balance">
                                                    <p>Balance: <span>0.075ETH</span></p>
                                                </div>
                                                <div className="wallet__dropdown-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#"><i className="fa-regular fa-user"></i> Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fa-regular fa-gear"></i> Settings</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fa-regular fa-arrow-right-from-bracket"></i>
                                                                Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <li><Link href="/" className="sub-menu-item">Dashboard</Link></li>
                                    <li><Link href="/charts" className="sub-menu-item">Charts</Link></li>
                                    <li><Link href="/" className="sub-menu-item">Pricing</Link></li>
                                    <li><Link href="/" className="sub-menu-item">NodePortal</Link></li>
                                    <li><Link href="/contact-us" className="sub-menu-item">Contact</Link></li>
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
