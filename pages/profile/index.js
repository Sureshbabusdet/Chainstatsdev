import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/future/image';
import { Dropdown, Tab, Tabs, Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Link from 'next/link.js';
import ChangePassword from '../../components/ChangePassword.js';
import { parseCookies } from 'nookies';
import UpdateProfile from '../../components/UpdateProfile.js';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant.js';
import TransectionTable from '../../components/TransectionTable.js';
import MultipleWallets from '../../components/MultipleWallets.js';
import NotificationSetting from '../../components/NotificationSetting.js';
import { toast } from 'react-toastify';
import FollowUserCard from '../../components/FollowUserCard.js';
import { useRouter } from 'next/router.js';
import Seo from '../../components/Seo.js';
import EthereumAddress from '../../components/EthereumAddress.js';

Profile.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

const Tooltipwrap = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
        <a href="#">{children}</a>
    </OverlayTrigger>
);

export default function Profile({ profileData }) {
    const [profileDatas, setProfileDatas] = useState(profileData);
    const router = useRouter();

    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('Wallets');
    const [subsattingtab, setsubsattingtab] = useState('PROFILEINFO');
    const [loading, setLoading] = useState(false);
    const [BannerPreview, setBannerPreview] = useState(null); // State for file preview
    const [ProfileImagePreview, setProfileImagePreview] = useState(null); // State for file preview
    const [walletData, setWalletData] = useState([]); // Added loading state
    const [activePlanData, setActivePlanData] = useState([]); // Added loading state

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

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleSubTabClick = (tabId) => {
        setsubsattingtab(tabId);
    };

    const getWalletData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        try {
            const response = await axios.get(ACTION_ROUTES.UserWalletAPI, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setWalletData(response.data.wallets)
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
        }
    };


    const getProfileData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        try {
            const response = await axios.get(ACTION_ROUTES.GetProfileInfoAPI, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setProfileDatas(response.data)
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



    const handleUpdateData = () => {
        setTimeout(() => {
            getProfileData();
        }, 1000);
    }

    useEffect(() => {
        getWalletData();
        getActivePlan();
    }, []);



    const initialValues = {
        username: profileDatas?.user.username,
        f_name: profileDatas?.user.f_name,
        l_name: profileDatas?.user.l_name,
        email: profileDatas?.user.email,
        bio: profileDatas?.user.bio,
        twitter: profileDatas?.user.twitter,
        youtube: profileDatas?.user.youtube,
        country: profileDatas?.user.country,
        city: profileDatas?.user.city
    };

    const handleImageUpload = async (fieldName, e) => {
        var form_data = new FormData();

        if (fieldName === "banner") {
            const Bannerfile = e.target.files[0];
            form_data.append('banner', Bannerfile);
            setBannerPreview(URL.createObjectURL(Bannerfile));
        } else {
            const ProfileImagefile = e.target.files[0];
            form_data.append('image', ProfileImagefile);
            setProfileImagePreview(URL.createObjectURL(ProfileImagefile));
        }

        for (var key in initialValues) {
            form_data.append(key, initialValues[key]);
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
                // router.push('/');
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
            setLoading(false);
        }
    };

    const cancelPlan = async (Planid, e) => {
        var form_data = new FormData();
        form_data.append('subscription_id', Planid);

        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage

            const response = await axios.post(ACTION_ROUTES.cancelPlanAPI, form_data, {
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
            setLoading(false);
        }
    };
    
    const metaData = {
        title: `${profileDatas?.user.f_name !== null ? profileDatas?.user.f_name + ' ' : ''} ${profileDatas?.user.l_name !== null ? profileDatas?.user.l_name : 'Profile'} || ChainStats`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };


    return (
        <>
            <Seo {...metaData} />
            <section className="creator__area mt-80">
                <div className="creator__banner include-bg" style={{ backgroundImage: `url('${BannerPreview || profileDatas?.user.banner_url || '/img/Twitter-Header.jpg'}')` }}>
                    <input id="profile-cover-input" className="profile-img-popup" type="file" onChange={(e) => handleImageUpload('banner', e)} />
                    <button className='profilebanner-btn'><label htmlFor="profile-cover-input"><i className="fa-regular fa-pen-to-square"></i></label></button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="creator__user-wrapper text-center">
                                <div className="creator__user-thumb position-relative">
                                    <div className="profile__thumb text-center tp-img-profile d-inline-block p-relative">
                                        <div className='position-relative'>
                                            <div className='blue_tick_icon_profile'>
                                                <Image width={30} height={30} src="/img/bluetick-img.png" alt="" />
                                            </div>
                                            <Image width={120} height={120} className='bg-white' src={`${ProfileImagePreview || profileDatas?.user.image_url || '/img/user.jpg'}`} alt="" />
                                        </div>
                                        <div className="profile__thumb-edit">
                                            <input id="profile-thumb-input" onChange={(e) => handleImageUpload('image', e)} className="profile-img-popup" type="file" />
                                            <label htmlFor="profile-thumb-input"><i className="fa-regular fa-camera"></i></label>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="creator__user-title">{profileDatas?.user.f_name && profileDatas?.user.f_name + ' '}{profileDatas?.user.l_name && profileDatas?.user.l_name}</h3>
                                <div className="creator__user-copyright d-inline-block">
                                    {walletData.length > 0 && (
                                        <div className="creator__user-copyright-inner d-flex align-items-center">
                                            <div className="creator__user-copyright-icon">
                                                <i className="fa-brands fa-ethereum"></i>
                                            </div>
                                            <div className="creator__user-copyright-text">
                                                <span>{EthereumAddress({ address: walletData[0].wallet_id })}</span>
                                                <button onClick={() => copyToClipboard(walletData[0].wallet_id)} className='svg_btn'>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.6">
                                                            <path d="M5.80388 13.2632H3.5941C1.28115 13.2632 0 11.9967 0 9.68638V3.57677C0 1.27497 1.27255 0 3.5941 0H7.52354C9.83649 0 11.1176 1.26642 11.1176 3.57677C11.1176 3.92761 10.8253 4.21854 10.4728 4.21854C10.1202 4.21854 9.8279 3.92761 9.8279 3.57677C9.8279 1.96808 9.14003 1.28353 7.52354 1.28353H3.5941C1.97762 1.28353 1.28975 1.96808 1.28975 3.57677V9.68638C1.28975 11.2951 1.97762 11.9796 3.5941 11.9796H5.80388C6.15641 11.9796 6.44875 12.2706 6.44875 12.6214C6.44875 12.9722 6.15641 13.2632 5.80388 13.2632Z" fill="white"></path>
                                                            <path d="M11.8705 14H9.54195C8.17131 14 7.41211 13.1959 7.41211 11.729V7.84992C7.41211 6.38846 8.16622 5.57895 9.54195 5.57895H11.8705C13.2411 5.57895 14.0003 6.38302 14.0003 7.84992V11.729C14.0003 13.1959 13.2462 14 11.8705 14ZM9.54195 6.39389C8.58403 6.39389 8.17641 6.82852 8.17641 7.84992V11.729C8.17641 12.7504 8.58403 13.1851 9.54195 13.1851H11.8705C12.8284 13.1851 13.236 12.7504 13.236 11.729V7.84992C13.236 6.82852 12.8284 6.39389 11.8705 6.39389H9.54195Z" fill="white" stroke="white" strokeWidth="0.2"></path>
                                                        </g>
                                                    </svg>
                                                </button><span className="copied">{copied ? 'Copied' : ''}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="creator__follow d-flex justify-content-center gap-5">
                                    <div className='creator__follow_body'>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Rewards" id="t-1"><p><span>{profileDatas?.user.rewards}</span> <i className="fa-solid fa-trophy"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Rewards</span>
                                        </div>
                                    </div>
                                    <div className='creator__follow_body' onClick={() => handleTabClick('following')}>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Following" id="t-1"><p><span>{profileDatas?.user.following_count}</span> <i className="fa-solid fa-users"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Following</span>
                                        </div>
                                    </div>

                                    <div className='creator__follow_body' onClick={() => handleTabClick('followers')}>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Followers" id="t-1"><p><span>{profileDatas?.user.followers_count}</span> <i className="fa-solid fa-users"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="creator__action">
                                    <ul>
                                        <li><a href="#">Follow</a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#sharemodal">Share</a></li>
                                        <li>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" className="more nft-more-btn">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="nft__more-content" align="end">
                                                    <ul>
                                                        <li>
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#reportmodal">
                                                                Report
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="creator__tab">
                        <nav>
                            <div className="nav nav-tabs justify-content-md-center" id="nav-tab" role="tablist">
                                <div className='tab_box'>
                                    <button className={`nav-link ${activeTab === 'Wallets' ? 'active' : ''}`} onClick={() => handleTabClick('Wallets')} type="button" role="tab">MANAGE WALLETS</button>
                                    <button className={`nav-link ${activeTab === 'followers' ? 'active' : ''}`} onClick={() => handleTabClick('followers')} >FOLLOWERS </button>
                                    <button className={`nav-link ${activeTab === 'following' ? 'active' : ''}`} onClick={() => handleTabClick('following')} >FOLLOWING</button>
                                    <button className={`nav-link ${activeTab === 'setting' ? 'active' : ''}`} onClick={() => handleTabClick('setting')}>SETTINGS</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="creator__tab pb-60">
                    <div className="">
                        <div className="tab-content">
                            <div className={`tab-pane fade  ${activeTab === 'Wallets' ? 'show active' : ''}`}>
                                <div className='container mt-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-10 col-lg-8'>
                                            <MultipleWallets />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade  ${activeTab === 'followers' ? 'show active' : ''}`}>
                                <div className='container mt-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-8'>
                                            {profileDatas?.user.followers.length ? (
                                                <div className='follower-list'>
                                                    {profileDatas?.user.followers && profileDatas?.user.followers.map((item, index) => (
                                                        <FollowUserCard
                                                            key={'user' + index}
                                                            id={item.id}
                                                            index={index}
                                                            image={item.image_url}
                                                            name={(item.f_name ? item.f_name : '') + (item.l_name ? ' ' + item.l_name : '') || item.wallet_id}
                                                            username={item.username}
                                                            is_follow={item.is_follow}
                                                            handleUpdate={handleUpdateData}
                                                            ismainprofile={false}
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className='no_followers_box_body text-center'>
                                                    <div className='no_followers_box_icon'>
                                                        <svg width="40" height="39" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M8 15a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4zm14-2a3.99 3.99 0 0 1-4-4c0-2.21 1.78-4 4-4a4 4 0 0 1 4 4 4 4 0 0 1-4 4zM9 17c3 0 9 1.47 9 4.4V25H0v-3.6C0 18.47 6 17 9 17zm13.14-1.98c3.62.2 9.86 2.14 9.86 5.81v4.05l-9.86-9.86zM27.88 25h-6.34v-3.75c0-1.08-.28-2.77-1.76-4.35l8.1 8.1zm-8.45-8.45c-.4-.37-.87-.74-1.43-1.08l.28-.07 1.15 1.15z"></path><path d="M2.44 3.56l26 26 1.06 1.06 2.12-2.12-1.06-1.06-26-26L3.5.38 1.38 2.5l1.06 1.06z"></path></g></svg>
                                                    </div>
                                                    <div className='no_followers_box_content'>User has no followers</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade  ${activeTab === 'following' ? 'show active' : ''}`}>
                                <div className='container mt-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-8'>
                                            {profileDatas?.user.following.length ? (
                                                <div className='follower-list'>
                                                    {profileDatas?.user.following && profileDatas?.user.following.map((item, index) => (
                                                        <FollowUserCard
                                                            key={'add'+index}
                                                            id={item.id}
                                                            index={index}
                                                            image={item.image_url}
                                                            name={(item.f_name ? item.f_name : '') + (item.l_name ? ' ' + item.l_name : '') || item.wallet_id}
                                                            username={item.username}
                                                            is_follow={item.is_follow}
                                                            handleUpdate={handleUpdateData}
                                                            ismainprofile={true}
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className='no_followers_box text-center'>
                                                    <div className='no_followers_box_body'>
                                                        <div className='no_followers_box_icon'>
                                                            <svg width="40" height="39" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M8 15a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4zm14-2a3.99 3.99 0 0 1-4-4c0-2.21 1.78-4 4-4a4 4 0 0 1 4 4 4 4 0 0 1-4 4zM9 17c3 0 9 1.47 9 4.4V25H0v-3.6C0 18.47 6 17 9 17zm13.14-1.98c3.62.2 9.86 2.14 9.86 5.81v4.05l-9.86-9.86zM27.88 25h-6.34v-3.75c0-1.08-.28-2.77-1.76-4.35l8.1 8.1zm-8.45-8.45c-.4-.37-.87-.74-1.43-1.08l.28-.07 1.15 1.15z"></path><path d="M2.44 3.56l26 26 1.06 1.06 2.12-2.12-1.06-1.06-26-26L3.5.38 1.38 2.5l1.06 1.06z"></path></g></svg>
                                                        </div>
                                                        <div className='no_followers_box_content'>User follows nobody</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade  ${activeTab === 'setting' ? 'show active' : ''}`}>
                                <div className="creator__tab">
                                    <nav className='nav-border sub-nav-area'>
                                        <div className="nav nav-tabs justify-content-md-center" id="nav-tab" role="tablist">
                                            <div className='tab_box'>
                                                <button className={`nav-link ${subsattingtab === 'PROFILEINFO' ? 'active' : ''}`} onClick={() => handleSubTabClick('PROFILEINFO')}>PROFILE INFORMATION</button>
                                                <button className={`nav-link ${subsattingtab === 'CHANGEPASS' ? 'active' : ''}`} onClick={() => handleSubTabClick('CHANGEPASS')}>CHANGE PASSWORD</button>
                                                <button className={`nav-link ${subsattingtab === 'TRANSECTION' ? 'active' : ''}`} onClick={() => handleSubTabClick('TRANSECTION')}>TRANSACTIONS</button>
                                                <button className={`nav-link ${subsattingtab === 'NOTIFICATION' ? 'active' : ''}`} onClick={() => handleSubTabClick('NOTIFICATION')}>NOTIFICATION</button>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="profile__tab-content">
                                        <div className="tab-content" id="profile-tabContent">
                                            <div className={`tab-pane fade  ${subsattingtab === 'PROFILEINFO' ? 'show active' : ''}`}>
                                                <div className='container mt-5 '>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-md-8'>
                                                            <UpdateProfile data={profileDatas?.user} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade  ${subsattingtab === 'CHANGEPASS' ? 'show active' : ''}`} >
                                                <div className='container mt-5'>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-md-8'>
                                                            <ChangePassword />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade  ${subsattingtab === 'TRANSECTION' ? 'show active' : ''}`}>
                                                <div className='container mt-5'>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-md-8'>
                                                            <div className="profile__ticket table-responsive">
                                                                <div className='my_plan_body'>
                                                                    <div className='my_plan_header'>
                                                                        <h3 className="my_plan_header_title fs-4">My plan</h3>
                                                                    </div>
                                                                    <div className='my_plan_header_table'>
                                                                        <div className='table_content'>
                                                                            <div>
                                                                                <span>Current plan</span>

                                                                                <h4 className='mt-1'>{activePlanData?.active_plan ? ('Pro') : 'No Active Plan'}</h4>
                                                                            </div>
                                                                        </div>
                                                                        {!activePlanData?.active_plan ? (
                                                                            <div className="contact__btn">
                                                                                <Link passHref href='/pricing'><a className="gradient-text-btn mobile-small rounded-full">Update</a></Link>
                                                                            </div>
                                                                        ) : 
                                                                        <div className="contact__btn">
                                                                                <button onClick={() => cancelPlan(activePlanData.plan_data.id)} className="gradient-text-btn mobile-small rounded-full">Cancel</button>
                                                                            </div>
                                                                            }
                                                                    </div>
                                                                </div>


                                                                <div className='my_plan_body mt-4'>
                                                                    <div className='my_plan_header'>
                                                                        <h3 className="my_plan_header_title fs-4">SUBSCRIBER CLASSIFICATION</h3>
                                                                    </div>
                                                                    <div className='my_plan_header_table subscriber'>
                                                                        <div className='table_content'>
                                                                            <div>
                                                                                <h4 className='mt-1'>Status is  {activePlanData?.active_plan ? ('Active') : 'not declared '}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5H6Z"></path></svg></h4>
                                                                            </div>
                                                                        </div>
                                                                        {/* <div className="contact__btn">
                                                                            <button className="gradient-text-btn rounded-full">Edit</button>
                                                                        </div> */}
                                                                    </div>
                                                                </div>

                                                                <div className='table_p mt-4'>
                                                                    <p>
                                                                        ChainStats does not store your payment credentials. They are encrypted and passed to PayPal and Braintree through their API that we use to process all payments. This API allows us to create a protected link to the payment method, if the card was used to purchase anything on our website and the transaction was successful. Thus we are able to provide you with an easy and secure way to purchase anything else in two clicks on our site.
                                                                    </p>
                                                                </div>
                                                                <TransectionTable />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade  ${subsattingtab === 'NOTIFICATION' ? 'show active' : ''}`}>
                                                <div className='container mt-5'>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-md-8'>
                                                            <NotificationSetting
                                                                likefollow={profileDatas?.user.like_follow_notification}
                                                                payment={profileDatas?.user.payment_notification}
                                                                update={profileDatas?.user.profile_update_notification}
                                                                comments={profileDatas?.user.comments_notification}
                                                                chart={profileDatas?.user.charts_notification}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const cookies = parseCookies(context);
        const token = cookies.token;
        if (!token) {
            // Handle case where token is not available
            return {
                redirect: {
                    destination: '/login', // Redirect to login page if token is not available
                    permanent: false,
                },
            };
        }

        const response = await axios.get(ACTION_ROUTES.GetProfileInfoAPI, {
            headers: {
                Authorization: `Bearer ${token}` // Include token in authorization header
            }
        });

        if (response.status === 200) {
            const profileData = response.data; // Extract profile data from response
            return {
                props: {
                    profileData
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