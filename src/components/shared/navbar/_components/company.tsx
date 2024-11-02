'use client';

import Text from '@/components/ui/typography/typography';
import Link from 'next/link';
import React from 'react';
import { BiLogoGoogleCloud } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';
import { FaSalesforce } from 'react-icons/fa6';
import { SiMicrosoftedge } from 'react-icons/si';
import { OptionsType } from './servies';

const NavCompany = () => {
    const options: OptionsType[] = [
        {
            lable: 'About Us',
            url: '/about',
        },
        {
            lable: 'Why Us',
            url: '/why',
        },
        {
            lable: 'Team',
            url: '/team',
        },
        {
            lable: 'Terms and Conditions',
            url: '/terms-conditions',
        },
        {
            lable: 'Privacy Policy',
            url: '/privacy-policy',
        },
        // {
        //     lable: 'Careers',
        //     url: '/careers',
        // },
        // {
        //     lable: 'Partners & Certifications',
        //     url: '/partners',
        // },
        // {
        //     lable: 'Reviews & Awards',
        //     url: '/reviews-awards',
        // },
    ];

    interface PlatformType extends OptionsType {
        icon: React.ReactNode;
    }

    const platforms: PlatformType[] = [
        {
            lable: 'AWS',
            url: '/',
            icon: <FaAws size={30} />,
        },
        {
            lable: 'Google Cloud',
            url: '/',
            icon: <BiLogoGoogleCloud size={30} />,
        },
        {
            lable: 'Microsoft',
            url: '/',
            icon: <SiMicrosoftedge size={25} className="ml-1 mr-0.5" />,
        },
        {
            lable: 'Salesforce',
            url: '/',
            icon: <FaSalesforce size={25} className="ml-1" />,
        },
    ];
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-7">
            <div className="w-full py-10 md:col-span-2">
                <Text
                    tag="heading"
                    text={'Simplify IT for a complex world'}
                    className="font-bold md:text-4xl"
                />
            </div>

            <div className="w-full py-10 md:col-span-3">
                <div className="max-w-[388px]">
                    {options?.map((item) => (
                        <Link
                            href={item.url}
                            key={item.lable}
                            className="duration-300 transition-all"
                        >
                            <Text
                                text={item.lable}
                                className="text-tuatara-400 duration-300 transition-all hover:text-pacific-500 text-[15px] my-3 font-semibold"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-full py-10 md:col-span-2">
                <Text
                    tag="heading"
                    text={'Industry Focus'}
                    className="font-bold"
                />

                {platforms?.map((item) => (
                    <Link
                        href={item.url}
                        key={item.lable}
                        className="flex items-center gap-2 my-3 text-tuatara-400 duration-300 transition-all hover:text-pacific-500 "
                    >
                        {item.icon}
                        <Text
                            text={item.lable}
                            className="text-[15px]  font-semibold"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavCompany;
