import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './contact.css'
import Link from 'next/link';
import Image from 'next/image';
import NiceSelect from '@/components/NiceSelect/NiceSelect';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

ContactUs.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function ContactUs() {
    const router = useRouter();

    const metaData = {
        title: 'Contact Us - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Contact Us - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <section className="contact__area pb-60 pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10 col-xl-10">
                            <div className="contact__wrapper">

                                <div className="contact__content text-center mb-40">
                                    <h3 className='get_in'>Get in Touch</h3>
                                    <p >Need support, have feature requests, looking for partnerships orwould like to make unlimited number of API calls? We respond within 24 hours during business days.</p>
                                </div>
                                <div className="contact__form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="contact__input-box">
                                                    <h4>Your name <span>*</span></h4>
                                                    <div className="contact__input">
                                                        <input type="text" placeholder="Enter your name" className='input_design' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="contact__input-box">
                                                    <h4>Your email <span>*</span></h4>
                                                    <div className="contact__input">
                                                        <input type="text" placeholder="Enter your email" className='input_design' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-md-6">
                                                <div className="contact__input-box">
                                                    <h4>Select a subject</h4>
                                                    <div className="contact__input">
                                                        <NiceSelect id="a-select" placeholder="Service Request" className="sampleClass">
                                                            <option value="Service Request" className='option selected focus'>Service Request</option>
                                                            <option value="Service 1" className='option'>Service 1</option>
                                                            <option value="Service 2" className='option'>Service 2</option>
                                                            <option value="Service 3" className='option'>Service 3</option>
                                                        </NiceSelect>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-md-6">
                                                <div className="contact__input-box">
                                                    <h4>Select country</h4>
                                                    <div className="contact__input">
                                                        <NiceSelect id="b-select" placeholder="United States" className="sampleClass">
                                                            <option value="United States" className='option selected focus'>United States</option>
                                                            <option value="United Kingdom" className='option'>United Kingdom</option>
                                                            <option value="Dubai" className='option'>Dubai</option>
                                                            <option value="Canada" className='option'>Canada</option>
                                                        </NiceSelect>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="contact__input-box">
                                                    <h4>Message <span>*</span></h4>
                                                    <div className="contact__input">
                                                        <textarea placeholder="How we can help you?" className='input_design'></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12">
                                                <div className="contact__bottom d-sm-flex align-items-center justify-content-between">
                                                    <div className="contact__agree d-flex align-items-center">
                                                        <input className="m-check-input" type="checkbox" id="m-lock" />
                                                        <label className="m-check-label" for="m-lock">Allow to all tearms &amp; condition</label>
                                                    </div>
                                                    <div className="collection__box-user d-inline-block">
                                                        <div className="collection__box-user-inner d-flex align-items-center">
                                                            <div className="collection__box-user-thumb">
                                                                <Link href="collection">
                                                                    <Image width={32} height={32} src="/img/favicon.png" alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="collection__box-user-content">
                                                                <h5>
                                                                    <Link href="#">Send message</Link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact__info pb-70">
                <div className="container">
                    <div className="contact__info-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                <div className="contact__info-item justify-content-center d-flex align-items-center mb-50">
                                    <div className="contact__icon mr-15">
                                        <span>
                                            <Image width={32} height={32} src="/img/contact-1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="contact__text">
                                        <p>Mail</p>
                                        <h4><a href="malto:info@chainstats.pro"><span className="__cf_email__">info@chainstats.pro</span></a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                <div className="contact__info-item justify-content-center d-flex align-items-center mb-50">
                                    <div className="contact__icon mr-15 contact-discord">
                                        <span>
                                            <Image width={32} height={32} src="/img/contact-2.png" alt="" />

                                        </span>
                                    </div>
                                    <div className="contact__text">
                                        <p>Support</p>
                                        <h4><a href="#">Suresh</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                <div className="contact__info-item justify-content-center d-flex align-items-center mb-50">
                                    <div className="contact__icon mr-15 contact-location">
                                        <span>
                                            <Image width={32} height={32} src="/img/contact-3.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="contact__text">
                                        <p>Office</p>
                                        <h4><Link href="#" target="_blank">Munich, Germany</Link></h4>
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