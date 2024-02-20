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
        type: "gauge",
        backgroundColor: "none",
        height: 280,
    },

    title: {
        text: "",
    },

    //   plotOptions: {
    //     series: {
    //       shadow: true, // Add shadow to series elements (e.g., lines or columns)
    //     },
    //   },

    plotOptions: {
        series: {
            shadow: true,
            shadow: {
                color: "red", // Shadow color (black with 50% opacity)
                offsetX: 2, // Horizontal offset
                offsetY: 2, // Vertical offset
                opacity: 0.5, // Shadow opacity (50%)
                width: 4, // Shadow width
            },
        },
    },

    pane: {
        center: ["50%", "70%"],
        size: "90%",
        startAngle: -110,
        endAngle: 110,
        background: {
            backgroundColor: {
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                stops: [
                    [0, "#4394C7"], // Start color
                    [0.2333, "#3CC7B2"], // Second color (33.33%)
                    [0.4666, "#4299C9"], // Third color (66.66%)
                    [1, "#5431F5"], // End color
                ],
            }, // Apply the gradient here
            innerRadius: "80%",
            outerRadius: "100%",
            shape: "arc",
            borderColor: "trasparent",
        },
    },

    exporting: {
        enabled: false,
    },

    tooltip: {
        enabled: false,
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        stops: [
            [
                0.5,
                {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, "#B6B6B6"],
                        [1, "#e3e3f4"],
                        [2, "#ccffcc"],
                    ],
                },
            ],
        ],
        lineWidth: 0,
        tickWidth: 0,
        tickPositions: [10, 25, 50, 75, 90],
        minorTickInterval: null,
        tickAmount: 5,
        borderWidth: 0, // Remove the border
        title: {
            y: -80,
            text: "",
        },
        labels: {
            //   formatter() {
            //     // Map numeric values to corresponding strings
            //     const valueToLabel = {
            //       0: "STRONG OUTFLOW",
            //       25: "OUTFLOW",
            //       50: "NEUTRAL",
            //       75: "INFLOW",
            //       100: "STRONG INFLOW",
            //     };

            //     // Use the mapping to display strings
            //     return valueToLabel[this.value];
            //   },

            formatter() {
                // Use a condition to set different colors based on label values
                if (this.value === 10) {
                    return '<span style="color: white;font-weight: 100;font-size: 11px;letter-spacing: 0.3px;">STRONG OUTFLOW</span>';
                } else if (this.value === 25) {
                    return '<span style="color: white;font-weight: 100;font-size: 11px;letter-spacing: 0.3px;">OUTFLOW</span>';
                } else if (this.value === 50) {
                    return '<span style="color: white;font-weight: 100;font-size: 11px;letter-spacing: 0.3px;transform: translatey(20px)">NEUTRAL</span>';
                } else if (this.value === 75) {
                    return '<span style="color: white;font-weight: 100;font-size: 11px;letter-spacing: 0.3px;">INFLOW</span>';
                } else if (this.value === 90) {
                    return '<span style="color: white;font-weight: 100;font-size: 11px;letter-spacing: 0.3px;">STRONG INFLOW</span>';
                }
                // Default label style
                return this.value;
            },
            distance: 35,
            y: 15,
            enabled: true,
            style: {
                color: "white",
                width: "20px", // Customize the label color here
                // You can also set other label styles such as fontSize, fontWeight, fontFamily, etc.
            },
        },
    },
};
export default function Gauge3() {
    const chartRef3 = useRef(null);
    const chartSpeedRef3 = useRef(null);
    const [paneSize, setPaneSize] = useState(null); // Initialize to null

    const totalValue = 85;

    useEffect(() => {
        const chartSpeed = Highcharts.chart("container-speed33", Highcharts.merge(gaugeOptions, {
            credits: {
                enabled: false,
            },
            pane: {
                center: ["50%", "70%"],
                size: paneSize, // Use the responsive size
                startAngle: -110,
                endAngle: 110,
            },
            series: [
                {
                    name: "Speed",
                    data: [totalValue],
                    tooltip: null,
                    tooltip: {
                        valueSuffix: "",
                    },
                    dataLabels: {
                        enabled: true,
                        format: "${y}M",
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
                        radius: "80%",
                        backgroundColor: "#B6B6B6",
                        baseWidth: 15,
                        baseLength: "0%",
                        rearLength: "0%",
                    },
                    pivot: {
                        radius: 15,
                        borderWidth: 2,
                        borderColor: "transparent",
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, "white"],
                                [1, "gray"],
                            ],
                        },
                    },
                },
            ],
        }), (chart) => {
            chartSpeedRef3.current = chart; // Store the chart instance in a ref
            // Create an Intersection Observer to check if the chart is in the viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate the chart series data to 80 when it's in the viewport
                        chartSpeedRef3.current.series[0].setData([totalValue], true);
                    } else {
                        // Reset the chart series data to 0 when it's out of the viewport
                        chartSpeedRef3.current.series[0].setData([0], true);
                    }
                });
            });

            observer.observe(chartRef3.current);
        });
    }, [paneSize]);

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
            <div ref={chartRef3} id="container-speed33" className="chart-container"></div>
            <h3 className="mini-chart-title">Stablecoin inflows</h3>
        </div>
    );
}
