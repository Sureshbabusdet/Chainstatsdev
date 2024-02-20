import MainLayout from '@/layouts/main/nav/MainLayout';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import MarqueeSlider from '@/components/Marquee';
import Joincommunity from '@/components/JoinCommunity';
import Faq from '@/components/faq';
import TopCreators from '@/components/TopCreators';
import BannerSec from '@/components/BannerSec';
import DashChart from '@/components/DashChart';
import QuickView from '@/components/QuickView';
import CompanyOfficial from '@/components/CompanyOfficial';
import CoinState from '@/components/CoinState';

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function HomePage() {

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
            <Faq />
            <Joincommunity />
            <MarqueeSlider />
        </>
    );
}