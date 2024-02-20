import React, { useEffect, useRef, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';

if (typeof Highcharts === 'object') {
    HighchartsMore(Highcharts);
    SolidGauge(Highcharts);
    Exporting(Highcharts);
    ExportData(Highcharts);
    Accessibility(Highcharts);
}

const gaugeOptions = {
    chart: {
        type: 'gauge',
        backgroundColor: 'none',
        height: 280,
    },


    title: {
        text: ''
    },


    pane: {
        center: ['50%', '70%'],
        size: '100%',
        startAngle: -110,
    endAngle: 110,
        background: {
            backgroundColor: {
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                stops: [
                    [0, '#4394C7'],     // Start color
                    [0.2333, '#3CC7B2'], // Second color (33.33%)
                    [0.4666, '#4299C9'], // Third color (66.66%)
                    [1, '#5431F5']      // End color
                ]
            }, // Apply the gradient here
            innerRadius: '80%',
            outerRadius: '100%',
            shape: 'arc',
            borderColor: 'trasparent',
        },

    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,
        stops: [
            [0.5, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#B6B6B6'],
                    [1, '#e3e3f4'],
                    [2, '#ccffcc']
                ]
            }]
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 0,
        borderWidth: 0, // Remove the border
        title: {
            y: -70,
            text: ''
        },
        labels: {
            enabled:false,
            y: 16
        }
    },
};
export default function Gauge1() {
    const chartRef = useRef(null);
    const chartSpeedRef = useRef(null);
    const totalValue = 80
    const [paneSize, setPaneSize] = useState(null); // Initialize to null

    useEffect(() => {
        const chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
            credits: {
                enabled: false
            },
            series: [{
                name: '',
                data: [totalValue],
                tooltip: null,
                tooltip: {
                    valueSuffix: ''
                },
                pane: {
                    center: ["50%", "70%"],
                    size: paneSize, // Use the responsive size
                    startAngle: -110,
                    endAngle: 110,
                },
                dataLabels: {
                    enabled: true,
                    format: "{y}",
                    borderWidth: 0,
                    color: "#ffffff",
                    style: {
                        fontSize: "22px",
                        textOutline: "none",
                        fontWeight: "100",
                    },
                },
                rounded: true,
                dial: {
                    radius: '80%',
                    backgroundColor: '#B6B6B6',
                    baseWidth: 15,
                    baseLength: '0%',
                    rearLength: '0%'
                },
                pivot: {
                    radius: 15,
                    borderWidth: 2,
                    borderColor: 'transparent',
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, 'white'],
                            [1, 'gray']
                        ]
                    }
                }
            }]
        }), (chart) => {
            chartSpeedRef.current = chart; // Store the chart instance in a ref
            // Create an Intersection Observer to check if the chart is in the viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate the chart series data to 80 when it's in the viewport
                        chartSpeedRef.current.series[0].setData([totalValue], true);
                    } else {
                        // Reset the chart series data to 0 when it's out of the viewport
                        chartSpeedRef.current.series[0].setData([0], true);
                    }
                });
            });

            observer.observe(chartRef.current);
        });
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPaneSize(window.innerWidth <= 380 ? "65%" : "90%");
        }
        const handleResize = () => {
            setPaneSize(window.innerWidth <= 380 ? "65%" : "90%");
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="pb-5">
            <div ref={chartRef}  id="container-speed" className="chart-container"></div>
            <h3 className="mini-chart-title">Fear & Greed Index</h3>
        </div>
    );
}
