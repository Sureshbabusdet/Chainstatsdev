import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './profile.css'
import Image from 'next/image';
import { Dropdown, Tab, Tabs } from 'react-bootstrap';

Profile.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Profile() {
    const [activeTab, setActiveTab] = useState('nav-created');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <section className="creator__area mt-80">
                <div className="creator__banner include-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="creator__user-wrapper text-center">
                                <div className="creator__user-thumb">
                                    <Image width={50} height={50} src="/img/josh.png" alt="" />
                                </div>
                                <h3 className="creator__user-title">Joshua Milbers</h3>
                                <div className="creator__user-copyright d-inline-block">
                                    <div className="creator__user-copyright-inner d-flex align-items-center">
                                        <div className="creator__user-copyright-icon">
                                            <i className="fa-brands fa-ethereum"></i>
                                        </div>
                                        <div className="creator__user-copyright-text">
                                            <span>0xF74d ... 1224</span>
                                            <button type="button" className='svg_btn'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.6">
                                                        <path d="M5.80388 13.2632H3.5941C1.28115 13.2632 0 11.9967 0 9.68638V3.57677C0 1.27497 1.27255 0 3.5941 0H7.52354C9.83649 0 11.1176 1.26642 11.1176 3.57677C11.1176 3.92761 10.8253 4.21854 10.4728 4.21854C10.1202 4.21854 9.8279 3.92761 9.8279 3.57677C9.8279 1.96808 9.14003 1.28353 7.52354 1.28353H3.5941C1.97762 1.28353 1.28975 1.96808 1.28975 3.57677V9.68638C1.28975 11.2951 1.97762 11.9796 3.5941 11.9796H5.80388C6.15641 11.9796 6.44875 12.2706 6.44875 12.6214C6.44875 12.9722 6.15641 13.2632 5.80388 13.2632Z" fill="white"></path>
                                                        <path d="M11.8705 14H9.54195C8.17131 14 7.41211 13.1959 7.41211 11.729V7.84992C7.41211 6.38846 8.16622 5.57895 9.54195 5.57895H11.8705C13.2411 5.57895 14.0003 6.38302 14.0003 7.84992V11.729C14.0003 13.1959 13.2462 14 11.8705 14ZM9.54195 6.39389C8.58403 6.39389 8.17641 6.82852 8.17641 7.84992V11.729C8.17641 12.7504 8.58403 13.1851 9.54195 13.1851H11.8705C12.8284 13.1851 13.236 12.7504 13.236 11.729V7.84992C13.236 6.82852 12.8284 6.39389 11.8705 6.39389H9.54195Z" fill="white" stroke="white" stroke-width="0.2"></path>
                                                    </g>
                                                </svg>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="creator__follow">
                                    <p><span>604</span> followers</p>
                                    <p><span>2</span> following</p>
                                </div>
                                <div className="creator__action">
                                    <ul>
                                        <li><a href="#">Follow</a></li>
                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#messagemodal">Send Message</a></li>
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
                                </div>
                                <div className="creator__tab">
                                    <nav>
                                        <div className="nav nav-tabs justify-content-md-center" id="nav-tab" role="tablist">
                                            <button className={`nav-link ${activeTab === 'nav-sale' ? 'active' : ''}`} onClick={() => handleTabClick('nav-sale')} id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-controls="nav-sale" aria-selected="true">HEALTH OF VALIDATORS<span className="number">12</span></button>
                                            <button className={`nav-link ${activeTab === 'nav-created' ? 'active' : ''}`} onClick={() => handleTabClick('nav-created')} id="nav-created-tab" data-bs-toggle="tab" data-bs-target="#nav-created" type="button" role="tab" aria-controls="nav-created" aria-selected="false">REWARDS FOR VALIDATORS <span className="number">24</span></button>
                                            <button className={`nav-link ${activeTab === 'nav-collection' ? 'active' : ''}`} onClick={() => handleTabClick('nav-collection')} id="nav-collection-tab" data-bs-toggle="tab" data-bs-target="#nav-collection" type="button" role="tab" aria-controls="nav-collection" aria-selected="false">AMOUNT OF VALIDATED DATA</button>
                                            <button className={`nav-link ${activeTab === 'nav-liked' ? 'active' : ''}`} onClick={() => handleTabClick('nav-liked')} id="nav-liked-tab" data-bs-toggle="tab" data-bs-target="#nav-liked" type="button" role="tab" aria-controls="nav-liked" aria-selected="false">UPTIME AND BUG REPORTS <span className="number">24</span></button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="creator__border"></div>
                <div className="creator__item-wrapper pt-40 pb-120">
                    <div className="container" style={{ height: '600px' }}>
                    </div>
                </div>
            </section>
        </>
    )
}