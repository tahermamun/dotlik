'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Text from '@/components/ui/typography/typography';
import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
        <section className="bg-black p-24">
            <footer className="container grid grid-cols-1 lg:grid-cols-3">
                {/* Left side content */}
                <div className="order-2">
                    <div>
                        <div>
                            <Text
                                tag="heading"
                                text="Services"
                                className="text-white font-semibold"
                            />
                        </div>
                        <ul className="list-none mb-10 mt-4 flex gap-3 text-[#dee0ff] w-full">
                            <div className="space-y-3  w-full">
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/managed">
                                        Managed Services
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/it">
                                        IT Consulting & Advisory
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/cyber">Cyber Security</Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/Web">Web Development</Link>
                                </li>
                            </div>
                            <div className="space-y-3 w-full relative lg:left-10">
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/mobile">
                                        Mobile Development
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/cloud">Cloud Services</Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/network">
                                        Network Connectivity
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/erp">ERP Solutions</Link>
                                </li>
                            </div>
                        </ul>

                        <div>
                            <Text
                                tag="heading"
                                text="Company"
                                className="text-white font-semibold"
                            />
                        </div>
                        <ul className="list-none mb-4 mt-4 flex gap-3 text-[#dee0ff] w-full">
                            <div className="space-y-3 max-w-[50%] w-full">
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/why">Why Us</Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/team">Team</Link>
                                </li>
                                <li className="cursor-pointer hidden hover:text-white">
                                    <Link href="/careers">Careers</Link>
                                </li>
                                <li className="cursor-pointer hidden hover:text-white">
                                    <Link href="/partners">
                                        Partners & Certifications
                                    </Link>
                                </li>

                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/terms-conditions">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </div>
                            <div className="space-y-3  w-full relative lg:left-10">
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/blog">Blog</Link>
                                </li>

                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/faq">FAQ</Link>
                                </li>
                                <li className="cursor-pointer hover:text-white">
                                    <Link href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex col-span-2 lg:relative justify-start lg:justify-center items-center order-1 md:order-2 flex-col lg:flex-row gap-0 lg:gap-9">
                    <div className="w-full lg:absolute top-0 left-0 overflow-hidden">
                        <Image
                            src="/footer/footer-dots.svg"
                            width={500}
                            height={500}
                            alt="logo"
                            className=" lg:w-2/3 lg:ml-auto "
                        />
                    </div>

                    <div className="z-[2] gap-3 flex flex-col items-center  p-6 relative lg:top-10 lg:left-32 bg-black">
                        <Link
                            className="text-white text-xl font-extrabold mb-2"
                            href="/"
                        >
                            <Image
                                src="/footer/LOGO - TEXT BELOW.png"
                                height={500}
                                width={500}
                                alt="footer_logo"
                                className="w-16 object-cover"
                            />
                        </Link>
                        <Button variant="default" className="py-2 px-6">
                            Schedule Consultation
                        </Button>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
