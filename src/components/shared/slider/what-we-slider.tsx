'use client';

import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import React, { useRef } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderCard from './slider-card';

const WhatWeSlider = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

    // Slider content
    const data = [
        {
            title: 'React.js',
            description:
                "A powerful JavaScript library for building user interfaces, React.js allows developers to create reusable UI components, making it easy to build dynamic, interactive web applications. It's widely used in the development of single-page applications.",
            companies: [
                'Facebook',
                'Instagram',
                'Netflix',
                'Airbnb',
                'WhatsApp',
            ],
        },
        {
            title: 'Next.js',
            description:
                'A React framework that enables server-side rendering and static site generation, Next.js enhances performance and SEO. It provides a robust development environment with features like file-based routing, API routes, and built-in CSS support.',
            companies: ['Vercel', 'Hulu', 'Twitch', 'TikTok', 'Nike'],
        },
        {
            title: 'Redux',
            description:
                'A predictable state container for JavaScript apps, Redux centralizes application state management, making it easier to manage and debug complex applications. It works well with React and other JavaScript frameworks.',
            companies: ['Robinhood', 'Twitch', 'Lyft', 'Walmart', 'Etsy'],
        },
        {
            title: 'MongoDB',
            description:
                "A NoSQL database that stores data in flexible, JSON-like documents, MongoDB is designed to handle large volumes of data with ease. It's schema-less, making it highly scalable and adaptable to various data models.",
            companies: ['eBay', 'Adobe', 'SAP', 'Cisco', 'Square'],
        },
        {
            title: 'Socket.io',
            description:
                'A JavaScript library that enables real-time, bidirectional communication between web clients and servers, Socket.io is often used in applications that require live updates, like chat apps, multiplayer games, or real-time analytics.',
            companies: ['Trello', 'Microsoft', 'Slack', 'Uber', 'Coursera'],
        },
    ];

    return (
        <div className="bg-[#242627]">
            <div className="container  rounded-br-lg rounded-bl-lg">
                <div className="py-[50px]">
                    <SectionTitleBtn
                        className="bg-section-bg1 text-section-text1 "
                        text="WHAT WE USE"
                    />

                    <Text
                        text="Bringing the best IT vendors to you."
                        tag="h1"
                        className="text-tuatara-200 mt-5"
                    />
                    <Text
                        text="Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it."
                        className="text-tuatara-200 mt-5 text-base"
                    />
                </div>

                <div className="max-w-[345px] bg-shark-500 mx-auto rounded-tr-[35px] rounded-tl-[35px] flex items-center gap-3 w-full justify-between p-4">
                    <div
                        onClick={() => previous()}
                        className="w-11 h-11 aspect-square rounded-full flex items-center justify-center text-tuatara-300 bg-mine-500 cursor-pointer hover:text-white"
                    >
                        <FaLongArrowAltLeft size={20} />
                    </div>

                    <p className="text-xl font-extrabold text-tuatara-400 text-center">
                        Our IT Services
                    </p>

                    <div
                        onClick={() => next()}
                        className="w-11 h-11 aspect-square rounded-full flex items-center justify-center text-tuatara-300 bg-mine-500 cursor-pointer hover:text-white"
                    >
                        <FaLongArrowAltRight size={20} />
                    </div>
                </div>
            </div>

            {/* <div className="bg-[#1F2021]"></div> */}

            <div className=" w-full bg-white pt-20 relative text-white z-10 pb-10">
                <div className="container">
                    <div className="slider-container">
                        <Slider
                            ref={(slider) => {
                                sliderRef = slider;
                            }}
                            arrows={false}
                            {...settings}
                        >
                            {data.map((item, index) => (
                                <div key={index} className="w-full p-5">
                                    <SliderCard
                                        title={item.title}
                                        description={item.description}
                                        companies={item.companies}
                                    />
                                </div>
                            ))}
                            {/* <div className="p-[5px]" key={1}>
                                <SliderCard />
                            </div> */}
                        </Slider>
                    </div>
                </div>

                <div className="w-full bg-black top-0 left-0 absolute h-full -z-10 grid grid-cols-4 gap-3 pt-3 max-md:grid-cols-3 max-sm:grid-cols-2">
                    <div className="w-full h-full bg-shark-500 rounded-tr-xl"></div>
                    <div className="w-full h-full bg-shark-500 rounded-tr-xl rounded-tl-xl"></div>
                    <div className="w-full h-full bg-shark-500 rounded-tr-xl rounded-tl-xl max-md:hidden"></div>
                    <div className="w-full h-full bg-shark-500 rounded-tl-xl max-sm:hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeSlider;
