import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './topcreators.css';
import Image from 'next/image';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Link from 'next/link';


export default function TopCreators() {
    return (
        <>
            <section className="accordian-area">
                <div className="container">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="section mb-5">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-lg-6 col-md-7">
                                    <div className="section__title-wrapper-3">
                                        <h3 className="section__title-3 text-capitalize">Top Creators This Week</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-lg-6">
                                    <div className="collection__right d-sm-flex align-items-center justify-content-lg-end">
                                        <div className="collection__nav">
                                            <Nav variant="tabs">
                                                <Nav.Link className='d-inline-block' eventKey="first">All</Nav.Link>
                                                <Nav.Link className='d-inline-block' eventKey="second">Top Rewards</Nav.Link>
                                                <Nav.Link className='d-inline-block' eventKey="third">Top Members</Nav.Link>
                                            </Nav>
                                        </div>
                                        <div className="collection__more ms-2">
                                            <a href="#" className="tp-btn-border">view all</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Col xxl={12}>
                                <div className='collection__tab'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className='g-4'>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Row className='g-4'>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <Row className='g-4'>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank me-3">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon me-2">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={6} sm={6}>
                                                    <div className="collection__list d-flex align-items-center mb-20 transition-3">
                                                        <div className="collection__list-thumb collection__list-rank mr-20">
                                                            <Link href="#">
                                                                <Image width={60} height={60} src="/img/favicon.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="collection__list-content">
                                                            <h3 className="collection__list-title">
                                                                <Link href="#">@suresh</Link>
                                                            </h3>
                                                            <div className="collection__list-revenue d-flex align-items-center">
                                                                <div className="collection__list-revenue-icon mr-5">
                                                                    <span>
                                                                        <i className="fa-brands fa-ethereum"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="collection__list-revenue-text">
                                                                    <p><span>12.54</span> ETH</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                              
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