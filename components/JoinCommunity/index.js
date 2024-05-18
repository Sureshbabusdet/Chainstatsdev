import React, { useEffect, useState } from 'react';
import Image from 'next/future/image';
import { ACTION_ROUTES } from '../../constants/constant';
import axios from 'axios';
import Link from 'next/link';

export default function Joincommunity() {

    const [social, setSocial] = useState({});
    const [error, setError] = useState(false);
  
    const getSocialMedia = async () => {
        try {
            const response = await axios.get(ACTION_ROUTES.communitySocialAPI);
            setSocial(response.data.community)
        } catch (error) {
            console.error('Something Went Wrong: -- Footer Social --', error);
            setError(error);
        }
    };

    useEffect(() => {
        getSocialMedia();
    }, []);

    return (
        <section className="ifo__area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-7 col-lg-6">
                        <div className="ifo__box">
                            <div className="ifo__box-wrapper position-relative fix">
                                <div className="ifo__box-bg" style={{backgroundImage: 'url(/img/cta-bg.jpg)',borderRadius: '15px'}}></div>
                                <div className="ifo__box-inner">
                                    <div className="ifo__box-content text-center">
                                        <span>ChainStats</span>
                                        <h3 className="ifo__box-title">{`We're bringing blockchain utilization to the world in its most authentic form`}</h3>
                                        <div className="ifo__box-btn">
                                            <div className="collection__box-user d-inline-block">
                                                <div className="collection__box-user-inner d-flex align-items-center">
                                                    <div className="collection__box-user-content">
                                                        <Link href={'/contact-us'} passHref>
                                                            <>
                                                                <Image width={32} height={32} layout='raw' src="/img/favicon.png" alt="" />
                                                                <a className='cursorPointer'>{`Let's Chat`}</a>
                                                            </>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-6">
                        <div className="community__wrapper text-center">
                            <div className="community__content ">
                                <h3 className='text-capitalize mb-3'>Join our <br /> Amazing community</h3>
                                <p className='mb-3'>Discover the team, community, and vital info for platform updates.</p>
                            </div>
                            <div className="community__social">
                                {social.twitter && <Link href={social.twitter} passHref><a target='_blank'><i className="fa-brands fa-twitter"></i></a></Link>}
                                {social.instagram && <Link href={social.instagram} passHref><a target='_blank'><i className="fa-brands fa-instagram"></i></a></Link>}
                                {social.discord && <Link href={social.discord} passHref><a target='_blank'><i className="fa-brands fa-discord"></i></a></Link>}
                                {social.github && <Link href={social.github} passHref><a target='_blank'><i className="fa-brands fa-github"></i></a></Link>}
                                {social.youtube && <Link href={social.youtube} passHref><a target='_blank'><i className="fa-brands fa-youtube"></i></a></Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}