import React from 'react';
import Image from 'next/image';


export default function BannerSec() {
    return (
        <>
            <section className="slider__area pt-20 p-relative d-flex align-items-center main-bt-area">
                {/* <Image priority className="banner-img" src="/img/hand.png" fill objectFit='contain' objectPosition='center' alt="" /> */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="slider__content-3">
                                <div className="slider__search text-center">
                                    <h3 className="bt-title">unleash the <span className="banner-clip">data</span></h3>
                                    <span className='bt-subtitle'>{`We're bringing blockchain utilization to the world in its most authentic form`}</span>
                                    <Image width={170} height={15} priority className="slider-title-shape" src="/img/slider-stoke-shape.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}