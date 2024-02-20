import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import variablePie from 'highcharts/modules/variable-pie';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';

if (typeof Highcharts === 'object') {
    variablePie(Highcharts);
    exporting(Highcharts);
    exportData(Highcharts);
    accessibility(Highcharts);
}

const ChainChart = () => {

    const dataValues = [
        {
            name: 'Bitcoin',
            y: 505992,
            z: 92,
            color: ['#D9D9D9', '#F50058'], // Start and end colors for Bitcoin
        },
        {
            name: 'Ethereum',
            y: 551695,
            z: 119,
            color: ['#D9D9D9', '#247CFF'], // Start and end colors for Ethereum
        },
        {
            name: 'TRP',
            y: 312679,
            z: 121,
            color: ['#AC32D7', '#AC32D7'], // Start and end colors for TRP
        },
        {
            name: 'META',
            y: 78865,
            z: 136,
            color: ['darkblue', 'cyan'], // Start and end colors for META
        },
        {
            name: 'Metic',
            y: 301336,
            z: 200,
            color: ['#4b6cb7', '#182848'], // Start and end colors for Metic
        },
        {
            name: 'Doge',
            y: 41284,
            z: 213,
            color: ['#414d0b', '#727a17'], // Start and end colors for Doge
        },
        {
            name: 'PI',
            y: 357114,
            z: 235,
            color: ['#FB923C', '#FB923C'], // Start and end colors for PI
        },
    ];

    const data = dataValues.map((dataValue) => ({
        name: dataValue.name,
        y: dataValue.y,
        z: dataValue.z,
        color: {
            linearGradient: {
                x1: 1,
                x2: 1,
                y1: 1,
                y2: 1,
            },
            stops: [
                [0, dataValue.color[0]],
                [1, dataValue.color[1]]
            ], // Use the defined color array for the gradient stops
        },
    }));

    const chartRef11 = useRef(null);

    useEffect(() => {
        Highcharts.chart(chartRef11.current, {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                height: 300,
            },
            exporting: {
                enabled: false,
            },
            credits: {
                enabled: false,
            },
            title: null,
            tooltip: {
                backgroundColor: '#171725',
                style: {
                    color: 'white',           // Text color
                    backgroundColor: 'blue',
                    borderRadius: '10px',      // Set the border radius
                },
                headerFormat: '',
                pointFormat:
                    '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                    'Percent: <b>{point.percentage:.1f}%</b><br/>',
            },
            series: [
                {
                    borderWidth: 0,
                    minPointSize: 10,
                    zMin: 0,
                    name: 'countries',
                    borderRadius: 0,
                    dataLabels: {
                        color: 'white',
                        enabled: false, // Display data labels on hover
                    },
                    data: data,
                },
            ],
        });

    }, []);

    return (
        <>
            <div className='text-center'>
                <div className="heading mb-4"><h3>ChainStats</h3></div>
                <div className='position-relative chainchart-lighing'>
                    <div className='white-light'></div>
                    <div className='back-light'></div>
                    <div ref={chartRef11}></div>
                </div>
            </div>
        </>
    );
};

export default ChainChart;
