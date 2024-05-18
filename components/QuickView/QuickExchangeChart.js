import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';


const QuickExchangeChart = () => {
    // Define the initial chart options
    const staticData = {
        Q1: [900, 50, 1300, 10],
        Q2: [200, 20, 1000, 200],
        Q3: [600, 300, 500, 600],
        Q4: [400, 100, 800, 400],
    };

    const categories = ['Q1', 'Q2', 'Q3', 'Q4'];

    const seriesData = Object.keys(staticData).map((key, index) => {
        return {
            name: `Series ${index + 1}`,
            data: staticData[key],
        };
    });

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
                    return this.value + ' USD';
                }
            },
            opposite: true,
            lineWidth: 1, // Set the line width for the y-axis
            lineColor: '#656D85',
        },
        tooltip: {
            backgroundColor: '#171725',
            style: {
                color: 'white',
                borderRadius: '10px',
            },
            borderWidth: 0,
            borderColor: null,
            outside: true,
            shadow: false,
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
                data: [300, 1300, 300, 750], // Quarterly data

            }
        ]
    };

    // Initialize the chart with the default filter
    useEffect(() => {
        const chart = Highcharts.chart('QuickExchangeChart', initialOptions);
    }, []);
    
    return (
        <div className='p-lg-4 p-md-4 p-0 pe-0 pe-md-0 pe-lg-0'>
            <div className='lineChart2' id='QuickExchangeChart'></div>
        </div>
    );
};

export default QuickExchangeChart;
