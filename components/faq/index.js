import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant';
import Link from 'next/link';

export default function Faq({ data }) {
    // console.log(data,data);
    const splitFaqData = (data) => {
        const middleIndex = Math.ceil(data.length / 2);
        const leftData = data.slice(0, middleIndex);
        const rightData = data.slice(middleIndex);
        return [leftData, rightData];
    };


    return (
        <>
            <section className="accordian-area">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12">
                            <div className="sec_heading text-start"><p>Frequently asked questions</p></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq__tab-content">
                                <Accordion defaultActiveKey={'00'} id="sale-accordion">
                                    {data.faqs && splitFaqData(data.faqs)[0].map((columnData, columnIndex) => (
                                        <div key={columnIndex}>
                                            <Accordion.Item key={columnIndex} eventKey={columnIndex}>
                                                <Accordion.Header>{columnData.title}</Accordion.Header>
                                                <Accordion.Body><p className='paragraph'>{columnData.description}</p></Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq__tab-content">
                                <Accordion defaultActiveKey={'00'} id="sale-accordion">
                                    {data.faqs && splitFaqData(data.faqs)[1].map((columnData, columnIndex) => (
                                        <Accordion.Item key={columnIndex} eventKey={columnIndex}>
                                            <Accordion.Header>{columnData.title}</Accordion.Header>
                                            <Accordion.Body><p className='paragraph'>{columnData.description}</p></Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {data.total_faqs > 6 && (
                        <div className='text-center'>
                            <Link href="faq" passHref><button className="gradient-text-btn rounded-full ">View All</button></Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}