import Image from 'next/image';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const HealthValidatedTable = () => {
    const [filter, setFilter] = useState('1hr'); // Initial filter state
    const dummyData = {
        '1hr': [
            {
                chain: 'Node10-#239332',
                totalTransaction: 'Health',
            },
            {
                chain: 'Node10-#239332',
                totalTransaction: '123,564ss',
            },
            {
                chain: 'Node10-#239332',
                totalTransaction: '123,564',
            },
            {
                chain: 'Node10-#239332',
                totalTransaction: 'Health',
            },
            {
                chain: 'Node10-#239332',
                totalTransaction: '123,564ss',
            },
            {
                chain: 'Node10-#239332',
                totalTransaction: '123,564',
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
            <div className='d-flex flex-column flex-md-row justify-content-start align-items-center justify-content-between flex-wrap mb-3'>
                <div className="heading"><h3 className='mb-0 text-capitalize'>Heath of Validators</h3></div>
                <div className='search-innner-wrapper'>
                    <input type="search" className='form-control' placeholder='Search Your Node' /> <button><i className='fa fa-search'></i></button>
                </div>
            </div>
            <div className='table-responsive'>
            <Table className='table-borderless bg-transparent borderless-table table'>
                <thead>
                    <tr>
                        <th className='noborder bg-transparent'> NODE Serial Number</th>
                        <th className='noborder bg-transparent'>Health</th>
                    </tr>
                </thead>
                <tbody>
                    {getDataForFilter('1hr').map((item, index) => (
                        <tr key={index}>
                            <td className='noborder bg-transparent'>{index + 1}. {item.chain}</td>
                            <td className='noborder bg-transparent'><div className='d-flex align-items-center flex-wrap'><Image src={'/img/1.png'} width={15} height={15} className='me-2' alt='status img' />{item.totalTransaction}</div></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default HealthValidatedTable;
