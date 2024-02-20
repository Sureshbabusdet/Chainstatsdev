import MainLayout from '@/layouts/main/nav/MainLayout.js';
import Link from 'next/link';
import Image from 'next/image';
import '../register/login.css';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

ForgotPassword.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function ForgotPassword() {
    const router = useRouter();

    const metaData = {
        title: 'Forgot Password - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Forgot Password - ChainStats - Unleash the data',
        url: router.asPath,
    };
    
    return (
        <>
            <Seo {...metaData} />
           
           <section className="login__area pt-100 pb-40">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-8">
                     <div className="login__wrapper">
                       
                        <div className="login__top text-center">
                         
						    <h3>Reset your password</h3>
	
                           <p>We will send a password reset link</p>
                        </div>
                        <div className="login__form">
                           <form action="#">
                              <div className="login__input-box">
                                 <div className="login__input-title">
                                    <h4>Enter email <span>*</span></h4>
                                 </div>
                                 <div className="login__input">
                                    <input type="email" placeholder="Enter your email"/>
                                    <span className="login__input-icon">
                                       <i className="fa-light fa-envelope"></i>
                                    </span>
                                 </div>
                              </div>
                              
                              <div className="login__btn mb-20">
                                 <button className="tp-btn-4 w-100">Reset Password</button>
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