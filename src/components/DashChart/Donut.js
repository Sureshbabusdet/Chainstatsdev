import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

const START_ANGLE = 90;
const END_ANGLE = 270;

export default function Gauge3() {
    return (
        <div className="py-5">
            <div className="labels-list">
                <Link className="labels" href={'#'}>Invested</Link>
                <Link className="labels" href={'#'}>Stables</Link>
            </div>
            <GaugeComponent
                type="semicircle"
                arc={{
                    colorArray: ['#00FF15', '#FF2121'],
                    padding: 0.02,
                    subArcs: [
                        {
                            limit: 25,
                            showTick: true
                        },
                        {
                            limit: 50,
                            showTick: true
                        },
                        {
                            limit: 75,
                            showTick: true
                        },
                        {
                            limit: 100,
                            showTick: true
                        },
                    ]
                }}
                labels={{
                    valueLabel: { formatTextValue: value => value },
                    tickLabels: {
                        type: 'outer',
                        valueConfig: { formatTextValue: value => value, fontSize: 10 },
                    }
                }}
                pointer={{ type: "blob", animationDelay: 0 }}
                value={45}
            />
            <h3 className="mini-chart-title">Fear & Greed Index</h3>
        </div>

    );
}
