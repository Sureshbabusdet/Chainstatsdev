import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';
import ProgressBox from '../ProgressBox';

var RemainingColor1 = '#FF7A00';
var RemainingColor2 = '#FDD671';

var SpentColor2 = '#254C5C';
var SpentColor1 = '#90FFEB';


var NotComplete1 = '#0066FE';
var NotComplete2 = '#DB00FF';

var CleanUp1 = '#233A9B';
var CleanUp2 = '#FFFFFF';

var CleanUp3 = '#494949';
var CleanUp4 = '#FFFFFF';

var Complete1 = '#8000FF';
var Complete2 = '#71E4FD';

const colors = [{
    radialGradient: {
        cx: 0.8,
        cy: 0.8,
        r: 0.7
    },
    stops: [
        [0, RemainingColor1],
        [1, RemainingColor2]
    ]
}, {
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, SpentColor1],
        [1, SpentColor2]
    ]
},
{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, CleanUp1],
        [1, CleanUp2]
    ]
},
{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, CleanUp3],
        [1, CleanUp4]
    ]
},
{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, Complete1],
        [1, Complete2]
    ]
},
{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, NotComplete1],
        [1, NotComplete2]
    ]
}];


const chartDataStables = [
    { name: 'Bitcoin', y: 438008, image: '/img/1.png', color: colors[0] },
    { name: 'Etheriem', y: 191910, image: '/img/2.png', color: colors[1] },
    { name: 'Metic', y: 102101, image: '/img/3.png', color: colors[2] },
    { name: 'Electricity', y: 210521, image: '/img/3.png', color: colors[2] },
    { name: 'Other', y: 207051, image: '', color: colors[3] }
];

const chartDataInvested = [
    { name: 'Bitcoin', y: 411899, image: '/img/1.png', color: colors[0] },
    { name: 'Etheriem', y: 191910, image: '/img/2.png', color: colors[1] },
    { name: 'Metic', y: 12151, image: '/img/3.png', color: colors[2] },
    { name: 'Electricity', y: 221521, image: '/img/3.png', color: colors[2] },
    { name: 'Other', y: 238751, image: '', color: colors[3] }
];




export default function PiChart() {

    const [selectedRange, setSelectedRange] = useState(1);
    const [selectedTab, setSelectedTab] = useState('Invested');
    const [chartData, setChartData] = useState(chartDataInvested); // Initialize with default data

    const options = {
        credits: {
            enabled: false
        },
        chart: {
            plotBorderColor: null,
            plotShadow: true,
            type: 'pie',
            backgroundColor: 'transparent',
        },
        exporting: { enabled: false },
        title: null,
        tooltip: {
            backgroundColor: '#171725',
            style: {
                color: 'white',           // Text color
                backgroundColor: 'blue'    // Background color
            },
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                plotBorderColor: null,
                plotBorderWidth: null,
                allowPointSelect: true,
                cursor: 'pointer'
            },
            series: {
                shadow: true,
                animation: false
            }
        },
        series: [
            {
                dataLabels: {
                    distance: -45,
                    useHTML: true,
                    formatter: function () {
                        const imageUrl = this.point.image || ''; // Get the image URL from data or provide a default
                        return `${imageUrl ? `<img src="${imageUrl}" width="30" height="30" />` : ''}`;
                    }
                },
                name: 'Share',
                data: chartData,
                shadow: {
                    color: 'rgba(255,255,255,0.2)',
                    width: 30,
                    opacity: 0.2,
                    offsetX: 0,
                    offsetY: 0
                }
            }
        ]
    };

    const handleRangeChange = (event) => {
        const value = event.target.value;
        setSelectedRange(value);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        if (tab === 'Invested') {
            setChartData(chartDataInvested);
            setSelectedRange(20);
        } else {
            setChartData(chartDataStables);
            setSelectedRange(80);
        }
    };

    return (
        <div className='pichart-area'>
            <div className="pichart-shadow-white"></div>
            <div className="pichart-shadow-back"></div>
            <div className="labels-list">
                <div
                    className={`labels ${selectedTab === 'Invested' ? 'active' : ''}`}
                    onClick={() => handleTabChange('Invested')}
                >
                    Invested
                </div>
                <div
                    className={`labels ${selectedTab === 'Stables' ? 'active' : ''}`}
                    onClick={() => handleTabChange('Stables')}
                >
                    Stables
                </div>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <div className="labels-list-bottom">
                <ProgressBox flow={''} label={'Invested'} label2={'Stables'} islabelBottom={true} percent={selectedRange} />
            </div>
        </div>
    );
}
