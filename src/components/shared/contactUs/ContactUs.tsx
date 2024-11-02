'use client';
import React from 'react';
import styles from './contact.module.scss';
import Text from '../../ui/typography/typography';
import SectionTitleBtn from '../../ui/SectionTitleBtn';
import ContactForm from './ContactForm';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
const ContactUs = ({ heading }: any) => {
    return (
        <>
            <section className={`${styles.contactUsMain} my-10 relative`}>
                <div>
                    <div
                        className={`${styles.contactUsUpper} bg-[#242627] p-5 rounded-t-lg`}
                    >
                        <div>
                            <SectionTitleBtn
                                text="Contact Us"
                                className="text-[#dee0ff] bg-[#000000]"
                            />
                        </div>
                        {/* for fake space in contact us */}
                        <div className="h-[17vh]"></div>
                        <div className="grid md:grid-cols-2 grid-cols-1 ">
                            <div className="text-start">
                                <Text
                                    text={
                                        heading ||
                                        'Contact with Us for Comprehensive IT'
                                    }
                                    tag="h1"
                                    className="font-semibold text-tuatara-50 md:text-4xl  sm:text-2xl text-lg max-w-2xl"
                                />
                            </div>
                            <div className="sm:block hidden"></div>
                        </div>
                    </div>
                    <div
                        className="grid md:grid-cols-2 grid-cols-1 p-5 rounded-b-lg"
                        style={{
                            background:
                                'linear-gradient(90deg, #E9E6EF 0%, #AFC6E6 100%)',
                        }}
                    >
                        <div className={`mt-5`}>
                            <Text
                                text="We’re happy to answer any questions you may have and help you determine which of our services best fit your needs."
                                tag="paragraph"
                                className="text-tuatara-500 text-lg leading-8 mb-4"
                            />

                            <div className="flex">
                                <Text
                                    text="Social Media:  "
                                    tag="heading"
                                    className="text-tuatara-950 font-semibold text-base"
                                />
                                <div className="flex gap-3 ml-2">
                                    <Link
                                        target="_blank"
                                        href={'https://www.facebook.com/dotlik'}
                                        className="hover:text-pacific-400 duration-300 text-pacific-500"
                                    >
                                        <FaFacebook className="w-7 h-7" />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={'http://wa.me/+8801893900305'}
                                        className="text-green-500 hover:text-green-600 transition-colors duration-300"
                                    >
                                        <FaWhatsapp className="w-7 h-7" />
                                    </Link>
                                </div>
                            </div>
                            <Text
                                text="Email : dotlik10@gmail.com"
                                tag="heading"
                                className="text-tuatara-950 font-semibold mb-4 text-base"
                            />
                            <div className="mb-5 sm:mb-12">
                                <Text
                                    tag="paragraph"
                                    text="What Happens next?"
                                    className="text-tuatara-950 mb-1 font-semibold text-base"
                                />

                                <div className="my-5 ">
                                    <div className="flex lg:flex-row flex-col gap-4 justify-center align-middle text-center">
                                        <div className="flex gap-2 text-left ">
                                            <Text
                                                tag="heading"
                                                text="1"
                                                className="mt-[4px]"
                                            />
                                            <Text
                                                tag="xs"
                                                text="We Schedule a call at your convenience"
                                                className="text-[14px] mt-[4px]"
                                            />
                                        </div>

                                        <div className="flex gap-2 text-left lg:border-x-[1px] lg:border-stone-400 lg:px-4">
                                            <Text
                                                tag="heading"
                                                text="2"
                                                className="mt-[4px]"
                                            />
                                            <Text
                                                tag="xs"
                                                text="We do a discovery and consulting meting"
                                                className="text-[14px] mt-[4px]"
                                            />
                                        </div>

                                        <div className="flex gap-2 text-left">
                                            <Text
                                                tag="heading"
                                                text="3"
                                                className="mt-[4px]"
                                            />
                                            <Text
                                                tag="xs"
                                                text="We prepare a proposal and send it to you"
                                                className="text-[14px] mt-[4px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:block hidden"></div>
                    </div>
                </div>
                <section
                    className={`contactMain bg-white md:absolute top-5 right-5 md:w-[42%] md:z-1 md:shadow-md md:rounded-md container md:p-0`}
                >
                    <ContactForm />
                </section>
            </section>
        </>
    );
};

export default ContactUs;
