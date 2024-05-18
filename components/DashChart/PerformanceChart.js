import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';

const ChartComponent = () => {
  // Define the initial chart options
  

  const initialOptions = {
    credits: {
      enabled: false,
    },
    chart: {
      type: 'areaspline',
      height: 200,
    },
    exporting: { enabled: false },
    title: {
      text: '',
    },
    xAxis: {
      visible: false, // Hide the x-axis
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    yAxis: {
      visible: false, // Hide the y-axis
      title: false,
      labels: {
        formatter: function () {
          return this.value;
        },
      },
    },
    tooltip: {
        backgroundColor: '#171725',
        style: {
            color: 'white',           // Text color
            backgroundColor: 'blue'    // Background color
        },
    //   formatter: function () {
    //     return '<span style="overflow: visible;font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px; white-space: nowrap; position:absolute; color: rgb(88, 88, 88); margin-left: 0px; margin-top: 0px; left: 8px;border-radius:0px; top: 8px;"><div className="chart-map-custom-tooltip graph-tooltip"><div className="col-6"><div><p className="detail-value date">' + this.x + '</p><img src="https://app.freshping.io/static/media/up_2.307e4106.svg" alt="up icon" classname="status-img down-status-img"></div><p className="up">' + Math.round(this.y / 10.14) + '% </p></div><div className="chart-map-tooltip-details"><p className="detail-title">Avg: <span className="detail-value">' + this.y + '</span></p><p className="detail-title">Min: <span className="detail-value">' + this.y / 20 + '</span></p></div></div></span>';
    //   },
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        shadow: true,
        animation: false
      },
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          zIndex: 1,
          enabled: true,
          color: 'blue',
          connectorWidth: 0,
          useHTML: true,
          formatter: function () {
            return '<span style="color:' + this.point.color + '"><b>' + this.point.name + '</b></span>';
          },
        },
      },
      area: {
        color: 'url(#gradient-0)', // Reference the gradient defined in defs
      },
    },
    series: [
      {
        name: 'Serie 1',
        showInLegend: false,
        lineWidth: 1,
        color: '#8BDAB4',
        marker: {
          enable: false,
          fillColor: 'transparent',
          lineWidth: 1,
        },
        fillOpacity: 0.1,

        data: [], // Updated data will be set based on the selected filter
      },
    ],
    colors: ['#16C784'], // Set your desired color here
    defs: {
      gradient0: {
        // Define the gradient in defs
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0,
            style: {
              stopColor: '#16C784', // Start color
            },
          },
          {
            tagName: 'stop',
            offset: 1,
            style: {
              stopColor: '#16C784', // End color
            },
          },
        ],
      },
    },
  };

  // Define filters and their respective data
  const filters = [
    { label: '30D', data: [900,50,1300,250,200,500,1000,200,600,300]},
    { label: '90D', data: [900,50,1300,500,900,20,600,300]},
    { label: '6M', data: [900,50,1300,10,200,20,1500,200,600,300]},
    { label: '1Y', data: [900,50,1300,220,200,20,1000,200,800,300]},
    { label: 'All', data: [900,50,1300,10,200,0]},
  ];

  // State to track the currently selected filter
  const [selectedFilter, setSelectedFilter] = useState(0);

  // Function to update the chart with the selected filter
  const updateChart = (filterIndex) => {
    const selectedData = filters[filterIndex].data;

    const updatedOptions = {
      ...initialOptions,
      series: [
        {
          ...initialOptions.series[0],
          data: selectedData,
        },
      ],
    };

    return updatedOptions;
  };

  // Initialize the chart with the default filter
  useEffect(() => {
    const defaultOptions = updateChart(selectedFilter);
    const chart = Highcharts.chart('chart-container', defaultOptions);
  }, [selectedFilter]);

  // Handle filter selection
  const handleFilterChange = (filterIndex) => {
    setSelectedFilter(filterIndex);
    const updatedOptions = updateChart(filterIndex);
    const chart = Highcharts.chart('chart-container', updatedOptions);
  };

  return (
    <div>
        
      <div className='line-chart' id='chart-container'></div>
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={selectedFilter === index ? 'active per-filter-btn' : 'per-filter-btn'}
            onClick={() => handleFilterChange(index)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;
