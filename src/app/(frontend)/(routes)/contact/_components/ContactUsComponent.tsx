import Image from 'next/image';
import React from 'react';
import { RiArrowRightWideLine } from 'react-icons/ri';

import ContactUs from '@/components/shared/contactUs/ContactUs';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/typography/typography';

const ContactUsComponent = () => {
    return (
        <section className="pt-[7rem]">
            <div className="container">
                <div className="text-center">
                    <SectionTitleBtn
                        text="CONTACT"
                        className="text-[#000000] bg-[#f5f5f5]"
                    />
                    <Text
                        tag="h1"
                        text="We're here to help"
                        className="text-3xl lg:text-6xl mt-5 mb-3 font-extrabold max-w-[718px] mx-auto"
                    />

                    <div className="mt-4 flex md:flex-row flex-col max-w-[420px] mx-auto justify-between items-center md:text-start text-center mb-5">
                        <div className="flex flex-col">
                            <Text tag="small" text="Contact us at:" />
                            <Text tag="small" text="+880 1893-900305" />
                        </div>
                        <div className="block text-7xl text-gray-200 md:rotate-0 rotate-90">
                            <RiArrowRightWideLine />
                        </div>

                        <div className="flex flex-col">
                            <Text tag="small" text="Email us:" />
                            <Text tag="small" text="dotlick@info.gmail.com" />
                        </div>
                    </div>
                    <div>
                        <Button variant="default">
                            Schedule Free Consultation
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-6 2xl:container w-full m-auto">
                <div>
                    <Image
                        src="/contact/contact-us-cover.webp"
                        alt="why page cover photo"
                        width={1280}
                        height={500}
                        className="object-cover w-full  bg-cover bg-no-repeat bg-top"
                    />
                </div>
            </div>

            <div className="py-6 container grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-start justify-center">
                    <Text
                        tag="h1"
                        text="Our locations"
                        className="text-3xl lg:text-6xl font-extrabold max-w-3xl sm:my-6 my-4"
                    />
                    <Text
                        tag="terms"
                        text="We would happy to show you around our offices, which are spread across Dubai and Bangladesh. You do not see an office nearby? No matter where your business is located, we have the ability to assist it."
                    />
                </div>

                <div className="flex justify-end md:items-center w-1/4  md:w-full ml-auto">
                    <Image
                        width={480}
                        height={300}
                        src="/contact/shape-bg.svg"
                        alt="Shape Bg"
                        className="object-cover w-full md:w-2/3 bg-cover bg-no-repeat bg-top"
                    />
                </div>
            </div>

            {/* // Point: contact us page locations places are hidden using display none */}
            <div className="hidden container flex lg:flex-row flex-col">
                <div className="grid md:grid-cols-3 grid-cols-1 lg:w-9/12 w-full">
                    <div className="md:pr-16 pr-0 pb-8 max-w-60">
                        <Text tag="h1" text="Florida" className="mb-5" />
                        <Text
                            tag="heading"
                            text="Bonita Springs"
                            className="mb-2"
                        />
                        <Text
                            tag="small"
                            text="28200 Old 41 Rd #208 Bonita Springs, FL 34135 (817) 575-6220"
                            className="pl-0"
                        />
                        <Text
                            tag="link"
                            text="Get Directions"
                            className="block w-fit mt-5"
                        />
                    </div>

                    <div className="md:px-16 py-8 pt-8 md:pt-0 md:border-x-2 border-y-2 md:border-y-0  border-gray-200">
                        <Text tag="h1" text="Kansas" className="mb-5" />
                        <Text
                            tag="heading"
                            text="Kansas City"
                            className="mb-2"
                        />
                        <Text
                            tag="small"
                            text="12421 W. 151st St., Suite 100 Olathe, KS 66000 (325) 221-9900"
                            className="pl-0 max-w-56 block"
                        />
                        <Text
                            tag="link"
                            text="Get Directions"
                            className="block w-fit mt-5"
                        />
                    </div>

                    <div className="md:pl-16 pl-0 pt-8 md:pt-0 max-w-60">
                        <Text tag="h1" text="Georgia" className="mb-5" />
                        <Text tag="heading" text="Atlanta" className="mb-2" />
                        <Text
                            tag="small"
                            text="3565 Piedmont Rd NE Building 2, Suite 200 Atlanta GA 30222 (404) 551-52222"
                            className="pl-0"
                        />
                        <Text
                            tag="link"
                            text="Get Directions"
                            className="block w-fit mt-5"
                        />
                    </div>
                </div>
                <div className="lg:w-3/12 hidden"></div>
            </div>

            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};

export default ContactUsComponent;
