import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import { FaRegDotCircle } from 'react-icons/fa';
import TimelineSection from './TimelineSection';
import Link from 'next/link';

const OurStory = () => {
    return (
        <section className="max-w-screen-lg mx-auto">
            {/* section title btn and heading start*/}
            <div className="text-center">
                <SectionTitleBtn
                    className="bg-[#F5F5F5] text-[#5F6567]"
                    text="About"
                />
                <Text
                    text="Committed to providing excellence"
                    tag="heading"
                    className="text-3xl lg:text-6xl font-semibold max-w-3xl m-auto sm:my-6 my-4"
                />
                <Text
                    text="Everyone has a story. Here is ours."
                    tag="heading"
                />
            </div>
            {/* section title btn and heading end */}
            {/* our story timeline start here */}
            <div className="relative wrap overflow-hidden p-5 mt-10">
                <div
                    className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block lg:block"
                    style={{ left: '50%' }}
                ></div>
                {/* timeline sections */}
                <FaRegDotCircle className="absolute bg-pacific-500 rounded-full text-white text-2xl top-1 left-1/2 transform -translate-x-1/2 hidden md:block lg:block" />
                <TimelineSection
                    imageUrl="/about/about_01.jpg"
                    heading="The Beginning"
                    text="The adventure of Dotlick IT started in 2024 when four developers teamed up. Taher Mamun, Anondo Bormon, Rakib Hasan Sohag, and Kawser Kabir made up the team, along with two senior developers and two junior developers. Together, they launched an IT company, using web technology to promote their expertise and make their company a major participant in the market."
                    isrowReverse={true}
                />

                <TimelineSection
                    imageUrl="/about/about_02.jpg"
                    heading="Mission"
                    text="At Dotlick, we are on a mission to combine the personalized service of small IT providers with the power of a nationwide network. We feel it is simpler than it appears. Our locations provide high-touch IT services that clients like from highly experienced local team members."
                    isrowReverse={false}
                />
                <TimelineSection
                    imageUrl="/about/about_03.jpg"
                    heading="We are Global"
                    text="Because of our vast network, we are able to offer premium web services, such as devoted teams for website maintenance, specialized security and compliance solutions, round-the-clock technical assistance for web-related problems, and more."
                    isrowReverse={true}
                />
                <FaRegDotCircle className="absolute  bg-pacific-500 rounded-full text-white text-2xl hidden md:block lg:block bottom-0 left-1/2 transform -translate-x-1/2" />
            </div>
            {/* our story timeline end */}
            {/* why us content start  */}
            <section className="space-y-4 lg:w-[860px] my-14  mx-auto p-4">
                <div>
                    <SectionTitleBtn
                        className="bg-[#F5F5F5] text-[#5F6567]"
                        text="About"
                    />
                </div>
                <Text
                    text="We recognize that business can be chaotic. That is where we come in. We are focusing on bringing some much-needed balance into the mix. We accomplish this by developing genuine ties with our clients. When you deal with us, you are collaborating with a team that understands your concerns and ambitions. We will help you discover order within the turmoil."
                    className="text-lg  text-[#5F6567]"
                />

                <Link
                    href="/why"
                    className="text-pacific-500 inline-block border-b-2 border-[#DEE0FF] text-xs font-medium cursor-pointer hover:border-b-2 hover:border-pacific-500 hover:transition duration-300 "
                >
                    Learn More
                </Link>
            </section>
            {/* why us content end */}
        </section>
    );
};

export default OurStory;
