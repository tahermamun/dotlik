'use client';

import { FaPeopleGroup } from 'react-icons/fa6';
import { GiProcessor } from 'react-icons/gi';
import { MdOutlineSecurityUpdateGood } from 'react-icons/md';

import DisplayService from '@/components/ui/features/DisplayFeatures';

const WhyChooseUs = () => {
    const data = [
        {
            id: 1,
            icon: <FaPeopleGroup />,
            title: 'People',
            description:
                'The best is what you deserve. The best is what we have. In other words, all of us, senior technicians as well as young technicians, care. We choose, develop, and maintain the most highly skilled staff committed to prioritizing your needs.',
        },
        {
            id: 2,
            icon: <MdOutlineSecurityUpdateGood />,
            title: 'Purpose',
            description:
                'Your comfort and sense of security motivate us to improve every day. Our daily motivations include keeping up with the fast advancing field of technology, simplifying the complex, and saving you money. We are nerds with a mission.',
        },
        {
            id: 3,
            icon: <GiProcessor />,
            title: 'Process',
            description:
                'Not only what we do matters, but also how we do it. Our tried-and-true delivery strategies, communication protocols, and high-end hardware and software solutions guarantee repeatable outcomes and satisfied clients.',
        },
    ];

    return (
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3  items-center lg:my-16 md:my-10 mt-7 sm:gap-2">
            {data?.map((item) => (
                <DisplayService
                    icon={item?.icon}
                    title={item?.title}
                    description={item?.description}
                    key={item?.id}
                    className="sm:pr-12"
                />
            ))}
        </div>
    );
};

export default WhyChooseUs;
