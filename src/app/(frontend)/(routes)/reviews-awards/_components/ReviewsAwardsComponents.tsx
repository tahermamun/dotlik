'use client';
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import AwardsCard from './AwardsCard';
import ReviewsCard from './ReviewsCard';
import { Separator } from '@/components/ui/separator';
import ContactUs from '@/components/shared/contactUs/ContactUs';
import ReviewSlider from '@/components/shared/slider/review-slider';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FaCirclePlay } from 'react-icons/fa6';

const ReviewsAwardsComponents = () => {
    return (
        <section className="mt-10 pt-[4.5rem]">
            <div>
                <SectionHeader
                    sectionHeaderButtonText="REVIEWS & AWARDS"
                    h1Title="Standing out from competitors"
                    img="/reviews/reviews-cover.webp"
                    headingTitle="Dotlick has been consistently recognised as a leader in the managed IT services industry"
                    description="While the best award we can receive is the loyalty of our clients and staff, Dotlick has been consistently recognised as a leader in the managed IT services industry."
                />
            </div>

            {/* Awards recognitions */}
            <section className="py-12 mt-12">
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
                        <AwardsCard />
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container flex flex-wrap flex-col md:flex-row gap-5 justify-between md:items-center items-start my-6">
                    <div className="order-2 md:order-1 lg:w-1/2 md:w-8/12 w-full">
                        <Text
                            tag="h1"
                            text="What our clients say about working with us"
                            className="text-extrabold"
                        />
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="max-md:col-span-2 flex gap-2 flex-col justify-center md:items-end pb-5 md:pb-0">
                            <div className="flex md:items-center">
                                <h1 className="mr-2 text-[11px] font-semibold">
                                    REVIEWED ON
                                </h1>
                                <div className="flex items-center gap-[1px]">
                                    <FaStar className="text-emerald-500" />
                                    <FaStar className="text-emerald-500" />
                                    <FaStar className="text-emerald-500" />
                                    <FaStar className="text-emerald-500" />
                                    <FaStar className="text-emerald-500" />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Image
                                    src="/fiverr.png"
                                    width={70}
                                    height={70}
                                    alt="clutch_logo"
                                    className="mr-3"
                                />
                                <span className="text-[11px] font-semibold">
                                    31 REVIEWS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Card section  */}
            <div className="container">
                <ReviewsCard />
            </div>

            <Separator className="my-12 container" />

            <section className="container flex flex-wrap gap-4 md:gap-8 lg:py-12 py-4">
                <div className="w-full md:w-[45%] relative rounded-md overflow-hidden flex items-center">
                    <div className="relative w-full h-0 pb-[56.25%] md:pb-0 md:h-full">
                        <Image
                            src="/reviews/reviews-left.webp"
                            layout="fill"
                            objectFit="cover"
                            alt="careers middle"
                            className="rounded-md"
                        />

                        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                        {/* video play btn */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-pacific-500 cursor-pointer  text-white">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <FaCirclePlay className="text-6xl" />
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md lg:max-w-5xl h-auto ">
                                    <div>
                                        <iframe
                                            className="lg:w-full lg:h-[500px] p-4"
                                            src="https://www.youtube.com/embed/QQgXTLutn7s?si=WOs7rRe5As1Kl2f2"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        {/* diolog start  */}

                        {/* diolog end */}
                        <div className="absolute bottom-0 w-full text-white p-4">
                            <h2 className="font-extrabold">Taher Mamun</h2>
                            <p>CEO, Dotlik</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[50%]">
                    <ReviewSlider />
                </div>
            </section>

            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};

export default ReviewsAwardsComponents;
