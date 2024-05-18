import MainLayout from "../../layouts/main/nav/MainLayout";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { ACTION_ROUTES } from "../../constants/constant";
import axios from "axios";
import { useEffect } from "react";
import parse from "html-react-parser";

PrivacyPolicy.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function PrivacyPolicy(props) {
    const router = useRouter();

    const metaData = {
        title: `Privacy Policy - ChainStats - Unleash the data`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };
    
    return (
        <>
            <Seo {...metaData} />
            <section className="header-space pt-60 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="privacy__wrapper">
                                <div className="privacy__item mb-0">
                                <div className="sec_heading mb-3 text-start"><h4>{props.privacyData?.privacy.title}</h4></div>
                                {parse(props.privacyData?.privacy.description)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    );
}


export async function getServerSideProps() {
    try {
        const response = await axios.get(ACTION_ROUTES.PrivacyAPI);

        if (response.status === 200) {
            const privacyData = response.data; // Extract profile data from response
            return {
                props: {
                    privacyData
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
        console.error('Error fetching Privacy Policy data:', error);
        return {
            props: {
                error: 'Privacy Policy : Something went wrong. Please try again later.'
            }
        };
    }
}