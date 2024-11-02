'use client';

import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type OptionsType = {
    lable: string;
    url: string;
};

const NavServices = () => {
    const options: OptionsType[] = [
        {
            lable: 'Web Development',
            url: '/services',
        },
        {
            lable: 'Responsive & Mobile App Development',
            url: '/services',
        },
        {
            lable: 'UI/UX',
            url: '/services',
        },
        {
            lable: 'CMS Development',
            url: '/services',
        },
        {
            lable: 'Digital Marketing',
            url: '/services',
        },
        {
            lable: 'Web Maintenance & Support',
            url: '/services',
        },
    ];

    const industryoptions: OptionsType[] = [
        {
            lable: 'Industry Manufacturing',
            url: '',
        },
        {
            lable: 'Trasportation',
            url: '',
        },
        {
            lable: 'Healthcare',
            url: '',
        },
        {
            lable: 'E-Commerce',
            url: '',
        },
        {
            lable: 'Consulting Providers',
            url: '',
        },
        {
            lable: 'Non Profit',
            url: '',
        },
    ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-7">
            <div className="w-full py-10 md:col-span-2">
                <Text tag="heading" text={'Services'} className="font-bold" />
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

            {/* // Point: Business Challenges */}
            <div className="w-full py-10 md:col-span-3 hidden">
                <Text
                    tag="heading"
                    text={'Business Challanges'}
                    className="font-bold"
                />

                <div className="max-w-[388px] grid grid-cols-1 md:grid-cols-2 gap-3 my-2 ">
                    <div className="border border-pacific-300 rounded shadow-lg p-4 cursor-pointer">
                        <Image
                            src="/Home/Industry.svg"
                            height={200}
                            width={200}
                            alt="insdustry"
                            className="w-14"
                        />

                        <Text
                            text="Digital Services"
                            className="text-xm text-tuatara-400 font-medium mt-5"
                        />
                    </div>
                    <div className="border border-pacific-300 rounded shadow-lg p-4 cursor-pointer">
                        <Image
                            src="/Home/Industry.svg"
                            height={200}
                            width={200}
                            alt="insdustry"
                            className="w-14"
                        />

                        <Text
                            text="Digital Services"
                            className="text-xm text-tuatara-400 font-medium mt-5"
                        />
                    </div>
                    <div className="border border-pacific-300 rounded shadow-lg p-4 cursor-pointer">
                        <Image
                            src="/Home/Industry.svg"
                            height={200}
                            width={200}
                            alt="insdustry"
                            className="w-14"
                        />

                        <Text
                            text="Digital Services"
                            className="text-xm text-tuatara-400 font-medium mt-5"
                        />
                    </div>
                    <div className="border border-pacific-300 rounded shadow-lg p-4 cursor-pointer">
                        <Image
                            src="/Home/Industry.svg"
                            height={200}
                            width={200}
                            alt="insdustry"
                            className="w-14"
                        />

                        <Text
                            text="Digital Services"
                            className="text-xm text-tuatara-400 font-medium mt-5"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full py-10 md:col-span-2">
                <Text
                    tag="heading"
                    text={'Industry Focus'}
                    className="font-bold"
                />

                {industryoptions?.map((item) => (
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
    );
};

export default NavServices;
