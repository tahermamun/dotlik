'use client';

import Image from 'next/image';
import React from 'react';

import Text from '@/components/ui/typography/typography';

const ReviewSliderCard = () => {
    return (
        <div>
            <div className="w-[50px]">
                <Image
                    src="/slide-1.webp"
                    width={150}
                    height={120}
                    alt="slide"
                    className="w-full h-full object-cover"
                />
            </div>
            <Text
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum."
                className="text-tuatara-900 lg:text-3xl md:text-2xl text-lg mt-8"
            />

            <div className="flex flex-col gap-1 mt-7">
                <Text
                    text="Amanda Parks"
                    className="text-sm text-tuatara-950 font-bold"
                />
                <Text
                    text="Network Manager, HealthCare Organization"
                    className="text-sm text-tuatara-400"
                />
            </div>
        </div>
    );
};

export default ReviewSliderCard;
