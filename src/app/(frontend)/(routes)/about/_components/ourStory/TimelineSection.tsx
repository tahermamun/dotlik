import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import { TbCircleDot } from 'react-icons/tb';

type TimelineSectionType = {
    imageUrl: string;
    heading: string;
    text: string;
    isrowReverse: boolean;
};
const TimelineSection = ({
    imageUrl,
    heading,
    text,
    isrowReverse,
}: TimelineSectionType) => {
    return (
        <div
            className={`flex items-center flex-col md:flex-row lg:flex-row  mt-8 lg:mb-14 md:mb-10 justify-between ${!isrowReverse ? 'lg:flex-row-reverse   md:flex-row-reverse' : 'lg:flex-row'}`}
        >
            <div className={`lg:w-5/12 md:w-5/12`}>
                <Image
                    src={imageUrl}
                    alt={heading}
                    width={500}
                    height={500}
                    className={`rounded-lg  md:w-80 lg:w-80 ${!isrowReverse ? 'lg:ml-2 md:ml-2' : 'lg:ml-20'}`}
                />
            </div>
            <div className={' flex items-center justify-center w-1/12'}>
                <TbCircleDot className="hidden md:block lg:block text-pacific-500 ml-[0.1px]" />
            </div>
            <div className={`lg:w-5/12 mt-4 md:w-5/12 mr-5 md:mr-0 lg:mr-0`}>
                <div className={`lg:w-80 ml-0 ${!isrowReverse && 'ml-auto'}`}>
                    <Text text={heading} className="mb-3 font-bold text-xl" />
                    <Text className=" text-[#5F6567]" text={text} />
                </div>
            </div>
        </div>
    );
};

export default TimelineSection;
