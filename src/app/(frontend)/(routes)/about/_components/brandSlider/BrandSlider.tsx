'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const BrandSlider = () => {
    let settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="slider-container my-10">
            <Slider {...settings}>
                {sliderImage?.map((item) => (
                    <div key={item.id}>
                        <Image
                            src={item?.image}
                            width={500}
                            height={500}
                            alt="slider_image"
                            className="w-32 object-contain h-32 mx-auto"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

const sliderImage = [
    {
        id: 1,
        image: '/about/top_clutch.png',
    },
    {
        id: 2,
        image: '/about/ny_nyc_man.png',
    },
    {
        id: 3,
        image: '/about/forbes.png',
    },
    {
        id: 4,
        image: '/about/google.png',
    },
    {
        id: 5,
        image: '/about/top_clutch.png',
    },
];

export default BrandSlider;
