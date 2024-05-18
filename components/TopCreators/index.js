import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant';
import { toast } from 'react-toastify';
import { parseCookies } from 'nookies';
import TopCreatorCard from '../TopCreatorCard';


export default function TopCreators() {
    const [topCreators, setTopCreators] = useState(false);
    const [activeTab, setActiveTab] = useState('all');


    const fetchTopCreators = async (type) => {
        const cookies = parseCookies();
        const token = cookies.token;
        try {
            const response = await axios.get(`${ACTION_ROUTES.TopCreatorsAPI}/${type}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setTopCreators(response.data.top_creators || []);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                    });
                } else {
                    console.error('Something Went Wrong:', error);
                    toast.error('Please try again later.');
                }
            } else {
                console.error('Something Went Wrong:', error);
                toast.error('Please try again later.');
            }
        }
    };


    useEffect(() => {
        fetchTopCreators(activeTab);
    }, [activeTab]);

    // Fetch data for the "All" tab on component mount
    useEffect(() => {
        fetchTopCreators('all');
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>
            <section className="accordian-area">
                <div className="container">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                        <div className="section mb-5">
                            <div className="row align-items-center">
                                <div className="col-xxl-8 col-lg-6 col-md-7">
                                    <div className="sec_heading mb-0 text-start"><p>Top Creators This Week</p></div>
                                </div>
                                <div className="col-xxl-4 col-lg-6">
                                    <div className="collection__right d-sm-flex align-items-center justify-content-lg-end">
                                        <div className="collection__nav">
                                            <Nav variant="tabs">
                                                <Nav.Link className='d-inline-block' eventKey="all" onClick={() => handleTabChange("all")}>All</Nav.Link>
                                                <Nav.Link className='d-inline-block' eventKey="top_rewards" onClick={() => handleTabChange("top_rewards")}>Top Rewards</Nav.Link>
                                                <Nav.Link className='d-inline-block' eventKey="top_members" onClick={() => handleTabChange("top_members")}>Top Members</Nav.Link>
                                            </Nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Col xxl={12}>
                                <div className='collection__tab'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all">
                                            <Row className='g-4'>
                                                {topCreators && topCreators.map((item, index) => (
                                                    <Col xxl={3} xl={3} lg={4} md={6} sm={6} key={'top' + index}>
                                                        <TopCreatorCard
                                                            index={index}
                                                            id={item.id}
                                                            username={item.username || item.wallet_id}
                                                            image={item.image_url || '/img/favicon.png'}
                                                            name={item.username}
                                                            wallet={item.wallet_id}
                                                            balance={item.balance}
                                                            twitterVarified={item.twitter_verified}
                                                            type={'ETH'}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="top_rewards">
                                            <Row className='g-4'>
                                                {topCreators && topCreators.map((item, index) => (
                                                    <Col xxl={3} xl={3} lg={4} md={6} sm={6} key={'top' + index}>
                                                        <TopCreatorCard
                                                            index={index}
                                                            id={item.id}
                                                            username={item.username || item.wallet_id}
                                                            image={item.image_url || '/img/favicon.png'}
                                                            name={item.username}
                                                            wallet={item.wallet_id}

                                                            twitterVarified={item.twitter_verified}
                                                            balance={item.balance}
                                                            type={'ETH'}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="top_members">
                                            <Row className='g-4'>
                                                {topCreators && topCreators.map((item, index) => (
                                                    <Col xxl={3} xl={3} lg={4} md={6} sm={6} key={'top' + index}>
                                                        <TopCreatorCard
                                                            index={index}
                                                            id={item.id}
                                                            username={item.username || item.wallet_id}
                                                            image={item.image_url || '/img/favicon.png'}
                                                            name={item.username}
                                                            wallet={item.wallet_id}
                                                            balance={item.balance}
                                                            twitterVarified={item.twitter_verified}
                                                            type={'ETH'}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Col>
                        </div>
                    </Tab.Container>
                </div>
            </section>
        </>
    );
}