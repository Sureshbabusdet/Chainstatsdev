import Image from 'next/image';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const RewardValidatorTable = () => {
    const [filter, setFilter] = useState('1hr'); // Initial filter state
    const dummyData = {
        '1hr': [
            {
                chain: 'Total Tokens Staked',
                totalTransaction: '67,093,237 STATS',
            },
            {
                chain: 'Staking minimum per wallet',
                totalTransaction: '75,000 STATS',
            },
            {
                chain: 'Staking maximum per wallet',
                totalTransaction: '2,500,000 STATS',
            },
            {
                chain: 'Rewards Minimum',
                totalTransaction: '10% APY',
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
            <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
                <div className="heading"><h3 className='mb-0 text-capitalize'>Health Of Validators</h3></div>
            </div>
            <div className='table-responsive'>
                <Table className='table-borderless bg-transparent borderless-table table'>
                    <thead>
                        <tr>
                            <th className='noborder bg-transparent text-capitalize'> Staking status </th>
                            <th className='noborder bg-transparent text-capitalize'>Program started</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getDataForFilter('1hr').map((item, index) => (
                            <tr key={index}>
                                <td className='noborder bg-transparent'>{item.chain}</td>
                                <td className='noborder bg-transparent'>{item.totalTransaction}</td>
                            </tr>
                        ))}
                        <tr className='total-reward-bard'>
                            <td className='noborder bg-transparent'>Total Rewards Distributed</td>
                            <td className='noborder bg-transparent'>230,546 STATS</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default RewardValidatorTable;
