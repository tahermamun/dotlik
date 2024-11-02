'use client';

import React from 'react';
import Text from '@/components/ui/typography/typography';
import awards from './awards.json';
import Image from 'next/image';

interface AwardType {
    title: string;
    description: string;
    imgPath: string;
}

const AwardsCard = () => {
    const awardsList: AwardType[] = awards;
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {awardsList.map((card) => (
                <div
                    key={card?.title}
                    className="bg-pacific-100 shadow py-16 px-4 rounded-sm flex flex-col justify-items-center items-center text-center"
                >
                    <Image
                        src={card.imgPath}
                        alt={card.title}
                        className="w-28 h-28"
                        width={100}
                        height={100}
                    />
                    <Text
                        text={card.title}
                        tag="heading"
                        className="text-tuatara-900 font-semibold mb-4 mt-5"
                    />
                    <Text tag="small" text={card.description} />
                </div>
            ))}
        </div>
    );
};

export default AwardsCard;
