'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PartnerSlide() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: 'linear',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: 'linear',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: 'linear',
                },
            },
        ],
    };

    const slidesData = [
        { src: '/partners/business.webp', alt: 'buisness' },
        { src: '/partners/acronis.webp', alt: 'acronis' },
        { src: '/partners/cisco.webp', alt: 'i' },
        { src: '/partners/cissp.webp', alt: 'i' },
        { src: '/partners/dell.webp', alt: 'i' },
        { src: '/partners/intel.webp', alt: 'i' },
        { src: '/partners/microsoft.webp', alt: 'i' },
        { src: '/partners/silver.webp', alt: 'i' },
        { src: '/partners/SOC2AICPA.webp', alt: 'i' },
        { src: '/partners/ubiquiti.webp', alt: 'i' },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div
                        key={slide.src}
                        className="slick-slide w-[200px] h-[200px]"
                    >
                        <div className="mr-[100px] w-[120px] h-[120px] object-fill">
                            <Image
                                alt={slide.alt}
                                src={slide.src}
                                width={500}
                                height={500}
                                className=" max-w-full h-full object-fill"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PartnerSlide;
