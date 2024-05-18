import { useRouter } from 'next/router';
import Footer from '../footer/Footer';
import Header from './Header';
import { ACTION_ROUTES } from '../../../constants/constant';
import { useState, useEffect } from 'react';
import Favicons from './Favicons';
import axios from 'axios';

const MainLayout = ({ children,isonlyTop}) => {
    const router = useRouter();
    
    const [loading, setLoading] = useState({});
    const [general, setGeneral] = useState({});
    const [error, setError] = useState(false);
  
    const getSocialMedia = async () => {
        try {
            const response = await axios.get(ACTION_ROUTES.FooterSocialAPI);
            setGeneral(response.data.social)
        } catch (error) {
            console.error('Something Went Wrong: -- Footer Social --', error);
            setError(error);
        }
    };

    useEffect(() => {
        getSocialMedia();
    }, []);

  

    return (
        <>
            <Favicons />
            <Header data={general} />
            {children}
            <Footer isonlyTop={isonlyTop} data={general} />
        </>
    );
};


export default MainLayout;