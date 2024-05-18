import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import netflowdata from './data';

const NetflowChart = ({flow}) => {
    const chartRef = useRef(null);
    const customLegendRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState('7D');

    useEffect(() => {
        const fetchAndRenderChart = async () => {
            // const response = await fetch(
            //     'https://cdn.jsdelivr.net/gh/highcharts/highcharts@24912efc85/samples/data/olympic2012.json'
            // );
            const data = netflowdata;

            const getData = (sportName) => {
                const temp = [];
                data.forEach((elm) => {
                    if (elm.sport === sportName && elm.weight > 0 && elm.height > 0) {
                        temp.push([elm.height, elm.weight]);
                    }
                });
                return temp;
            };


            const inflowSeries = [
                {
                    name: "Exchange Inflow / SPOT EXCHANGES, CHAINSTATS <span className='yellow-leged'>$ 8535,35 +42,89 (+0.50%)</span>",
                    id: 'spotInflow',
                    color: '#AD00FF',
                    marker: {
                        symbol: 'circle',
                    },
                    data: getData('Stablecoin Inflows to Spot Exchanges'),
                },
                {
                    name: "Exchange Inflow / DERIVATIVE EXCHANGES, CHAINSTATS  <span className='yellow-leged'>$ 8535,35 +42,89 (+0.50%)</span>",
                    id: 'direcinflow',
                    color: '#FF9B00',
                    marker: {
                        symbol: 'circle',
                    },
                    data: getData('Bitcoin Inflows to Spot Exchanges'),
                },
            ];
    
            const outflowSeries = [
                {
                    name: "Exchange Outflow / SPOT EXCHANGES, CHAINSTATS  <span className='red-leged'>$ 8535,35 +42,89 (+0.50%)</span>",
                    id: 'spotoutflow',
                    color: '#32D796',
                    marker: {
                        symbol: 'circle',
                    },
                    data: getData('Stablecoin Inflows to Derivative Exchanges'),
                },
                {
                    name: "Exchange Outflow / DERIVATIVE EXCHANGES, CHAINSTATS  <span className='red-leged'>$ 8535,35 +42,89 (+0.50%)</span>",
                    id: 'direcinoutflow',
                    color: 'blue',
                    marker: {
                        symbol: 'circle',
                    },
                    data: getData('Bitcoin Inflows to Derivative Exchanges'),
                },
            ];

            const series = flow === 'Inflows' ? inflowSeries : outflowSeries;

            const chartOptions = {
                chart: {
                    type: 'scatter',
                    zoomType: 'xy',
                    backgroundColor: 'transparent',
                    renderTo: chartRef.current,
                },
                credits: {
                    enabled: false
                },
                exporting: { enabled: false },
                title: null,
                subtitle: null,
                xAxis: {
                    title: null,
                    labels: {
                        format: '{value} m',
                        style: {
                            color: '#8991AD' // Change the X-axis label color to blue
                        }
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                },
                yAxis: {
                    title: {
                        text: null,
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#8991AD' // Change the Y-axis label color to red
                        }
                    },
                },
                legend: false,

                plotOptions: {

                    scatter: {
                        marker: {
                            radius: 2.5,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)',
                                },
                            },
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false,
                                },
                            },
                        },
                        jitter: {
                            x: 0.005,
                        },
                    },
                },
                tooltip: {
                    backgroundColor: '#171725',
                    style: {
                        color: 'white',           // Text color
                        backgroundColor: 'blue'    // Background color
                    },
                    pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg',
                },
                series,
            }

            const chart = new Highcharts.Chart(chartOptions);

            // Create a custom legend
            const legendItems = chart.series.map((data) => {
                // console.log('legend', data)
                return `
                    <div className="item">
                        <div className="symbol" style="background-color:${data.color}"></div>
                        <div className="serieName">${data.name}</div>
                    </div>
                `;
            });

            customLegendRef.current.innerHTML = legendItems.join('');

            // Add click event to legend items to toggle series visibility
            customLegendRef.current.querySelectorAll('.item').forEach((item, index) => {
                const point = chart.series[index];
                item.addEventListener('click', () => {
                    if (point) {
                        if (point.visible) {
                            point.setVisible(false);
                            item.classList.remove('active');
                        } else {
                            point.setVisible(true);
                            item.classList.add('active');
                        }
                    }
                });
            });
        };

        fetchAndRenderChart();
    }, [flow]);

    return (
        <>
            <div ref={chartRef}></div>
            <div ref={customLegendRef} className="netflow-legend"></div>
        </>
    );
};

export default NetflowChart;
