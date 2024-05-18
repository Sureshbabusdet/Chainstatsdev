import React, { useEffect } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/image';
import { useRouter } from 'next/router.js';
import Seo from '../../components/Seo.js';
import parse from "html-react-parser";
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant.js';

Imprint.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function Imprint(props) {
    const router = useRouter();

    const metaData = {
        title: `imprint - ChainStats - Unleash the data`,
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
                                <div className="sec_heading mb-3 text-start"><h4>{props.imPrint?.imprint.title}</h4></div>
                                {parse(String(props.imPrint?.imprint.description))}
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get(ACTION_ROUTES.imprintAPI);

        if (response.status === 200) {
            const imPrint = response.data; // Extract profile data from response
            return {
                props: {
                    imPrint
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
        console.error('Error fetching ImPrint data:', error);
        return {
            props: {
                error: 'ImPrint : Something went wrong. Please try again later.'
            }
        };
    }
}