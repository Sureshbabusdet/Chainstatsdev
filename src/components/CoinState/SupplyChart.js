import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Link from 'next/link';


const SupplyChart = () => {
    const initialOptions = {
        chart: {
            type: 'areaspline',
            height: 200,
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        title: {
            text: ""
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            labels: {
                enabled: false,
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
                enabled: false,
                style: {
                    color: '#5A9EFB', // Set the color for x-axis labels (red in this example)
                },
                formatter: function () {
                    return this.value + 'K';
                }
            },
            opposite: false,
            lineWidth: 1, // Set the line width for the y-axis
            lineColor: '#656D85',
        },
        tooltip: {
            borderWidth: 0,
            borderColor: null,
            outside: true,
            borderRadius: 10,
            shadow: true,
            useHTML: false,
            // formatter: function () {
            //     return '<span style="overflow: visible;font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px; white-space: nowrap; position:absolute; color: rgb(88, 88, 88); margin-left: 0px; margin-top: 0px; left: 8px;border-radius:0px; top: 8px;"><div className="chart-map-custom-tooltip graph-tooltip"><div className="col-6"><div><p className="detail-value date">' + this.x + '</p><img src="https://app.freshping.io/static/media/up_2.307e4106.svg" alt="up icon" classname="status-img down-status-img"></div><p className="up">' + Math.round(this.y / 10.14) + '% </p></div><div className="chart-map-tooltip-details"><p className="detail-title">Avg: <span className="detail-value">' + this.y + '</span></p><p className="detail-title">Min: <span className="detail-value">' + this.y / 20 + '</span></p></div></div></span>';
            // }
            backgroundColor: '#171725',
                style: {
                    color: 'white',           // Text color
                    backgroundColor: 'blue'    // Background color
                },
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
                    lineColor: '#32D796'
                },
                color: '#32D796',
                fillOpacity: 1,
                data: [
                    900,
                    50,
                    1300,
                    10,
                    200,
                    20,
                    1000,
                    200,
                    600,
                    300,
                    500,
                    600,
                ]
            }
        ]
    };

    // Initialize the chart with the default filter
    useEffect(() => {
        const chart = Highcharts.chart('SupplyChart', initialOptions);
    }, []);
    return (
        <div className='p-0'>
            <div className='d-flex justify-content-between align-items-start flex-wrap'>
                <div className="heading mb-lg-4">
                    <h3>ChainStats</h3>
                    <p style={{ opacity: '0.5' }}>Welcome<span className='Coinbox' style={{ width: '15px', height: '15px', background: '#fff', display: 'inline-block', borderRadius: '50%', margin: '0 5px' }}></span>Coin „Xyz“ headline</p>
                </div>
                <div className='coin-state-box'>
                    <div>USD <span>23389</span></div>
                    <hr className='coinstate-devider' />
                    <div>STATS <span>54226</span></div>
                </div>
            </div>
            <div className='lineChart2' id='SupplyChart'></div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <div className='market-cap-box'>
                        <h6>Current Market Cap</h6>
                        <span>$1.23M <span>USD</span></span>
                    </div>
                   
                </div>
                <div className='col-md-6'>
                    <div className='market-cap-box'>
                        <h6>Network Deployed</h6>
                        <ul className='circle-box'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'>
                   
                    <div className='market-cap-box'>
                        <h6>Number of holders <span>(active wallets)</span></h6>
                        <span>45k <span>USD</span></span>
                    </div>
                </div>
                <div className='col-md-6'>
                   
                    <div className='market-cap-box'>
                        <h6>Network Deployed</h6>
                        <ul className='circle-box'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className='col-12'>
                    <p className='linktext'>Link to <Link href="#">Node Portal</Link> Explorer for Coin/Token</p>
                </div>
            </div>
        </div>
    );
};

export default SupplyChart;
