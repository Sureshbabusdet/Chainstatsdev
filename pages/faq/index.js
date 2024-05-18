import React, { useEffect } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Faq from '../../components/faq';
import { Col, Row } from 'react-bootstrap';
import { parseCookies } from 'nookies';
import { ACTION_ROUTES } from '../../constants/constant.js';
import axios from 'axios';
import Seo from '../../components/Seo.js';
import { useRouter } from 'next/router.js';

FAQ.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function FAQ({ FaqPageData }) {
    const router = useRouter();

    const metaData = {
        title: `Faq's - ChainStats - Unleash the data`,
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <div className='pt-60 pb-60 header-space'>
                <Faq data={FaqPageData} />
            </div>
        </>
    )
}


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

        const response = await axios.get(`${ACTION_ROUTES.GetFaqAPI}?page=all`, {
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