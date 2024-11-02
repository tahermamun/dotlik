'use client';

import React from 'react';

import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import PartnerSlide from './PartnerSlide';
import { Button } from '@/components/ui/button';
import ContactUs from '@/components/shared/contactUs/ContactUs';
import Reviews from '@/components/ui/reviews/Reviews';
const PartnerShipsComponents = () => {
    return (
        <section className="mt-10 pt-[4.5rem]">
            <div>
                <SectionHeader
                    sectionHeaderButtonText="PARTNERS & CERTIFICATIONS"
                    h1Title="Drive business forward by partnering with us"
                    img="/partners/partner-cover.webp"
                    headingTitle="We’re proud to partner with top-notch companies to deliver services we can be proud of."
                    description="We believe technology should enable organizations to be the absolute best at what they do. This commitment to customer success is why Dotlick is recognized as the premier strategic managed service and security partner to strategic CIOs and IT leaders across the United Arab Emirates."
                />
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-40 md:my-24 my-12">
                <div className="mt-6 md:pt-12 md:mt-0 order-2 md:order-1">
                    <Text
                        tag="h1"
                        text="Why our credentials are important"
                        className="mb-6 font-bold"
                    />
                    <Text
                        tag="small"
                        text="At Tecnologia, we promise our clients premium service and expertise. Our elite certifications and industry partnerships are one of the biggest reasons why we can make that promise and make it with confidence."
                        className="opacity-80 inline-block mb-4"
                    />
                    <Text
                        tag="small"
                        text="We’ve configured our operations to comply with the highest data handling standards, so we stay ahead of the regulatory asks for every industry. Our growing national footprint gives us the opportunity to have deep relationships with the companies that provide our tools and networks. We’re putting this expertise to work for you, every day, through better trained service personnel, and cutting-edge products and packages."
                        className="opacity-80 inline-block"
                    />
                </div>

                <div className="order-1 md:order-2">
                    <div className="h-48 md:h-full">
                        <Image
                            src="/partners/partner-middle.webp"
                            alt="Team right cover"
                            height={500}
                            width={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Start Step components */}
            <div className="v-[5vh]"></div>
            {/* End Step components */}

            <Separator className="my-12 container" />

            <div className="container">
                <div className="text-start">
                    <SectionTitleBtn
                        text="STRATEGIC PARTNERSHIPS"
                        className="text-[#000000] bg-[#f5f5f5]"
                    />
                </div>

                <div className="my-16">
                    <PartnerSlide />
                </div>
            </div>

            <Separator className="my-12 container" />

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-0 my-4">
                <div className="mt-6 md:pt-12 md:mt-0 order-2 md:order-1 ">
                    <Text
                        tag="h1"
                        text="How we work with our partners"
                        className="mb-6"
                    />
                    <Text
                        tag="terms"
                        text="At Tecnologia, we treat our partners with the utmost respect and expect the same in return. We believe that the key to fostering any good relationship is finding the right balance between the give and the take."
                        className="opacity-80"
                    />
                    <Text
                        tag="terms"
                        text="We pride ourselves on striking the perfect harmony between the two so that our relationships can flourish to full potential."
                        className="opacity-80"
                    />
                    <Button variant="default">Get in Touch</Button>
                </div>

                <div className="order-1 md:order-2">
                    <div className="h-48 md:h-full">
                        <Image
                            src="/partners/partner-right.webp"
                            alt="Partner right cover"
                            height={500}
                            width={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="container md:mt-10 mt-4 md:mb-20 mb-8">
                <Reviews />
            </div>

            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};

export default PartnerShipsComponents;
