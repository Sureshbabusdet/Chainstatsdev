import React from 'react';
import './dashcharts.css';
import PiChart from './PiChart';
import PerformanceChart from './PerformanceChart';
import Gauge1 from './Gauge1';
import Gauge2 from './Gauge2';
import Gauge3 from './Gauge3';
import Image from 'next/image';

export default function DashChart() {
    return (
        <>
            <section className="seller__area dashboard-sec-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <div className="seller__item">
                                <div className='chart-rounded' id='#myChart'>
                                    <div className='flex flex-column '>
                                        <div className='performance-data'>
                                            <div>
                                                <h3>Portfolio Performance</h3>
                                                <h6>My Balance</h6>
                                                <div className='d-flex justify-content-between flex-wrap'>
                                                    <span className='price me-4'>$14,992.21</span>
                                                    <span className='inner-price'>
                                                        <span><span className='price-green'>Low</span> $13,992.21</span>
                                                        <span><span className='price-red'>High</span> $18,159.05</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='change24'>
                                                <span className='change1'>24h change</span>
                                                <span className='change2'>2.45%</span>
                                            </div>
                                        </div>
                                        <PerformanceChart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="seller__item">
                                <div className='chart-rounded'>
                                    <PiChart />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-7 col-md-6"> */}
                        {/* <div className='row'> */}

                        <div className=" col-xl-3 col-lg-4 col-md-12 ">
                            <div className="seller__item">
                                <div className='future-box'>
                                    <h3>Futures</h3>
                                    <h5>Check out your Futures PnL</h5>
                                    <p>2021-05-30 - 2021-06-04</p>
                                    <h5>Cumulation PNL %</h5>
                                    <span className='percentage'>101.43%</span>
                                    <div className='flex justify-content-between winrate-box'>
                                        <div>
                                            <h5>Cumulation PNL (USD)</h5>
                                            <span>50.91</span>
                                        </div>
                                        <div>
                                            <h5>Win Rate %</h5>
                                            <span>50.00%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="seller__item">
                                <div className='row align-items-center'>
                                    <div className='col-lg-4 col-md-4 position-relative zIndex-3'>
                                        <Gauge1 />
                                        <div className='box-shadow-gauge'></div>
                                    </div>
                                    <div className='col-lg-4 col-md-4 position-relative zIndex-3'>
                                        <Image width={2} height={300} alt='devider' src="/img/devider-line.png" className='line-devider left-line' />
                                        <Gauge2 />
                                        <div className='box-shadow-gauge'></div>
                                        <Image width={2} height={300} alt='devider' src="/img/devider-line.png" className='line-devider right-line' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 position-relative zIndex-3'>
                                        <Gauge3 />
                                        <div className='box-shadow-gauge'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
