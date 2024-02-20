import React, { useEffect } from 'react';
import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './pricing.css'
import Image from 'next/image';

Pricing.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Pricing() {
    return (
        <>
            <section className="login__area pb-10 pt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <section className="blog__area pb-100">
                                <div className="container">
                                    <div className="section__title-border mb-50">
                                        <div className="row">
                                            <div className="col-xxl-6 col-lg-12">
                                                <div className="section__title-wrapper-2 mr-15">
                                                    <h3 className="">Pricing - Make OnChain Data Available<span className="from-red-600 to-violet-600 text-transparent bg-clip-text"> For Everyone! </span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xxl-6 col-lg-6">
                                            <div className="blog__item   text-center  mb-30">
                                                <div className="blog__content-wrapper include-bg p-relative transition-3 fix" >
                                                    <div className="blog__content mb-20">
                                                        <div className="blog__tag">
                                                            <span><a href="#">Monthly</a></span>
                                                        </div>
                                                        <h3 className="blog__title">
                                                            <a href="#">Explore Quick View Charts power and power Of the CoinStats Collective</a>
                                                        </h3>
                                                        <div className="collection__box-user d-inline-block  mt-20 mb-10">
                                                            <div className="collection__box-user-inner d-flex align-items-center">
                                                                <div className="collection__box-user-thumb mr-10">
                                                                    <a href="#">
                                                                    <Image width={120} height={120} src="/img/favicon.png" alt="" />

                                                                    </a>
                                                                </div>
                                                                <div className="collection__box-user-content">
                                                                    <h5>
                                                                        <a href="#">Buy Plan</a>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-lg-6">
                                            <div className="blog__item  text-center  mb-30">
                                                <div className="blog__content-wrapper include-bg include-bg-2 p-relative transition-3 fix"  >
                                                    <div className="blog__content mb-20">
                                                        <div className="blog__tag">
                                                            <span><a href="#">Yearly</a></span>
                                                        </div>
                                                        <h3 className="blog__title">
                                                            <a href="#">Explore Quick View Charts power and power Of the CoinStats Collective</a>
                                                        </h3>
                                                        <div className="collection__box-user d-inline-block mt-20 mb-10">
                                                            <div className="collection__box-user-inner d-flex align-items-center">
                                                                <div className="collection__box-user-thumb mr-10">
                                                                    <a href="collection.html">
                                                                    <Image width={120} height={120} src="/img/favicon.png" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="collection__box-user-content">
                                                                    <h5>
                                                                        <a href="#">Buy Plan</a>
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
                            </section>

                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}