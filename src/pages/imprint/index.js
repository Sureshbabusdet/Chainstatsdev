import React, { useEffect } from 'react';
import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './imprint.css'
import Image from 'next/image';

Imprint.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Imprint() {
    return (
        <>
            <section className="privacy__area pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="privacy__wrapper">
                                <div className="privacy__item">
                                    <h3 className="section__title-3">Impr<span className="from-red-600 to-violet-600 text-transparent bg-clip-text">int</span></h3>

                                    <div className="contact__content  mt-20">
                                        <h3>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h3>
                                    </div>
                                    <p>

                                        ChainStats, Inc.<br />
                                        651 North Broad Street<br />
                                        19709 Middletown
                                        <br /><br />
                                        Represented by:<br />
                                        Brian Jun<br />
                                        <br />
                                        Contact
                                        <br />
                                        Phone: +4915770441160 <br />
                                        E-mail: support@chainstats.pro <br />
                                    </p>
                                    <p>
                                        Dispute resolution proceedings in front of a consumer arbitration board
                                        We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}