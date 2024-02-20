import { useRouter } from 'next/router';
import Footer from '../footer/Footer';
import Header from './Header';
import { ACTION_ROUTES } from '@/constants/constant';
import { useState, useEffect } from 'react';
import Favicons from './Favicons';

const MainLayout = ({ children }) => {
    const router = useRouter();
    const locale = router.locale;
    
    const [general, setGeneral] = useState({});
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await apiService.get(ACTION_ROUTES.GeneralAPI);
    //             const generalData = response || {};
    //             setGeneral(generalData);
    //             setError(false);
    //         } catch (error) {
    //             // Handle the error scenario
    //             console.error('Error fetching data:', error);
    //             setGeneral({});
    //             setError(true);
    //         }
    //     }

    //     fetchData();
    // }, []); // The empty array [] means this effect runs once after the initial render

    return (
        <>
            <Favicons />
            <Header data={general} />
            {children}
            <Footer data={general} />
        </>
    );
};


export default MainLayout;