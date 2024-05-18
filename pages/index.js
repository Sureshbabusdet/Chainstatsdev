import MainLayout from '../layouts/main/nav/MainLayout';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';
import MarqueeSlider from '../components/Marquee';
import Joincommunity from '../components/JoinCommunity';
import Faq from '../components/faq';
import TopCreators from '../components/TopCreators';
import BannerSec from '../components/BannerSec';
import DashChart from '../components/DashChart';
import QuickView from '../components/QuickView';
import CompanyOfficial from '../components/CompanyOfficial';
import CoinState from '../components/CoinState';
import { parseCookies } from 'nookies';
import { ACTION_ROUTES } from '../constants/constant';
import axios from 'axios';

Homepage.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function Homepage({FaqPageData}){
    const router = useRouter();

    const metaData = {
        title: 'ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };

	return (
        <>
            <Seo {...metaData} />
            {/* <BannerSec /> */}
            <DashChart />
            <QuickView />
            <CoinState />
            <CompanyOfficial />
            <TopCreators />
            <div className='pt-60 pb-60'>
            <Faq data={FaqPageData} />
            </div>
            <Joincommunity />
            <MarqueeSlider />
        </>
    );
};



export async function getServerSideProps(context) {
    try {
        const cookies = parseCookies(context);
        const token = cookies.token;
        if (!token) {
            // Handle case where token is not available
            return {
                redirect: {
                    destination: '/login', // Redirect to login page if token is not available
                    permanent: false,
                },
            };
        }

        const response = await axios.get(`${ACTION_ROUTES.GetFaqAPI}?page=home`, {
            headers: {
                Authorization: `Bearer ${token}` // Include token in authorization header
            }
        });

        if (response.status === 200) {
            const FaqPageData = response.data; // Extract profile data from response
            return {
                props: {
                    FaqPageData
                }
            };
        } else {
            // Handle other status codes if needed
            // e.g., display an error page
            return {
                notFound: true,
            };
        }
    } catch (error) {
        // Handle errors
        console.error('Error fetching profile data:', error);
        return {
            props: {
                error: 'Something went wrong. Please try again later.'
            }
        };
    }
}