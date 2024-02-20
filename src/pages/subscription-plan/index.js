import MainLayout from "@/layouts/main/nav/MainLayout";
import './subscription.css';
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

Subscription.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Subscription() {
    const router = useRouter();
    const metaData = {
        title: 'Pricing - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Pricing - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <div>Pricing Plan</div>
        </>
    );
}