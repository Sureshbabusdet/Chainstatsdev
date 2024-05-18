import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { Tab, Table } from 'react-bootstrap';


const BugReportsChart = () => {
    const initialOptions = {
        chart: {
            type: 'areaspline',
            height: 150,
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
                enabled: true,
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
                enabled: true,
                style: {
                    color: '#5A9EFB', // Set the color for x-axis labels (red in this example)
                },
                formatter: function () {
                    return this.value;
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
            backgroundColor: '#171725',
            style: {
                color: 'white',           // Text color
                backgroundColor: 'blue'    // Background color
            },
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
        const chart = Highcharts.chart('BugReportsChart', initialOptions);
    }, []);
    return (
        <div className='p-4'>
            <div className="heading mb-4">
                <h3 className='text-capitalize'>Uptime and bug reports</h3>
            </div>
            <div className='lineChart2' id='BugReportsChart'></div>
            <div className='table-responsive'>
            <Table className='table-borderless bg-transparent borderless-table mt-4'>
                <thead>
                    <tr>
                        <th className='bg-transparent px-0 py-1'>Bug Reports</th>
                        <th className='bg-transparent px-0 py-1'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bg-transparent px-0 py-1'>Node10-#239332</td>
                        <td className='bg-transparent px-0 py-1'>Solved</td>
                    </tr>
                    <tr>
                        <td className='bg-transparent px-0 py-1'>Node12-#239332  </td>
                        <td className='bg-transparent px-0 py-1'>Pending</td>
                    </tr>
                    <tr>
                        <td className='bg-transparent px-0 py-1'>Node34-#239332</td>
                        <td className='bg-transparent px-0 py-1'>Solved</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default BugReportsChart;
