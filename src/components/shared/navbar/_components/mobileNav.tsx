'use client';

import Text from '@/components/ui/typography/typography';
import Link from 'next/link';
import { useState } from 'react';
import { IoCaretDownOutline } from 'react-icons/io5';
import { OptionsType } from './servies';
import { cn } from '@/lib/utils';

const MobileNavItems = () => {
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

    const companyoptions: OptionsType[] = [
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
            lable: 'Careers',
            url: '/careers',
        },
        {
            lable: 'Partners & Certifications',
            url: '/partners',
        },
        {
            lable: 'Reviews & Awards',
            url: '/reviews-awards',
        },
    ];

    return (
        <div className="pb-5">
            <Dropdown items={options} lable="Solutions" />
            <Dropdown items={companyoptions} lable="Company" />
            <Dropdown items={options} lable="Company" />
            <Dropdown items={options} lable="Company" />
            <Dropdown items={options} lable="Company" />
        </div>
    );
};

export default MobileNavItems;

interface DropdownProps {
    items: OptionsType[];
    lable: string;
}

const Dropdown = ({ items, lable }: DropdownProps) => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div
            className={cn(
                'max-h-[45px] my-0.5 transition-all duration-200 overflow-hidden',
                selected && 'max-h-[3000px] duration-300'
            )}
        >
            <div
                className="flex items-center gap-2  cursor-pointer py-3 pl-3 hover:bg-gray-300"
                onClick={() => setSelected(!selected)}
            >
                <Text
                    text={lable}
                    className="font-semibold text-base text-tuatara-500"
                />

                {items.length ? (
                    <IoCaretDownOutline className="text-xs mt-0.5 text-tuatara-500" />
                ) : null}
            </div>

            {items?.map((item) => (
                <Link
                    href={item.url}
                    key={item.lable}
                    className="duration-300 transition-all"
                >
                    <Text
                        text={item.lable}
                        className="text-tuatara-400 duration-300 transition-all hover:text-pacific-500 text-[15px] my-4 font-medium pl-5"
                    />
                </Link>
            ))}
        </div>
    );
};
