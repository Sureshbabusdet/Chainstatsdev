import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock'; // or 'highcharts/highcharts'
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

const ChainState = ({ title, data }) => {


    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
        },
        title: null,
        tooltip: {
            backgroundColor: '#171725',
            style: {
                color: 'white',          
                borderRadius: '10px',   // Background color
            },
            headerFormat: '',
            pointFormat:
                '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Area (square km): <b>{point.y}</b><br/>' +
                'Population density (people per square km): <b>{point.z}</b><br/>',
        },
        exporting: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    color: '#fff', // Change the label color to red for all labels
                    borderWidth: 0, // Remove the label border
                    style: {
                        fontSize: '18px', // Set the font size for labels
                        fontWeight: '200', // Set the font weight to bold
                    },
                },
                borderColor: 'transparent', // Remove the border around the Variable Pie chart
            },
        },
        series: [
            {
                minPointSize: 10,
                innerSize: '80%',
                zMin: 0,
                name: 'countries',
                borderRadius: 0,
                data: data,
                colors: [
                    '#00fffb',
                    '#5200ff',
                    '#32d796',
                    '#fb923c',
                    '#5a9efb',
                    '#00e887',
                    '#23e274',
                ]
            },
        ],
    }
    const chartRef = useRef(null);

    useEffect(() => {
        Highcharts.chart(chartRef.current, options);
    }, [data]);

    return (
        <div className='text-center label_design'>
            <div className='heading mb-5'>
                <h3 className=' text-capitalize'>{title}</h3>
            </div>
            <div ref={chartRef}></div>
        </div>
    );
};

export default ChainState;
