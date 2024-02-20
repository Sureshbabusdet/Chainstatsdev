import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './marquee.css';
import Slider from "react-slick";

export default function Marquee() {
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
    return (
        <div className="marque__area">
            <div className="w-100">
                <div className="marque__inner p-relative">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="marque__wrapper">
                                <Slider className='marque__slider' {...settings}>
                                    <div className="marque__item ">
                                        <p>Latest Charts are updated and shared</p>
                                    </div>
                                    <div className="marque__item">
                                        <p>ChainStats - Discover  &  Callect  Extraordinary  Charts</p>
                                    </div>
                                    <div className="marque__item">
                                        <p>ChainStats - Discover  &  Callect  Extraordinary  Charts</p>
                                    </div>
                                    <div className="marque__item ">
                                        <p>Latest Charts are updated and shared</p>
                                    </div>
                                    <div className="marque__item">
                                        <p>ChainStats - Discover  &  Callect  Extraordinary  Charts</p>
                                    </div>
                                    <div className="marque__item">
                                        <p>ChainStats- Discover  &  Callect  Extraordinary  Charts</p>
                                    </div>
                                </Slider>
                                {/* <div className="marque__slider">

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}