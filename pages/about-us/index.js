import React, { useEffect } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router.js';
import Seo from '../../components/Seo.js';

AboutUs.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function AboutUs() {

    const router = useRouter();

    const metaData = {
        title: `About Us - ChainStats - Unleash the data`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };


    return (
        <>
                            <Seo {...metaData} />

            <section className="about__area position-relative pt-120 pb-60">
                <div className="about__shape">
                    <div className='about__shape-1'>
                        <Image width={49} height={49} src="/img/about-shape-1.png" alt="" className="about__shape-1" />
                    </div>
                    <div className='about__shape-2'>
                        <Image width={140} height={140} src="/img/about-shape-2.png" alt="" className="about__shape-2" />
                    </div>
                    <div className='about__shape-3'>
                        <Image width={200} height={200} src="/img/about-shape-3.png" alt="" className="about__shape-3" />
                    </div>
                    <div className='about__shape-4'>
                        <Image width={50} height={50} src="/img/about-shape-4.png" alt="" className="about__shape-4" />
                    </div>

                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9 col-md-10">
                            <div className="about__wrapper">
                                <div className="about__content">
                                    <div className="about__title-wrapper text-center mb-60">
                                        <h3 className="mission__title-pre">About<span className="from-red-600 to-violet-600 text-transparent bg-clip-text"> ChainStats </span></h3>
                                        <h3 className="about__title">Make OnChain
                                            <span className="from-red-600 to-violet-600 text-transparent bg-clip-text">Data Available For Everyone!</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                            <div className="about__thumb-wrapper">
                                <div className="about__thumb w-img">
                                    <Image width={283} height={487} src="/img/about-1.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8">
                            <div className="row align-items-end">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={437} height={332} src="/img/about-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={206} height={279} src="/img/about-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={206} height={279} src="/img/about-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={283} height={287} src="/img/about-5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={360} height={351} src="/img/about-6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="about__thumb-wrapper">
                                        <div className="about__thumb w-img">
                                            <Image width={206} height={279} src="/img/about-7.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission area  */}
            <section className="mission__area pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-10">
                            <div className="mission__wrapper">
                                <div className="mission__title-wrapper">
                                    <h3 className="section__title-3 text-center mb-20">Our Values &amp; <span className="from-red-600 to-violet-600 text-transparent bg-clip-text"> Community</span></h3>
                                    <p className="mb-20">The roots of our overall vision and goal began with our community. It’s not only a core part to our continued development, but it will be an integral component to the full #ChainStats objective. From assisting in data validation, voting for future developments &amp; network integrations, to our goals beyond the application with building a unified family one can call home. </p>
                                </div>

                                <div className="mission__counter position-relative">
                                    <span className="mission__counter-vr-br"></span>
                                    <span className="mission__counter-vr-br mission__counter-vr-br-2"></span>
                                    <span className="mission__counter-hr-br"></span>
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={42} height={34} src="/img/counter-1.png" alt="" />

                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4><span className="counter">336</span></h4>
                                                    <p>Since Launching</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start justify-content-md-center">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={37} height={35} src="/img/counter-2.png" alt="" />
                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4><span className="counter">0</span>M+</h4>
                                                    <p>Total User</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start justify-content-md-end">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={29} height={34} src="/img/counter-3.png" alt="" />
                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4><span className="counter">27</span>+</h4>
                                                    <p>Total Employees</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={34} height={33} src="/img/counter-4.png" alt="" />
                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4><span className="counter">0</span>M+</h4>
                                                    <p>Total ChainGuardian</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start justify-content-md-center">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={31} height={31} src="/img/counter-5.png" alt="" />
                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4><span className="counter">0</span>k+</h4>
                                                    <p>Charts Created</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div className="mission__counter-item d-flex align-items-start justify-content-md-end">
                                                <div className="mission__counter-icon mr-10">
                                                    <Image width={44} height={29} src="/img/counter-6.png" alt="" />
                                                </div>
                                                <div className="mission__counter-content">
                                                    <h4>$<span className="counter">2</span>B+</h4>
                                                    <p>Charts Volume</p>
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
            {/* video area  */}
            <section className="video__area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="video__content">
                                <div className="video__thumb w-img">
                                    <Image width={1206} height={603} src="/img/video-bg.jpg" alt="" />
                                    <div className="video__play">
                                        <a href="https://youtu.be/zVVnt6KvoB0" className="video__play-btn popup-video"><i className="fa-solid fa-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* team area  */}
            <section className="team__area">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper text-center mb-35">

                                <h3 className="section__title-3">Meet our  <span className="from-red-600 to-violet-600 text-transparent bg-clip-text">team member</span></h3>

                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-4 row-cols-md-2">
                        <div className="col col-md-4">
                            <div className="team__item text-center mb-30 transition-3">
                                <div className="team__thumb">
                                    <a href="#">
                                        <Image width={120} height={120} src="/img/brain.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__title">

                                        <a href="#">Brian Jun</a>
                                    </h3>
                                    <p className="team__position">CEO &amp; Co-Founder</p>

                                    <div className="team__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <div className="team__item text-center mb-30 transition-3">
                                <div className="team__thumb">
                                    <a href="#">
                                        <Image width={120} height={120} src="/img/josh.png" alt="" />
                                    </a>
                                </div>
                                <div className="team__content">

                                    <h3 className="team__title">
                                        <a href="profile.html">Joshua Milbers</a>
                                    </h3>
                                    <p className="team__position" >CTO &amp; Co-Founder</p>

                                    <div className="team__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <div className="team__item text-center mb-30 transition-3">
                                <div className="team__thumb">
                                    <a href="#">
                                        <Image width={120} height={120} src="/img/josh.png" alt="" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__title">
                                        <a href="profile.html">Joshua Milbers</a>
                                    </h3>
                                    <p className="team__position">CTO &amp; Co-Founder</p>

                                    <div className="team__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <div className="team__item text-center mb-30 transition-3">
                                <div className="team__thumb">
                                    <a href="#">
                                        <Image width={120} height={120} src="/img/josh.png" alt="" />

                                    </a>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__title">
                                        <a href="profile.html">Joshua Milbers</a>
                                    </h3>
                                    <p className="team__position">CTO &amp; Co-Founder</p>

                                    <div className="team__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <div className="team__item text-center mb-30 transition-3">
                                <div className="team__thumb">
                                    <a href="#">
                                        <Image width={120} height={120} src="/img/josh.png" alt="" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h3 className="team__title">
                                        <a href="profile.html">Joshua Milbers</a>
                                    </h3>
                                    <p className="team__position">CTO &amp; Co-Founder</p>

                                    <div className="team__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team__line mt-60 mb-60"></div>
                </div>
            </section>
            {/* join area  */}
            <section className="join__area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper text-center mb-55">
                                <h3 className="section__title-3 mb-20">Interested in <span className="from-red-600 to-violet-600 text-transparent bg-clip-text"> joining us? </span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                            <div className="join__item text-center mb-30">
                                <div className="join__thumb mb-25">
                                    <Image width={40} height={47} src="/img/join-1.png" alt="" />
                                </div>
                                <div className="join__content">
                                    <h3 className="join__title" >Join our <span>Community</span></h3>

                                    <div className="join__social">
                                        <a    href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-discord"></i></a>
                                        <a href="#"><i className="fa-brands fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                            <div className="join__item text-center mb-30">
                                <div className="join__thumb mb-25">
                                    <Image width={45} height={44} src="/img/join-2.png" alt="" />

                                </div>
                                <div className="join__content">
                                    <h3 className="join__title">Become a  <span>ChainGuardian</span></h3>
                                    <Link href={'/register'} passHref><button className='gradient-text-btn rounded-full'>Sign Up</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                            <div className="join__item text-center mb-30">
                                <div className="join__thumb mb-25">
                                    <Image width={51} height={44} src="/img/join-3.png" alt="" />
                                </div>
                                <div className="join__content">
                                    <h3 className="join__title">Reach out to  <span>our team</span></h3>
                                    <Link href={'mailto:info@chainstats.pro'} passHref><button className='gradient-text-btn rounded-full'>info@chainstats.pro</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// export async function getServerSideProps() {
//   try {
//     const response = await apiService.get(ACTION_ROUTES.HomeAPI);
//     return {
//       props: {
//         HomeData: response || [], // Ensure categoryList is always an array
//         error: false,
//       },
//     };
//   } catch (error) {
//     // Handle the error scenario
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         HomeData: [], // Provide an empty array in case of an error
//         error: true,
//       },
//     };
//   }
// }