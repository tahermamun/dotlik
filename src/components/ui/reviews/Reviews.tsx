'use client';
import DisplayReview from './DisplayReview';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Reviews = () => {
    // all data for Reviews section
    const reviewsData = [
        {
            id: 1,
            label: '20 ',
            value: 'Years',
            description: 'Proven Track Record',
        },
        {
            id: 2,
            label: ' 98',
            value: '%',
            description: 'Customer Satisfaction',
        },
        {
            id: 3,
            label: '1,500',
            value: 'Projects',
            description: 'We Have Completed',
        },
        {
            id: 4,
            label: '3',
            value: 'Mins',
            description: 'Average Answer Time',
        },
    ];

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-5 py-10">
                {/* review frist item start here */}
                <div className="max-md:col-span-2 max-md:border-b max-md:pb-3 flex gap-2 flex-col justify-center ">
                    <div className="flex max-md:flex-col md:items-center">
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
                            alt="fiverr_logo"
                            className="mr-3"
                        />
                        <span className="text-[11px] font-semibold">
                            31 REVIEWS
                        </span>
                    </div>
                </div>
                {/* review frist item end here */}
                {/* review all data map here */}
                {reviewsData?.map((data, idx) => (
                    <DisplayReview
                        label={data?.label}
                        value={data?.value}
                        description={data?.description}
                        key={idx}
                        isLast={idx === reviewsData.length - 1}
                    />
                ))}
            </div>
        </>
    );
};
export default Reviews;
