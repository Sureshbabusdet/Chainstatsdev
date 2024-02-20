import React from "react";
import './footer.css';
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
// import * as FaIcons from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from 'next/router';

const Footer = ({ data }) => {
    const facebook = process.env.SOCIAL_FACEBOOK;
    const instagram = process.env.SOCIAL_INSTAGRAM;
    const linkdin = process.env.SOCIAL_LINKEDIN;
    const twitter = process.env.SOCIAL_TWITTER;
    const dribbble = process.env.SOCIAL_DRIBBBLE;

    const router = useRouter();
    const locale = router.locale;
    return (
        <>
            <div className="footer__area footer__style-2">
                <div className="footer__top">
                    <div className="footer__top-border pt-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget mb-50 footer-col-4-1">
                                        <div className="footer__info">
                                            <div className="footer__logo">
                                                <Link href="#">
                                                    <Image className="logo-white img-fluid mb-4" src="/img/logo.png" alt="logo" width={200} height={70} />
                                                </Link>
                                            </div>
                                            <p>ChainStats is a cutting edge on-chain data focused company building towards the vision of unlocking the true potential of what blockchain data can bring to our world.</p>

                                            <div className="footer__social footer__social-2">
                                                <Link target="_blank" href={facebook} rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></Link>
                                                <Link target="_blank" href={twitter} rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></Link>
                                                <Link target="_blank" href={linkdin} rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                <Link target="_blank" href={dribbble} rel="noopener noreferrer"><i className="fa-brands fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget footer-col-2-2 mb-50">
                                        <h3 className="footer__widget-title">Marketplace</h3>

                                        <ul>
                                            <li><Link href="/about-us">About us</Link></li>
                                            <li><Link href="/about-us">Our Team</Link></li>
                                            <li><Link href="/contact-us">Support</Link></li>
                                            <li><Link href="/nodeportal">NodePortal</Link></li>
                                            <li><Link href="/pricing">Pricing</Link></li>
                                            <li><Link href="/charts">Charts</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget footer-col-2-3 mb-50">
                                        <h3 className="footer__widget-title">Community</h3>
                                        <ul>
                                            <li><Link href="/faq">Support FAQ</Link></li>
                                            <li><Link href="/career">Career</Link></li>
                                            <li><Link href="/chainguardians">Guardian</Link></li>
                                            <li><Link href="/register">Register</Link></li>
                                            <li><Link href="/login">Login</Link></li>
                                            <li><Link href="/wallet">Wallet</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget footer-col-2-4 mb-50">
                                        <h3 className="footer__widget-title">Subscribe</h3>
                                        <div className="footer__subscribe footer__subscribe-2">
                                            <p>Signup for our newsletter to get the latest news in your inbox.</p>
                                            <form action="#">
                                                <div className="footer__subscribe-form position-relative">
                                                    <div className="footer__subscribe-input">
                                                        <input type="email" placeholder="E-mail" />
                                                        <i className="fa-light fa-envelopes"></i>
                                                    </div>
                                                    <button className="footer__subscribe-input-btn">Subscribe</button>
                                                </div>
                                            </form>
                                            <p className="info">Your email is safe with us. We dont spam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__copyright">
                                    <p>© 2023 <Link href="/">ChainStats Inc.</Link> All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__menu text-sm-end">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                    <Link href="/imprint">Imprint</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default Footer;
