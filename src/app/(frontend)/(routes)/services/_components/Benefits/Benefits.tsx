'use client';
import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

type ServiceBannerProps = {
    serviceName: string;
    serviceDesc: string;
    sideBarImg: string;
};
const Benefits = ({
    serviceName,
    serviceDesc,
    sideBarImg,
}: ServiceBannerProps) => {
    // Point: Service item data
    const benefitServiceItem = [
        {
            id: 1,
            title: 'IT Service for You',
            description:
                'We provide solutions for all business sizes and budgets since we understand that every business has unique demands.',
        },
        {
            id: 2,
            title: 'Predictable Costs 24/7',
            description:
                'When a server malfunctions or your network is down, we do not charge you extra. All of stuff is covered by our flat-rate charge plans whenever you need it completed.',
        },
        {
            id: 3,
            title: 'Keeping Your Team Productive',
            description:
                'We offer managed services that encompass 24-hour surveillance of your network servers, PCs, and critical equipment.',
        },
        {
            id: 4,
            title: 'Our Team is Ready to Help',
            description:
                'Our availability around the clock, on holidays or other special occasions, is one of the things that sets our managed services apart from others.',
        },
    ];

    return (
        <section className="container mt-20 grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:grid-cols-2 lg:justify-items-end justify-items-center items-center">
            <div className="">
                <Text
                    text={`Benefits of ${serviceName} provided by Dotlick It`}
                    className="text-4xl font-semibold"
                />
                <Text
                    text={serviceDesc}
                    className=" text-mine-400 text-md my-6"
                />
                {/* list item */}
                <div className="mb-8">
                    <ul className="list-inside space-y-1 list-disc text-mine-400">
                        <li>
                            Expand your company as our professionals take care
                            of your technology.
                        </li>
                        <li>
                            With information technology, you can complete more
                            tasks more quickly and more productively.
                        </li>
                        <li>
                            With a fixed monthly fee for full IT, budgeting
                            surprises are eliminated.
                        </li>
                        <li>
                            Protect your business and your data from unexpected
                            problems.
                        </li>
                    </ul>
                </div>
                {/* service items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                    {benefitServiceItem?.map((item) => (
                        <div key={item?.id} className="flex gap-x-3 h-full">
                            <div className="flex-shrink-0 pt-1">
                                <FaCheckCircle className="text-pacific-500 text-xl" />
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <Text
                                        text={item?.title}
                                        className="text-xl font-bold mb-2"
                                    />
                                    <Text
                                        text={item?.description}
                                        className="text-mine-400"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Image
                    className="rounded"
                    src={sideBarImg}
                    width={500}
                    height={500}
                    alt="developer_image"
                />
            </div>
        </section>
    );
};
export default Benefits;
