'use client';
import React from 'react';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import Text from '@/components/ui/typography/typography';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import BenefitCard from './BenefitCard';
import { Button } from '@/components/ui/button';
import ContactUs from '@/components/shared/contactUs/ContactUs';

const CareersComponents = () => {
    return (
        <section className="mt-10 pt-[4.5rem]">
            <div>
                <SectionHeader
                    sectionHeaderButtonText="CAREERS"
                    h1Title="Start your journey"
                    img="/careers/careers-cover.webp"
                    headingTitle="Grow your career as we grow. Join the team that's changing IT services"
                    description="“We put our people first.” It’s something a lot of companies say, but not a lot of companies do. Here at Dotlick, it’s our most important core value.
                    We believe when we place a high value on our team’s happiness, work/life balance, and professional development, everybody wins—clients included."
                />
            </div>

            <div className="container mx-auto mt-[7rem] max-w-[1100px] relative">
                <Image
                    src="/careers/careers-middle.webp"
                    width={500}
                    height={500}
                    alt="careers middle"
                    className="w-full h-full object-cover  -z-[-3"
                />
                {/* TODO: there will be a click able event  */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full p-8 border-pacific-500 border-[5px]">
                    <FaPlay className=" text-pacific-500 z-10 text-5xl" />
                </div>
            </div>

            <div className="container lg:pt-[7rem] pt-[3rem]">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[10rem] ">
                    <div>
                        <Text
                            tag="h1"
                            text="Dotlick is a place to grow"
                            className="font-extrabold"
                        />
                    </div>
                    <div className="md:hidden"></div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-[10rem] gap-6 md:mt-5 mt-10">
                    <div>
                        <Text
                            tag="paragraph"
                            text="Dotlick is rapidly growing across the country, both organically and by bringing in like-minded managed IT service providers (MSPs). We’re building a national network that can provide exceptional levels of service to our clients."
                            className="text-xl"
                        />
                    </div>
                    <div>
                        <Text
                            tag="paragraph"
                            text="Even as we grow, we’re keeping it small. You’ll work in smaller, fast-paced teams—making a difference to our clients and our company, every day. When you’re ready to grow your career, we have a place for you at Dotlick."
                            className="text-xl "
                        />
                    </div>
                </div>
            </div>

            {/* BEST IN CLASS BENEFITS */}
            <section className=" py-10 mt-12">
                <div className="container">
                    <div>
                        <SectionTitleBtn
                            text="BENEFITS"
                            className="text-black bg-[#f5f5f5]"
                        />
                    </div>
                    <div>
                        <Text
                            tag="h1"
                            text="Best-in-class benefits"
                            className="text-extrabold mt-8 mb-8"
                        />
                    </div>
                    <div>
                        <BenefitCard />
                    </div>

                    <div className="text-center mt-12 mb-4">
                        <Button variant={'default'}>
                            Explore Open Positions
                        </Button>
                    </div>
                </div>
            </section>

            {/* Come on board */}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 lg:gap-0 md:my-24 my-12">
                <div className="mt-6 md:pt-12 md:mt-0 order-1 md:col-span-1">
                    <Text
                        tag="h1"
                        text="Come on board! Learn more about Dotlick"
                        className="mb-6 font-bold"
                    />
                    <Text
                        tag="terms"
                        text="Dotlick is a global Digital Solutions Company for Fortune 500 and fast-growing organisations alike around the world. Learn who we are and why we are different."
                        className="opacity-80"
                    />
                    <Button variant="default">Learn about company</Button>
                </div>

                <div className="order-2 md:col-span-1">
                    <div className="h-48 md:h-full">
                        <Image
                            src="/careers/careers-right.webp"
                            alt="Team right cover"
                            height={500}
                            width={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};

export default CareersComponents;
