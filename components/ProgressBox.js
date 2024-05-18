import { useEffect, useState } from 'react';

const ProgressBox = ({ title, flow, label, label2, percent,islabelBottom }) => {

    return (
        <div className='progressBox'>
            {!islabelBottom && <label className='d-flex justify-content-between'>{label} <span className='label2'>{label2}</span></label>}
            <div className='progressBar'>
                <span className='bar'></span>
                <span className='circletrigger' style={{ marginLeft: `${percent - 3}%` }}></span>
            </div>
            {flow && <h6>{flow}</h6>}
            {islabelBottom && <label className='d-flex justify-content-between'>{label} <span className='label2'>{label2}</span></label>}
        </div>
    );
};

export default ProgressBox;
