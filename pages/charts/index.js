import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout';
import { Col, Container, Row, Table } from 'react-bootstrap';
import SimpleBarReact from "simplebar-react";
import ChartViewGauge from '../../components/ChartViewGauge';
import ProgressBox from '../../components/ProgressBox';
import Image from 'next/future/image';
import TradingViewWidget from '../../components/StockChart';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

Charts.getLayout = (page) => <MainLayout isonlyTop={false}>{page}</MainLayout>;

const tableData = [
    {
        image: '/img/icons/binance.png',
        wallet: 'BTC',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/chainlink.png',
        wallet: 'CH',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/Usdicon.png',
        wallet: 'OKB',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/polygon.png',
        wallet: 'QNT',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/Shiba.png',
        wallet: 'SOL',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/Tether.png',
        wallet: 'BUSD',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
    {
        image: '/img/icons/uniswap.png',
        wallet: 'BNB',
        BTC: '16,871.64',
        USD: '559.00',
        HrsBTC: '2.86%',
    },
];
const TVChartContainer = dynamic(
	() =>
		import('../../components/TVChartContainer').then(mod => mod.TVChartContainer),
	{ ssr: false },
);

export default function Charts() {
    const router = useRouter();

    const [ActiveMenu, setActiveMenu] = useState('Onchain');
    const [Symbol, setSymbol] = useState('BITSTAMP:BTCUSDT');
    
    const metaData = {
        title: 'Charts - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Charts - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
        <Seo {...metaData} />
        <div className='chart-view seller__area'>
            <Container fluid>
                <Row>
                    <Col lg={9}>
                        <div className='tabbed round'>
                            <ul>
                                <li className={Symbol === 'BITSTAMP:BTCUSDT' && 'active'} onClick={() => setSymbol('BITSTAMP:BTCUSDT')}>Composite</li>
                                <li className={Symbol === 'BITSTAMP:ETHUSDT' && 'active'} onClick={() => setSymbol('BITSTAMP:ETHUSDT')}>Total net flows</li>
                                <li className={Symbol === 'BITSTAMP:MATICUSDT' && 'active'} onClick={() => setSymbol('BITSTAMP:MATICUSDT')}>Derivatives</li>
                                <li className={Symbol === 'BITSTAMP:DOGEUSDT' && 'active'} onClick={() => setSymbol('BITSTAMP:DOGEUSDT')}>Entities</li>
                                <li className={Symbol === 'BITSTAMP:UNIUSDT' && 'active'} onClick={() => setSymbol('BITSTAMP:UNIUSDT')}>CVD</li>
                                <li className={Symbol === 'BITSTAMP:UNIUSDTs' && 'active'} onClick={() => setSymbol('BITSTAMP:UNIUSDTs')}>Orderbook</li>
                                <li className={Symbol === 'BITSTAMP:MATICUSDTs' && 'active'} onClick={() => setSymbol('BITSTAMP:MATICUSDTs')}>Liquidation</li>
                            </ul>
                        </div>
                        <div className="seller__item active chartview-height mb-0">
                            <div className='chartview-inner border-color'>
                                {/* <TradingViewWidget symbol={Symbol} /> */}
                                <TVChartContainer />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="seller__item h-auto">
                            <div className='p-3 pe-0'>
                                <SimpleBarReact style={{ maxHeight: 220 }}>
                                    <div className='pe-0'>
                                        <Table className='table-borderless bg-transparent borderless-table hovered-effect'>
                                            <thead className='sticky-head'>
                                                <tr>
                                                    <th className="noborder bg-transparent">Watchlist</th>
                                                    <th className="noborder bg-transparent">Last</th>
                                                    <th className="noborder bg-transparent">Chg</th>
                                                    <th className="noborder bg-transparent">Chg%</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((rowData, index) => (
                                                    <tr key={index}>
                                                        <td className='bg-transparent'><Image layout='raw' width={20} height={20} quality={100} src={rowData.image} alt={rowData.wallet} className='me-2 hoverable-image' /> {rowData.wallet}</td>
                                                        <td className='bg-transparent'>{rowData.BTC}</td>
                                                        <td className='bg-transparent'>{rowData.USD}</td>
                                                        <td className='bg-transparent'>{rowData.HrsBTC}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </SimpleBarReact>
                            </div>

                        </div>
                        <div className="seller__item h-auto mb-0">
                            <div className='insider-tab'>
                                <ul>
                                    <li className={ActiveMenu === 'Onchain' && 'active'} onClick={() => setActiveMenu('Onchain')}>On Chain</li>
                                    <li className={ActiveMenu === 'coinstate' && 'active'} onClick={() => setActiveMenu('coinstate')}>ChainStats</li>
                                </ul>
                            </div>
                            {ActiveMenu === 'Onchain' ? (
                                <SimpleBarReact style={{ maxHeight: 700 }}>
                                    <div className='minus-view'>
                                        <ChartViewGauge value={30} />
                                    </div>
                                    <div className='p-3 bottom-progress-list'>
                                        <Row>
                                            <Col lg={12}>
                                                <h6>{'Exchange inflows'}</h6>
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'+$1,000,000'} label={'Stable coin inflow'} percent={20} />
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'+$1,000,000'} label={'Bitcoin inflow'} percent={50} />
                                            </Col>
                                            <Col lg={12}>
                                                <h6 className='mt-3'>{'Exchange outflows'}</h6>
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Stable coin OUTflows'} percent={50} />
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Bitcoin Outflow'} percent={30} />
                                            </Col>
                                            <Col lg={12}>
                                                <h6 className='mt-3'>{'Net flows'}</h6>
                                            </Col>
                                            <Col lg={12}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Exchange outflows'} label2={'exchange inflows'} percent={70} />
                                            </Col>
                                        </Row>
                                    </div>
                                </SimpleBarReact>
                            ) : (
                                <SimpleBarReact style={{ maxHeight: 700 }}>
                                    <div className='minus-view'>
                                        <ChartViewGauge value={80} />
                                    </div>
                                    <div className='p-3 bottom-progress-list'>
                                        <Row>
                                            <Col lg={12}>
                                                <h6>{'Exchange inflows'}</h6>
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'+$1,00,000'} label={'Stable coin inflow'} percent={30} />
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'+$1,00,000'} label={'Bitcoin inflow'} percent={45} />
                                            </Col>
                                            <Col lg={12}>
                                                <h6 className='mt-3'>{'Exchange outflows'}</h6>
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Stable coin OUTflows'} percent={75} />
                                            </Col>
                                            <Col lg={6}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Bitcoin Outflow'} percent={30} />
                                            </Col>
                                            <Col lg={12}>
                                                <h6 className='mt-3'>{'Net flows'}</h6>
                                            </Col>
                                            <Col lg={12}>
                                                <ProgressBox flow={'-$1,000,000'} label={'Exchange outflows'} label2={'exchange inflows'} percent={70} />
                                            </Col>
                                        </Row>
                                    </div>
                                </SimpleBarReact>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}