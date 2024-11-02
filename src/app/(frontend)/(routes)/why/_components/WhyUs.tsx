'use client';
import React from 'react';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
// import Reviews from '@/components/ui/reviews/Reviews';
import WhatWeDo from '@/components/ui/whatWeDo/WhatWeDo';
import Text from '@/components/ui/typography/typography';
// import ContactUs from '@/components/shared/contactUs/ContactUs';
import WhyChooseUs from './WhyChooseUs';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';

const WhyUs = () => {
    return (
        <section className="my-10 pt-[4.5rem]">
            <div>
                <SectionHeader
                    sectionHeaderButtonText="Why Us"
                    h1Title="We’re the most trusted IT Company"
                    img="/whyUs/why_01.jpg"
                    headingTitle="Everyone has a story. Here is ours"
                    description="With years of technical expertise, a process-driven approach, and unmatched customer service, coupled with an unshakable commitment to see your people flourish, we consistently deliver."
                />
            </div>
            <div className="container">
                <Separator className="lg:my-14 md:my-10 mt-8" />
                <div>
                    <WhyChooseUs />
                </div>

                <Separator className="lg:my-16 md:my-10 mb-10" />

                {/* How Do we do it */}
                <div className="grid grid-cols-1 md:grid-cols-2  md:gap-3 lg:gap-0">
                    <div className="mt-10 md:mt-0 order-2 md:order-1 ">
                        <Text
                            tag="h1"
                            text="How we carry it out"
                            className="mb-6"
                        />
                        <Text
                            tag="terms"
                            text="Ultimately, by taking on the role of your virtual CIO and methodically implementing and supporting technology."
                            className="opacity-80"
                        />
                        <Text
                            tag="terms"
                            text="Our services and solutions, which can expand with your business, reflect the stability and long-term vision of our organization."
                            className="opacity-80"
                        />
                        <Text
                            tag="terms"
                            text="We develop long-term, trusting relationships by combining technology and business skills with great care and communication. One firm, one goal: to help our clients unlock their potential through the revolutionary power of technology."
                            className="opacity-80"
                        />

                        <Text
                            tag="link"
                            text="Explore our services"
                            href="/services"
                        />
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="h-48 md:h-full">
                            <Image
                                src="/whyUs/why_02.jpg"
                                alt="why us right cover"
                                height={500}
                                width={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <Separator className="my-14" />

                <div>
                    <WhatWeDo
                        text="Encourage you to increase revenues, minimize inefficiencies and costs, and optimize profitability.​"
                        buttonText="Schedule a Free Consultation"
                    />
                </div>

                {/* <div className="none">
                    <Reviews />
                </div> */}

                {/* <div className="flex my-7 flex-col md:items-center justify-center">
                    <div className="text-start">
                        <Text
                            tag="h1"
                            text="Executive"
                            className="font-extrabold"
                        />
                        <Text
                            tag="h1"
                            text="Management"
                            className="font-extrabold my-2"
                        />
                        <Text tag="link" text="Explore our team" />
                    </div>

                    <div className=" my-10 grid grid-cols-1 sm:grid-cols-3 gap-5 m-auto max-w-4xl text-center">
                        <div className="overflow-hidden ">
                            <Image
                                src="/whyUs/GettyImages-1.png"
                                width={500}
                                height={500}
                                alt="Placeholder"
                                className="h-auto w-full mt-8"
                            />
                            <Text
                                tag="heading"
                                text="John Doe"
                                className="font-semibold mt-5 mb-2 "
                            />
                            <Text tag="small" text="CEO" />
                        </div>
                        <div className="overflow-hidden rounded-lg ">
                            <Image
                                src="/whyUs/GettyImages-2.webp"
                                alt="Placeholder"
                                className="w-full mt-8 h-auto"
                                width={500}
                                height={500}
                            />
                            <Text
                                tag="heading"
                                text="Megan Palms"
                                className="font-semibold mt-5 mb-2 "
                            />
                            <Text tag="small" text="Marketing Director" />
                        </div>
                        <div className="overflow-hidden rounded-lg ">
                            <Image
                                src="/whyUs/GettyImages-3.webp"
                                alt="Placeholder"
                                className="w-full mt-8 h-auto"
                                width={500}
                                height={500}
                            />
                            <Text
                                tag="heading"
                                text="John Salivan"
                                className="font-semibold mt-5 mb-2 "
                            />
                            <Text tag="small" text="Founder and Co-President" />
                        </div>
                    </div>
                </div> */}
                {/* TODO: Recognized by the best design needed */}
                <div>
                    <Separator className="my-14" />
                </div>

                {/* Contact us Form */}
            </div>
            {/* <div className="lg:container">
                <ContactUs />
            </div> */}
        </section>
    );
};

export default WhyUs;
