import { Separator } from '@/components/ui/separator';
import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import { TbCircleDot } from 'react-icons/tb';

const CuttingEdge = () => {
    const cuttingEdgeData = [
        {
            id: 1,
            title: 'Technical Implementation',
            description:
                'Expert deployment of hardware and software solutions tailored to your business needs, ensuring seamless integration with existing systems.',
        },
        {
            id: 2,
            title: 'IT Helpdesk Support',
            description:
                '24/7 responsive assistance for all your IT issues, providing quick resolutions to minimize downtime and boost productivity.',
        },
        {
            id: 3,
            title: 'Managed IT Services',
            description:
                'Comprehensive oversight of your IT infrastructure, including proactive monitoring, maintenance, and updates to keep your systems running smoothly.',
        },
        {
            id: 4,
            title: 'IT Consulting',
            description:
                'Strategic advice and planning to align your IT initiatives with business goals, helping you make informed decisions about technology investments.',
        },
        {
            id: 5,
            title: 'Network Support',
            description:
                'Design, implementation, and maintenance of secure and efficient network infrastructures, ensuring optimal connectivity and data flow.',
        },
        {
            id: 6,
            title: 'Field Tech Support',
            description:
                "On-site technical assistance for hardware repairs, installations, and troubleshooting, providing hands-on solutions when remote support isn't enough.",
        },
    ];

    return (
        <section className="align-middle grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-2  items-center lg:h-screen">
            {/* sticky left side */}
            <div className="flex lg:flex-row items-center lg:justify-center flex-col-reverse gap-y-8 lg:col-span-2 lg:sticky lg:top-0">
                <div>
                    <Text
                        text="Cutting-edge tools that drive performance"
                        tag="h1"
                    />
                    <Text
                        className="my-6 text-md text-mine-400"
                        text="We can help you get back on track if your technology is using resources more efficiently than it is draining them. A provider of professionally managed services can offer you the advantage to:"
                    />
                </div>
                <div>
                    <Image
                        src="/services/Shape-dots-arrow-right.svg"
                        alt="dots_arrow-shappe"
                        width={500}
                        height={500}
                        className="w-52 md:w-52 lg:w-[500px] lg:relative lg:right-14 lg:bottom-24"
                    />
                </div>
            </div>
            {/* display items */}
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-1 grid-cols-1">
                {cuttingEdgeData?.map((item, index) => (
                    <div key={item.id}>
                        <div className="p-5">
                            <div className="flex">
                                <div className="relative right-2 top-1">
                                    <TbCircleDot className=" bg-pacific-600 w-5 h-5 leading-5  rounded-full text-white " />
                                </div>
                                <div>
                                    <Text
                                        text={item?.title}
                                        tag="heading"
                                        className="font-medium"
                                    />
                                    <Text
                                        text={item?.description}
                                        className="text-mine-400"
                                        tag="paragraph"
                                    />
                                </div>
                            </div>
                        </div>
                        {index !== cuttingEdgeData.length - 1 && <Separator />}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default CuttingEdge;
