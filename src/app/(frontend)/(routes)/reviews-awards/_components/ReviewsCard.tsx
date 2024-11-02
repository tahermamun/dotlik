'use client';

import React from 'react';
import Text from '@/components/ui/typography/typography';
import reviews from './reviews.json';
import { FaStar } from 'react-icons/fa';

interface ReviewsType {
    title: string;
    description: string;
}

const ReviewsCard = () => {
    const rewardList: ReviewsType[] = reviews;
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {rewardList.map((card) => (
                <div
                    key={card.title}
                    className="border-tuatara-50 border-2 rounded-sm flex flex-col justify-end"
                >
                    <div className="flex md:items-center pt-12 px-7">
                        <h1 className="mr-2 text-2xl font-light">5.0</h1>
                        <div className="flex items-center gap-[1px]">
                            <FaStar className="text-emerald-500" />
                            <FaStar className="text-emerald-500" />
                            <FaStar className="text-emerald-500" />
                            <FaStar className="text-emerald-500" />
                            <FaStar className="text-emerald-500" />
                        </div>
                    </div>

                    <Text
                        text={card.description}
                        tag="small"
                        className="text-tuatara-900 py-9 px-7"
                    />
                    <Text
                        tag="small"
                        text={card.title}
                        className="text-tuatara-900 bg-tuatara-100 px-7 py-9"
                    />
                </div>
            ))}
        </div>
    );
};

export default ReviewsCard;
