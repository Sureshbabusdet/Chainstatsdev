import React from 'react';
import Image from 'next/image';
const Loader = ({ isLoading }) => {
    return (
        <div className={`tp-preloader-3 ${!isLoading && 'hide'}`}>
            <div className="loader loader-1">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>
            </div>
        </div>
    );
};

export default Loader;