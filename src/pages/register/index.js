import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './login.css';
import Link from 'next/link';
import Image from 'next/image';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

Register.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Register() {
    const router = useRouter();
    const metaData = {
        title: 'Register - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Register - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <section className="login__area pb-30 pt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="login__wrapper">

                                <div className="login__top text-center">
                                    <h3 >Register</h3>
                                    <p>Already have an account? <Link href="/login">Sign in </Link></p>
                                </div>
                                <div className="login__form">
                                    <form action="#">
                                        <div className="login__input-box">
                                            <div className="login__input-title">
                                                <h4>Enter name <span>*</span></h4>
                                            </div>
                                            <div className="login__input">
                                                <input type="text" placeholder="Your full name" />
                                                <span className="login__input-icon">
                                                    <i className="fa-solid fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="login__input-box">
                                            <div className="login__input-title">
                                                <h4>Enter email <span>*</span></h4>
                                            </div>
                                            <div className="login__input">
                                                <input type="text" placeholder="Enter your email" />
                                                <span className="login__input-icon">
                                                    <i className="fa-light fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="login__input-box">
                                            <div className="login__input-title d-flex align-items-center justify-content-between">
                                                <h4>Password <span>*</span></h4>
                                                {/* <div className="forgot-password">
                                       <a href="forgotpassword.php">Forgot Password?</a>
                                    </div> */}
                                            </div>
                                            <div className="login__input">
                                                <input type="password" placeholder="Enter your password" />
                                                <span className="login__input-icon">
                                                    <i className="fa-light fa-lock"></i>
                                                </span>
                                                <span className="login__input-password-visible">
                                                    <i className="fa-light fa-eye"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="login__btn mb-20">
                                            <button className="tp-btn-4 w-100">register</button>
                                        </div>
                                        <div className="login__signup text-center">
                                            <p>Or <a href="login.html">Sing in</a> with email</p>
                                        </div>
                                        <div className="login__option-wrapper">
                                            <div className="login__option-item mb-15">
                                                <a href="#" className="login__option-btn w-100">
                                                    <Image width={21} height={22} src="/img/google.png" alt="" />
                                                    Continue with Google</a>
                                            </div>
                                            <div className="login__option-item">
                                                <a href="#" className="login__option-btn w-100">
                                                    <Image width={21} height={22} src="/img/facebook.png" alt="" />
                                                    Continue with Facebook</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}