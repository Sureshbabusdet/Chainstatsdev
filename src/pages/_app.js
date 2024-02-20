import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Loader from '@/components/Loader/Loader';
import GoToTopButton from '@/components/GoToTopButton';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "simplebar-core/dist/simplebar.css";
import '../app/fontawesome-pro.css'
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { locale } = router; // Get the locale from the router
    const [isLoading, setIsLoading] = useState(false); // Set initial state to true

    const getLayout = Component.getLayout || ((page) => page);
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // For repeatable Animation
        })
    }, [])

    useEffect(() => {
        // Add a listener to start loading when a route changes
        const handleRouteChangeStart = () => {
            setIsLoading(true);
        };

        // Add a listener to stop loading when a route changes
        const handleRouteChangeComplete = () => {
            setIsLoading(false);
        };

        // Attach the listeners to the router
        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        // Clean up the listeners when the component unmounts
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router]);

    return (
        <>
            <style jsx global>{`
                body {
                    background : var(--tp-theme-dark);
                    color: #fff;
                }
               
                :root {
                    --main-theme-color: #3771FE;
                    --tp-common-white: #ffffff;
                    --tp-text-6: #A1A3B2;
                    --tp-theme-1: #3771FE;
                    --tp-theme-2: #007BFF;
                    --tp-theme-dark: #000000;
                    --tp-common-yellow-2: #FEDA03;
                    --tp-common-black-4: #05092B;
                    --tp-ff-fontawesome: "Font Awesome 6 Pro";
                    --font-family: 'Be Vietnam Pro', sans-serif;
                    --theme-color: #648FFF;
                    --primary-color: #1F1F1F;
                    --gray-color: #797979;
                    --theme-bg: rgba(80,101,181,0.2);
                    --black-gradient: linear-gradient(90deg, rgba(0, 0, 0, 0.70) -14.33%, rgba(0, 0, 0, 0.00) 70.98%);
                    --gradient-color: linear-gradient(127deg, #FFC76A 0%, #FF619D 100%);
                    --blue-gradient: linear-gradient(114deg, #648FFF 4.74%, #6CD6FF 126.15%);
                    --row1-gradient: linear-gradient(113deg, #FF619D 1.57%, #FF9E4B 146.18%);
                    --row2-gradient: linear-gradient(114deg, #648FFF 4.74%, #6CD6FF 126.15%);
                    --row3-gradient: linear-gradient(113deg, #FFC76A -31.13%, #FF9E4B 99.07%);
                    --tp-text-11: #A5A7B6;
                }
            `}</style>
            {isLoading ? <Loader isLoading={isLoading} /> :
                <main data-scroll-container>
                    {getLayout(<Component {...pageProps} />)}
                </main>
            }

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <GoToTopButton />
        </>
    );
}

export default MyApp;
