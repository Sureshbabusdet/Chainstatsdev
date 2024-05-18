import Image from 'next/image';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const ValidatedTable = () => {
    const [filter, setFilter] = useState('1hr'); // Initial filter state
    const dummyData = {
        '1hr': [
            {
                chain: 'BNB',
                totalTransaction: '123,564',
                transactionPerSec: '1.3k/sec',
                amount: '234,456 USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '123,564',
                transactionPerSec: '1.3k/sec',
                amount: '234,456 USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '123,564',
                transactionPerSec: '1.3k/sec',
                amount: '234,456 USD',
            },
        ],
        '1D': [
            {
                chain: 'BNB',
                totalTransaction: '8,997',
                transactionPerSec: '5/sec',
                amount: '1M USD',
            },
        ],
        '1M': [
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            // Add more objects for the '1M' filter...
        ],
        '6M': [
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            // Add more objects for the '6M' filter...
        ],
        'Max': [
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            {
                chain: 'BNB',
                totalTransaction: '67,544',
                transactionPerSec: '784/sec',
                amount: '2.6M USD',
            },
            // Add more objects for the 'Max' filter...
        ],
    };

    // Function to get data for the selected filter
    const getDataForFilter = (chain) => {
        return dummyData[filter];
    };

    return (
        <div className='p-4'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <div className="heading mb-3"><h3 className='text-capitalize'>Stable coin exchange Reserves</h3></div>
                <ul className="filter-without-style mb-4">
                    <li className={filter === '1hr' && 'active'} onClick={() => setFilter('1hr')}>1hr</li>
                    <li className={filter === '1D' && 'active'} onClick={() => setFilter('1D')}>1D</li>
                    <li className={filter === '1M' && 'active'} onClick={() => setFilter('1M')}>1M</li>
                    <li className={filter === '6M' && 'active'} onClick={() => setFilter('6M')}>6M</li>
                    <li className={filter === 'Max' && 'active'} onClick={() => setFilter('Max')}>Max</li>
                </ul>
            </div>
          <div className='table-responsive'>
          <Table className='table-borderless bg-transparent borderless-table table scer-table'>
                <thead>
                    <tr>
                        <th className='noborder bg-transparent'>Chain</th>
                        <th className='noborder bg-transparent'>Total Transactions</th>
                        <th className='noborder bg-transparent'>Transactions Per Sec</th>
                        <th className='noborder bg-transparent'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {getDataForFilter('1hr').map((item, index) => (
                        <tr key={index}>
                            <td className='noborder bg-transparent'><div className='d-flex align-items-center'><Image width={15} height={15} src='/img/1.png' className='me-2' alt='Coin Name' />{item.chain}</div></td>
                            <td className='noborder bg-transparent'>{item.totalTransaction}</td>
                            <td className='noborder bg-transparent'>{item.transactionPerSec}</td>
                            <td className='noborder bg-transparent'>{item.amount}</td>
                        </tr>
                    ))}
                    {/* Add similar rows for other chains... */}
                </tbody>
            </Table>
          </div>
        </div>
    );
};

export default ValidatedTable;
