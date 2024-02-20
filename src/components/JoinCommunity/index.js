import React, { useEffect } from 'react';
import Image from 'next/image';
import './join.css';

export default function Joincommunity() {
    return (
        <section className="ifo__area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-7 col-lg-6">
                        <div className="ifo__box">
                            <div className="ifo__box-wrapper position-relative fix">
                                <div className="ifo__box-bg" style={{backgroundImage: 'url(/img/cta-bg.jpg)'}}></div>
                                <div className="ifo__box-inner">
                                    <div className="ifo__box-content text-center">
                                        <span>ChainStats</span>
                                        <h3 className="ifo__box-title">{`We're bringing blockchain utilization to the world in its most authentic form`}</h3>
                                        <div className="ifo__box-btn">
                                            <div className="collection__box-user d-inline-block">
                                                <div className="collection__box-user-inner d-flex align-items-center">
                                                    <div className="collection__box-user-thumb mr-10">
                                                        <a href="collection.html">
                                                            <Image width={32} height={32} src="/img/favicon.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="collection__box-user-content">
                                                        <h5>
                                                            <a href="collection.html">{`Let's Chat`}</a>
                                                        </h5>
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
                            <div className="community__content">
                                <h3 className='text-capitalize'>Join our <br /> Amazing community</h3>
                                <p>Discover the team, community, and vital info for platform updates.</p>
                            </div>
                            <div className="community__social">
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-discord"></i></a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}