import React, { useEffect } from 'react';
import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './faq.css'
import Faq from '@/components/faq';
import { Col, Row } from 'react-bootstrap';

FAQ.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function FAQ() {
    return (
        <>
            <div className='pt-110 pb-90'>
                <Faq />
            </div>
        </>
    )
}