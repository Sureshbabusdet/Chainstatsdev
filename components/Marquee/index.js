import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ACTION_ROUTES } from '../../constants/constant';
import axios from 'axios';

export default function Marquee() {
    const [tickerData, setTickerData] = useState([]); // Added loading state

    const settings = {
        dots: false,
		infinite: true,
		arrows: false,
		prevArrow: '<button type="button" className="slick-prev"><i className="fa-regular fa-angle-left"></i></button>',
		nextArrow: '<button type="button" className="slick-next"><i className="fa-regular fa-angle-right"></i></button>',
		appendArrows: '.sliderrr__nav',

		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
		  {
			breakpoint: 1399,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 1199,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
    };

    const getTickerData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await axios.get(ACTION_ROUTES.TickersAPI, {
            headers: {
                Authorization: `Bearer ${token}` // Include token in authorization header
            }
        });
        setTickerData(response.data.tickers)
    };

    useEffect(() => {
        getTickerData();
    }, []);

    return (
        <div className="marque__area">
            <div className="w-100">
                <div className="marque__inner p-relative">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="marque__wrapper">
                                <Slider className='marque__slider' {...settings}>
                                    {tickerData && tickerData.map((item, index) => (
                                        <div className="marque__item " key={'tickers'+index}>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}