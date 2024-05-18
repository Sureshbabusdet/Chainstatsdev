import React, { useState } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/future/image';
import { Spinner, Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant.js';
import FollowUserCard from '../../components/FollowUserCard.js';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router.js';
import Seo from '../../components/Seo.js';
import EthereumAddress from '../../components/EthereumAddress.js';

OtherProfile.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

const Tooltipwrap = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
        <a href="#">{children}</a>
    </OverlayTrigger>
);

export default function OtherProfile({ profileData }) {
    const router = useRouter();
     const { slug } = router.query;

    const [profileDatas, setProfileDatas] = useState(profileData);
    const [isFollowing, setIsFollowing] = useState(profileData?.profile.is_follow);
    const [copied, setCopied] = useState(false);
    const [loading, setLoding] = useState(false);
    const [activeTab, setActiveTab] = useState('followers');
    const cookies = parseCookies();
    const token = cookies.token;

    const handleToggleFollow = (id) => {
        if (isFollowing) {
            setLoding(true);
            unfollowUser(id);
        } else {
            setLoding(true);
            followUser(id);

        }
    };

    const followUser = async (userId) => {
        try {

            const response = await axios.post(ACTION_ROUTES.FollowUserAPI + '/' + userId, '' ,{
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            if (response.status === 200) {
                setIsFollowing(true);
            } else {
                toast.error('Please try again later.');
            }
            setLoding(false);
        } catch (error) {
            // console.log(`Error In follow User : ${error}`);
        }
    };

    const unfollowUser = async (userId) => {
        try {
            const response = await axios.delete(ACTION_ROUTES.UnFollowUserAPI + '/' + userId, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
    
            if (response.status === 200) {
                setIsFollowing(false);
                setLoding(false);

            } else {
                toast.error('Please try again later.');
            }
        } catch (error) {
            // console.log(`Error In Unfollow User: ${error}`);
        }
    };

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

    const getProfileData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        try {
            const response = await axios.get(`${ACTION_ROUTES.OtherProfileAPI}/${slug}`, {
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
    const handleUpdateData = () => {
        setTimeout(() => {
            getProfileData();
        }, 1500);
    }

    const metaData = {
        title: `${profileDatas?.profile.f_name   !== null ?  profileDatas?.profile.f_name + ' ' : ''} ${profileDatas?.profile.l_name !== null ?  profileDatas?.profile.l_name : 'Profile'} || ChainStats`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };
    
    return (
        <>
            <Seo {...metaData} />
            <section className="creator__area mt-80">
                <div className="creator__banner include-bg" style={{ backgroundImage: `url('${profileDatas?.profile.banner_url || '/img/Twitter-Header.jpg'}')` }}>
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
                                            <Image width={120} height={120} className='bg-white' src={`${profileDatas?.profile.image_url || '/img/user.jpg'}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="creator__user-title">{profileDatas?.profile.f_name && profileDatas?.profile.f_name + ' '}{profileDatas?.profile.l_name && profileDatas?.profile.l_name}</h3>
                                <div className="creator__user-copyright d-inline-block">
                                    {profileDatas?.profile.wallet_id && (
                                        <div className="creator__user-copyright-inner d-flex align-items-center">
                                            <div className="creator__user-copyright-icon">
                                                <i className="fa-brands fa-ethereum"></i>
                                            </div>
                                            <div className="creator__user-copyright-text">
                                                <span>{EthereumAddress({ address: profileDatas?.profile.wallet_id })}</span>
                                            </div>  
                                        </div>
                                    )}
                                </div>

                                <div className="creator__follow d-flex justify-content-center gap-5">
                                    <div className='creator__follow_body'>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Rewards" id="t-1"><p><span>{profileDatas?.profile.rewards}</span> <i className="fa-solid fa-trophy"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Rewards</span>
                                        </div>
                                    </div>
                                    <div className='creator__follow_body' onClick={() => handleTabClick('following')}>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Following" id="t-1"><p><span>{profileDatas?.profile.following_count}</span> <i className="fa-solid fa-users"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Following</span>
                                        </div>
                                    </div>

                                    <div className='creator__follow_body' onClick={() => handleTabClick('followers')}>
                                        <div className='creator__follow_icon'>
                                            <Tooltipwrap title="Followers" id="t-1"><p><span>{profileDatas?.profile.followers_count}</span> <i className="fa-solid fa-users"></i></p></Tooltipwrap>
                                        </div>
                                        <div className='content'>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="creator__action">
                                    <ul>
                                        <li><button className={`follow-button ${!isFollowing ? 'isfollow' : 'notfollow'}`} onClick={() => handleToggleFollow(profileDatas?.profile.id)}> {loading ? <span><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</span> : !isFollowing ? 'Follow' : 'Unfollow'}</button></li>
                                        <li><button data-bs-toggle="modal" data-bs-target="#sharemodal">Share</button></li>
                                        {/* <li>
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
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="creator__tab">
                        <nav>
                            <div className="nav nav-tabs justify-content-md-center" id="nav-tab" role="tablist">
                                <div className='tab_box'>
                                    <button className={`nav-link ${activeTab === 'followers' ? 'active' : ''}`} onClick={() => handleTabClick('followers')} >FOLLOWERS </button>
                                    <button className={`nav-link ${activeTab === 'following' ? 'active' : ''}`} onClick={() => handleTabClick('following')} >FOLLOWING</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="creator__tab pb-60">
                    <div className="">
                        <div className="tab-content">
                            <div className={`tab-pane fade  ${activeTab === 'followers' ? 'show active' : ''}`}>
                                <div className='container mt-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-8'>
                                            {profileDatas?.profile?.followers.length ? (
                                                <div className='follower-list'>
                                                    {profileDatas?.profile.followers && profileDatas?.profile.followers.map((item, index) => (
                                                        <FollowUserCard 
                                                            key={`user-${index}`}
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
                                            {profileDatas?.profile?.following.length ? (
                                                <div className='follower-list'>
                                                    {profileDatas?.profile.following && profileDatas?.profile.following.map((item, index) => (
                                                        <FollowUserCard 
                                                            key={index}
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
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
    const cookies = parseCookies(context);
    const token = cookies.token;

    try {
        if (!token) {
            // Handle case where token is not available
            return {
                redirect: {
                    destination: '/login', // Redirect to login page if token is not available
                    permanent: false,
                },
            };
        }

        const response = await axios.get(`${ACTION_ROUTES.OtherProfileAPI}/${slug}`, {
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