'use client';
import { FaBoxes, FaRegLightbulb } from 'react-icons/fa';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { GrUserExpert } from 'react-icons/gr';
import DisplayFeatures from './DisplayFeatures';

const Features = () => {
    const data = [
        {
            id: 1,
            img: '/Home/Cost-effectiveness.svg',
            title: 'Cost-effectiveness',
            description:
                'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
            icon: <FaMoneyBillTransfer />,
        },
        {
            id: 2,
            img: '/Home/Innovative.svg',
            title: 'Innovative Technology',
            description:
                'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
            icon: <FaRegLightbulb />,
        },
        {
            id: 3,
            img: '/Home/Industry.svg',
            title: 'Industry Expertise',
            description:
                'We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique.',
            icon: <GrUserExpert />,
        },
        {
            id: 4,
            img: '/Home/Scalability.svg',
            title: 'Scalability',
            description:
                'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment. ',
            icon: <FaBoxes />,
        },
    ];

    return (
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-6 items-center my-20 md:grid-cols-2">
            {data?.map((item) => (
                <DisplayFeatures
                    img={item?.img}
                    title={item?.title}
                    description={item?.description}
                    key={item?.id}
                    iconClass="text-6xl text-pacific-400"
                />
            ))}
        </div>
    );
};

export default Features;
