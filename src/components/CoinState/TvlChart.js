import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';


const TvlChart = () => {
    const [activeFilter, setActiveFilter] = useState('');
    const [ActiveMenu, setActiveMenu] = useState('1hr');

    const Data = [
        { label: '30D', data: [900, 50, 1300, 250] },
        { label: '90D', data: [900, 50, 1300, 500] },
        { label: '6M', data: [900, 50, 1300, 10] },
        { label: '1Y', data: [900, 50, 1300, 220] },
        { label: 'All', data: [900, 50, 1300, 10] },
    ];

    const initialOptions = {
        chart: {
            type: 'areaspline',
            height: 250,
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        title: {
            text: ""
        },
        xAxis: {
            categories: ['Q1', 'Q2', 'Q3', 'Q4'], // Display only 4 quarters
            labels: {
                style: {
                    color: '#5A9EFB', // Set the color for x-axis labels (red in this example)
                },
            },
            lineWidth: 1, // Set the line width for the x-axis
            lineColor: '#656D85',
        },
        yAxis: {
            title: false,
            labels: {
                style: {
                    color: '#5A9EFB', // Set the color for x-axis labels (red in this example)
                },
                formatter: function () {
                    return this.value + 'K';
                }
            },
            opposite: true,
            lineWidth: 1, // Set the line width for the y-axis
            lineColor: '#656D85',
        },
        tooltip: {
            backgroundColor: '#171725',
            style: {
                color: 'white',           // Text color
                borderRadius: '10px',
            },
            outside: true,
            shadow: true,
            // backgroundColor: "none",
            useHTML: false,
            // formatter: function () {
            //     return '<span style="overflow: visible;font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px; white-space: nowrap; position:absolute; color: rgb(88, 88, 88); margin-left: 0px; margin-top: 0px; left: 8px;border-radius:0px; top: 8px;"><div className="chart-map-custom-tooltip graph-tooltip"><div className="col-6"><div><p className="detail-value date">' + this.x + '</p><img src="https://app.freshping.io/static/media/up_2.307e4106.svg" alt="up icon" classname="status-img down-status-img"></div><p className="up">' + Math.round(this.y / 10.14) + '% </p></div><div className="chart-map-tooltip-details"><p className="detail-title">Avg: <span className="detail-value">' + this.y + '</span></p><p className="detail-title">Min: <span className="detail-value">' + this.y / 20 + '</span></p></div></div></span>';
            // }
        },
        plotOptions: {
            series: {
                lineWidth: 50,
            },
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    zIndex: 1,
                    enabled: true,
                    color: '#fff',
                    connectorWidth: 0,
                    useHTML: true,
                    formatter: function () {
                        return '<span style="color:' + this.point.color + '"><b>' + this.point.name + '</b></span>';
                    }
                }
            }
        },
        series: [
            {
                name: "Serie 1",
                showInLegend: false,
                lineWidth: 1,
                marker: {
                    enable: false,
                    fillColor: 'transparent',
                    lineWidth: 1,
                    lineColor: '#00A3FF'
                },
                color: '#00A3FF',
                fillOpacity: 1,
                data: Data[0].data,
            }
        ]
    };

    // Initialize the chart with the default filter
    useEffect(() => {
        const chart = Highcharts.chart('TvlChart', initialOptions);
    }, []);

    return (
        <div className='p-0'>
            <div className="heading mb-4"><h3>Total Value Locked - TVL  </h3></div>
            <ul className="filter-without-style mb-4">
                <li className={ActiveMenu === '1hr' && 'active'} onClick={() => {
                    setActiveFilter('1hr');
                    setActiveMenu('1hr');
                }}>1hr</li>
                <li className={ActiveMenu === '1D' && 'active'} onClick={() => {setActiveFilter('1D');setActiveMenu('1D');}}>1D</li>
                <li className={ActiveMenu === '1M' && 'active'} onClick={() => {setActiveFilter('1M');setActiveMenu('1M');}}>1M</li>
                <li className={ActiveMenu === '6M' && 'active'} onClick={() => {setActiveFilter('6M');setActiveMenu('6M');}}>6M</li>
                <li className={ActiveMenu === 'Max' && 'active'} onClick={() => {setActiveFilter('Max');setActiveMenu('Max');}}>Max</li>
            </ul>
            <div className='lineChart2' id='TvlChart'></div>
        </div>
    );
};

export default TvlChart;
