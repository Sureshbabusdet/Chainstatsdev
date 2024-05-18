import React, { useState } from 'react';
import NetflowChart from './NetflowChart';
import { Table } from 'react-bootstrap';
import QuickExchangeChart from './QuickExchangeChart';
import Dropdown from 'react-bootstrap/Dropdown';
import SimpleBarReact from "simplebar-react";


export default function QuickView() {
    const [selectedOption, setSelectedOption] = useState('1D');
    const [selectedFlow, setSelectedFlow] = useState('Inflows');

    const tableData = [
        {
            wallet: 'Binance',
            BTC: '12,599',
            USD: '90,234,233',
            HrsBTC: '+25%',
            HrsUSD: 'ibuiubi',
        },
        {
            wallet: 'Binance',
            BTC: '12,599',
            USD: '90,234,233',
            HrsBTC: '-10%',
            HrsUSD: 'ibuiubi',
        },
        {
            wallet: 'Binance',
            BTC: '12,599',
            USD: '90,234,233',
            HrsBTC: '20%',
            HrsUSD: 'ibuiubi',
        },
        {
            wallet: 'Binance',
            BTC: '12,599',
            USD: '90,234,233',
            HrsBTC: '+10%',
            HrsUSD: 'ibuiubi',
        },
        {
            wallet: 'Binance',
            BTC: '12,599',
            USD: '90,234,233',
            HrsBTC: '-18%',
            HrsUSD: 'ibuiubi',
        },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleFlowChange = (option) => {
        setSelectedFlow(option);
    };

    return (
        <>
            <section className="seller__area">
                <div className="container">
                    <div className='row'>
                        <div className='sec_heading'>
                            <h4 className='text-capitalize'>Quick View</h4>
                            <p>total net flows</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="seller__item">
                                <div className='flex flex-column netflow-area'>
                                <div className='flex flex-column flex-md-row justify-content-between netflow-area p-0'>
                                    <ul className='button-filter'>
                                        {['Inflows', 'Outflows'].map((option) => (
                                            <li
                                                key={option}
                                                className={selectedFlow === option ? 'active' : ''}
                                                onClick={() => handleFlowChange(option)}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className='button-filter'>
                                        {['1D', '7D', '1M', '6M', 'YTD','Max'].map((option) => (
                                            <li
                                                key={option}
                                                className={selectedOption === option ? 'active' : ''}
                                                onClick={() => handleOptionChange(option)}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                    <NetflowChart flow={selectedOption} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="seller__item h-auto">
                                <div className='flex flex-column p-3 p-md-4 pe-md-0 pe-0'>
                                    <div className='heading'>
                                        <h3 className='text-capitalize'>Bitcoin Exchange Reserves</h3>
                                    </div>
                                    {/* <div className='table-responsive btcfacts-table'> */}
                                    <SimpleBarReact style={{ maxHeight: 200 }}>
                                        <div className='pe-4'>
                                            <Table className='table-borderless bg-transparent btcfacts-table borderless-table btc-table'>
                                                <thead>
                                                    <tr>
                                                        <th className="noborder bg-transparent">Exchange</th>
                                                        <th className="noborder bg-transparent">BTC</th>
                                                        <th className="noborder bg-transparent">USD</th>
                                                        <th className="noborder bg-transparent">24 Hrs</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tableData.map((rowData, index) => (
                                                        <tr key={index}>
                                                            <td className='bg-transparent'>{rowData.wallet}</td>
                                                            <td className='bg-transparent'>{rowData.BTC} <span>BTC</span></td>
                                                            <td className='bg-transparent'>{rowData.USD} <span>USD</span></td>
                                                            <td className='bg-transparent'>{rowData.HrsBTC}</td>
                                                        </tr>
                                                    ))}
                                                    {tableData.map((rowData, index) => (
                                                        <tr key={index}>
                                                            <td className='bg-transparent'>{rowData.wallet}</td>
                                                            <td className='bg-transparent'>{rowData.BTC} <span>BTC</span></td>
                                                            <td className='bg-transparent'>{rowData.USD} <span>USD</span></td>
                                                            <td className='bg-transparent'>{rowData.HrsBTC}</td>
                                                        </tr>
                                                    ))}
                                                    {tableData.map((rowData, index) => (
                                                        <tr key={index}>
                                                            <td className='bg-transparent'>{rowData.wallet}</td>
                                                            <td className='bg-transparent'>{rowData.BTC} <span>BTC</span></td>
                                                            <td className='bg-transparent'>{rowData.USD} <span>USD</span></td>
                                                            <td className='bg-transparent'>{rowData.HrsBTC}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </SimpleBarReact>
                                    {/* </div> */}

                                </div>
                            </div>
                            <div className="seller__item h-auto">
                                <div className='flex flex-column p-3 p-md-4'>
                                    <div className='heading mb-3'>
                                        <h3 className='text-capitalize'>Stable coin exchange Reserves</h3>
                                    </div>
                                    <div className='d-flex align-items-start justify-content-between flex-wrap'>
                                        <div className='drop_down'>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    All Platform
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    Coinbase
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    Binance
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    Kraken
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    Bitfinex
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" className='text-capitalize'>
                                                    Kucoin
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='quickexchange_chart'>
                                            <QuickExchangeChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
