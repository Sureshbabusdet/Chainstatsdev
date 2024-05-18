import React from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Link from 'next/link';

ErroPage.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ErroPage() {
    return (
        <>
            <div className='error-wrapper'>
                <h1>404</h1>
                <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
                </div>
                <div className="info">
                <h2>{"We can't find that page"}</h2>
                <p>{"We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf."}</p>
                    <Link href="/" passHref><a className='gradient-text-btn rounded-full'>Home</a></Link>
                </div>
            </div>
        </>
    );
}
