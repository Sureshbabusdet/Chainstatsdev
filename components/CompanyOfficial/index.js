import React from 'react';
import NetflowChart from './ChainState';
import { Table } from 'react-bootstrap';
import ChainChart from './ChainState';
import ChainState from './ChainState';
import BugReportsChart from './BugReportsChart';
import ValidatedTable from './ValidatedTable';
import HealthValidatedTable from './HealthValidatedTable';
import RewardValidatorTable from './RewardValidatorTable';

const countryData = [
    {
        name: 'U.S.A',
        y: 505992,
        z: 92,
    },
    {
        name: 'INDIA',
        y: 551695,
        z: 119,
    },
    {
        name: 'POLAND',
        y: 312679,
        z: 121,
    },
    {
        name: 'U.K',
        y: 78865,
        z: 136,
    },
    {
        name: 'CANADA',
        y: 301336,
        z: 200,
    },
];
const cryptoData = [
    {
        name: 'Bitcoin',
        y: 100000000000, // Market Cap in dollars
        z: 55000, // Price in dollars
    },
    {
        name: 'Ethereum',
        y: 50000000000,
        z: 3000,
    },
    {
        name: 'HEDERA',
        y: 10000000000,
        z: 2.5,
    },
    {
        name: 'BNB',
        y: 7000000000,
        z: 0.9,
    },
    {
        name: 'DAG',
        y: 5000000000,
        z: 180,
    },
];

export default function CompanyOfficial() {
    return (
        <>
            <section className="seller__area">
                <div className="container">
                    <div className='row'>
                        <div className='sec_heading'>
                            <h4>ChainGuardians</h4>
                            <p>ChainStats - Official Numbers</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-6'>
                            <div className="seller__item">
                                <ValidatedTable />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="seller__item">
                                <RewardValidatorTable />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="seller__item">
                                <HealthValidatedTable />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="seller__item">
                                <BugReportsChart />
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="seller__item">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='flex flex-column netflow-area'>
                                            <ChainState title={'Current Chains within ChainStats Ecosystem'} data={cryptoData} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='flex flex-column netflow-area'>
                                            <ChainState title={'Global Distribution of ChainStats Nodes'} data={countryData} />
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
