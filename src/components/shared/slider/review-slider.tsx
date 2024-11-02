'use client';

import React, { useRef } from 'react';
import {
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
    FaStar,
    FaStarHalfAlt,
} from 'react-icons/fa';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReviewSliderCard from './review-slider-card';

const ReviewSlider = () => {
    let sliderRef = useRef(null) as any;
    const next = () => {
        sliderRef?.slickNext();
    };
    const previous = () => {
        sliderRef?.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="w-full mx-auto select-none">
                <div className="w-full bg-white pt-5 pb-5 relative text-white z-10">
                    <div className="slider-container">
                        <Slider
                            ref={(slider) => {
                                sliderRef = slider;
                            }}
                            arrows={false}
                            {...settings}
                        >
                            {[1, 2, 3].map((item) => (
                                <div className="p-[5px]" key={item}>
                                    <ReviewSliderCard />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="flex items-center justify-between md:p-4 rounded-br-lg rounded-bl-lg">
                    <div className="flex items-center gap-3">
                        <div
                            onClick={previous}
                            className="w-11 h-11 aspect-square rounded-full flex items-center justify-center text-mine-500 bg-tuatara-300 cursor-pointer hover:text-black"
                        >
                            <FaLongArrowAltLeft size={20} />
                        </div>
                        <div
                            onClick={next}
                            className="w-11 h-11 aspect-square rounded-full flex items-center justify-center text-mine-500 bg-tuatara-300 cursor-pointer hover:text-black"
                        >
                            <FaLongArrowAltRight size={20} />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Image
                            src="/fiverr.png"
                            width={100}
                            height={100}
                            alt="fiverr logo"
                            className="object-cover"
                        />
                        <div className="text-tuatara-950">
                            <div className="flex items-center">
                                <span className="text-lg font-semibold mr-2">
                                    4.5
                                </span>
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStarHalfAlt className="text-yellow-500" />
                            </div>
                            <p className="text-sm mt-1">Customer reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
